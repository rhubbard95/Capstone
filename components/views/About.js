import html from "html-literal";

export default () => html`
  <section id="aboutme">
    <h2 class="Headers">A little more about me</h2>
  </section>
  <p>
    I primarily worked in customer service throughout different environments
    like fast food, the cell phone industry, and financial technology. Whenever
    Covid spread across the United States, a lot of jobs shifted to remote work,
    which I personally enjoyed. This led me to flex into the creative side of me
    and I became a content creator. After working my customer service position
    for some years, my life changed and I decided that it would be beneficial
    for me to pick up another skill set. Through some great people that I've met
    in college, I was able to find an opportunity to start my coding journey
    through Savvy Coders. I'm truly grateful for the opportunity and I plan on
    jumping back into creating content for myself along with seeing what cool
    web pages and applications that I can create.
  </p>

  <!-- Need to work with this -->
  <!-- <table id="pizzas">
<tr><th>Crust</th><th>Cheese</th><th>Sauce</th><th>Toppings</th><th>Customer</th></tr>
${state.pizzas
    .map(pizza => {
      return `<tr><td>${pizza.crust}</td><td>${pizza.cheese}</td><td>${
        pizza.sauce
      }</td><td>${pizza.toppings.join(" & ")}</td><td>${
        pizza.customer
      }</td></tr>`;
    })
    .join("")}
</table> -->
`;
