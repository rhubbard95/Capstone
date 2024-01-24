import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

let FORMS_API_URL;

if (process.env.FORMS_API_URL) {
  FORMS_API_URL = process.env.FORMS_API_URL || "http://localhost:4040";
} else {
  console.error("Please create the .env file with a value for FORMS_API_URL");
}

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  //the error is here//
  if (state.view === "Survey") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // router.navigate("/Survey");
      const inputList = event.target.elements;
      const requestData = { game: inputList.game.value };

      axios
        .post(`${FORMS_API_URL}/forms`, requestData)
        .then(response => {
          store.About.forms.push(response.data);
          router.navigate("/About");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("err", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      case "Survey":
        axios.get(`${process.env.FORMS_API_URL}/forms}`).then(response => {
          store.About.forms = response.data;
          done();
        });
        break;

      default:
        done();
    }
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

// corrected but my page still navigates to Survey?
