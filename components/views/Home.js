import html from "html-literal";

export default state => html`
  <section>
    <h1 id="Title">Rashad Hubbard</h1>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
    <h2 class="Headers">A little about me</h2>
    <p>
      Hey there! My name is Rashad Hubbard. I'm happy that you ran into this web
      application!
    </p>

    <p class="spacing">
      I'm currently enrolled in Savvy coders boot-camp to diversify my career
      skill set. With that being said, I've created this project to share some
      of the concepts that I've learned.
    </p>

    <h3 class="Headers">Why a parry trainer you ask?</h3>

    <p class="spacing">
      Great question! I chose this because I am a gamer. Bet you never would've
      guessed that right? There are a large variety of game types that exist in
      the world. This parry trainer exists to help with reaction time. In
      certain games, and probably other examples outside of gaming, the ability
      to look at something happening and to click a button at the appropriate
      time is important. Gaming examples will be something like the God of War
      series, Furi, Sifu, and plenty of other games.
    </p>
  </section>
`;
