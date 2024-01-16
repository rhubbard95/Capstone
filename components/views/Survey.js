import html from "html-literal";

export default () => html`
  <p id="survey context">
    This is an anonymous survey asking for only 2 things. For the first entry to
    please enter the games you are currently playing with some form of a parry
    mechanic.
  </p>
  <section id="survey">
    <h2 id="surveyheader">A quick survey</h2>

    <form
      action="https://formspree.io/f/mvojebek"
      method="post"
      class="Gamename"
    ></form>
    <form class="Gamename">
      <label for="game"
        >Enter the game you're practicing the timing for:
      </label>
      <input type="text" name="game" required />
    </form>

    <h4>Underneath, feel free to rate the web application</h4>
    <form
      action="https://formspree.io/f/mvojebek"
      method="post"
      class="rating"
    ></form>
    <form class="rating">
      <label
        ><input type="radio" name="radio" value="Very Satisfied" />Very
        Satisfied</label
      >
      <label
        ><input type="radio" name="radio" value="Satisfied" />Satisfied</label
      >
      <label><input type="radio" name="radio" value="Neutral" />Neutral</label>
      <label
        ><input
          type="radio"
          name="radio"
          value="Dissatisfied"
        />Dissatisfied</label
      >
      <label
        ><input type="radio" name="radio" value="Very Dissatisfied" />Very
        Dissatisfied</label
      >
    </form>
    <section></section>
  </section>
`;
