import * as components from "./components";
import * as store from "./store";

const router = new Navigo("/");

import Navigo from "navigo";
import { capitalize } from "lodash";

router.on("/", () => render(store.Home)).resolve();

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

function render(state = store.Home, router.updatePageLinks();) {
  document.querySelector("#root").innerHTML = `
      ${Head(State)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
}

render();

```javascript
    ${links.map(
      (link) =>
        `<li><a href="/${link.title}"
        title="${link.title}" data-navigo>${link.text}</a></li>`
    ).join("")};
```
