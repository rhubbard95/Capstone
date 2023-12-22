import html from "html-literal";

export default () => html`
  <form
    action="https://formspree.io/f/mvojebek"
    method="post"
    class="Gamename"
  ></form>
  <form class="Gamename">
    <label for="game">Enter the game you're practicing the timing for: </label>
    <input type="text" name="game" required />
  </form>
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
`;
