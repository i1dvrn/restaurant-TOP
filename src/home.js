export default function createHome() {
  const home = document.createElement("div");
  home.classList.add("tab", "home");

  const hero = document.createElement("div");
  hero.classList.add("hero");
  hero.setAttribute("role", "img");
  hero.setAttribute("aria-label", "A warm, candlelit dining room");

  const title = document.createElement("h1");
  title.textContent = "The Rusty Fork";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Hearty food. Honest prices. Seconds on the bread.";

  const intro = document.createElement("p");
  intro.textContent =
    "Tucked away on a quiet corner, The Rusty Fork has been serving " +
    "wood-fired comfort food since 1998. Everything is made from scratch " +
    "with ingredients from farms down the road, and every table gets a " +
    "basket of warm bread the moment they sit down.";

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours";

  const hours = document.createElement("ul");
  [
    "Monday – Thursday: 11am – 9pm",
    "Friday – Saturday: 11am – 11pm",
    "Sunday: 10am – 8pm (brunch until 2pm)",
  ].forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    hours.appendChild(li);
  });

  home.append(hero, title, tagline, intro, hoursHeading, hours);
  return home;
}
