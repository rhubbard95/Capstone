import html from "html-literal";
export default links => html`
  <nav class="menu">
    <section>
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </section>
  </nav>
`;
