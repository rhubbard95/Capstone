import html from "html-literal";

export default () => html`
  <p id="survey context">
    This is an anonymous survey asking for only 2 things. For the first entry to
    please enter the games you are currently playing with some form of a parry
    mechanic.
  </p>
  <section id="survey">
    <h2 id="surveyheader">A quick survey</h2>

    <form action="https://formspree.io/f/mvojebek" method="post">
      <label>
        Enter the game you're practicing the timing for:
        <input type="text" name="game" required />
      </label>
      <button type="submit">Send</button>
    </form>

    <h4>Underneath, feel free to rate the web application</h4>

    <form class="rating"
      action="https://formspree.io/f/mvojebek"
      method="post"><input type="radio" name="radio" value="Very Satisfied" />Very
        Satisfied</label
      >
      <label
        ><input type="radio" name="radio" value="Satisfied" />Satisfied</label
      >
      <label><input type="radio" name="radio" value="Neutral" required />Neutral</label>
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
      <button type="submit">Send</button>

    </form>
    <section></section>
  </section>
`;
