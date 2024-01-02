import html from "html-literal";
export default state => html`
  <header>
    <h1>${state.header}</h1>
    <!-- <nav class="menu">
      <a href="./Home">Home</a>
      <a href="./About">About Me</a>
      <a href="./Survey">Survey</a>
    </nav> -->
  </header>
`;
