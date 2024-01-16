import html from "html-literal";
import sifu from "../../assets/img/sifu.jpg";

export default state => html`
  <section>
    <h1 id="Title">Rashad Hubbard</h1>

<<<<<<< HEAD
    <h3 id="forecast">
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
=======
    <h3>
      Here is a random fun fact! Make sure you check back daily to learn
      something new while perfecting your timing! ${state.fact}
>>>>>>> 41b1761b4bbf4dcc202719ca92c2ccb5049552a2
    </h3>
    <h2 class="Headers">A little about me</h2>
    <p class="spacing">
      Hey there! My name is Rashad Hubbard. I'm happy that you ran into this web
      application!
    </p>

    <p class="spacing">
      I'm currently enrolled in Savvy coders boot-camp to diversify my career
      skill set. With that being said, I've created this project to share some
      of the concepts that I've learned.
    </p>
    <section id="whytrainer">
      <h3 class="Headers">Why a parry trainer you ask?</h3>

      <p class="spacing">
        Great question! I chose this because I am a gamer. Bet you never
        would've guessed that right? There are a large variety of game types
        that exist in the world. This parry trainer exists to help with reaction
        time. In certain games, and probably other examples outside of gaming,
        the ability to look at something happening and to click a button at the
        appropriate time is important. Gaming examples will be something like
        the God of War series, Furi, Sifu, and plenty of other games.
      </p>
    </section>
    <div>
      <img src=${sifu} id="Image" />
    </div>
  </section>
`;
