const dishes = [
  {
    name: "Wood-Fired Margherita",
    description: "San Marzano tomato, fresh mozzarella, basil, olive oil.",
    price: "$14",
  },
  {
    name: "Braised Short Rib",
    description: "Slow-cooked for eight hours, over creamy polenta.",
    price: "$26",
  },
  {
    name: "Harvest Salad",
    description: "Roasted squash, kale, pepitas, maple vinaigrette.",
    price: "$12",
  },
  {
    name: "Rustic Mac & Cheese",
    description: "Three cheeses, toasted breadcrumb crust.",
    price: "$15",
  },
  {
    name: "Apple Cobbler",
    description: "Warm, with vanilla bean ice cream.",
    price: "$9",
  },
];

export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("tab", "menu");

  const title = document.createElement("h1");
  title.textContent = "Menu";
  menu.appendChild(title);

  dishes.forEach(({ name, description, price }) => {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const info = document.createElement("div");
    const dishName = document.createElement("h3");
    dishName.textContent = name;
    const dishDesc = document.createElement("p");
    dishDesc.textContent = description;
    info.append(dishName, dishDesc);

    const dishPrice = document.createElement("span");
    dishPrice.classList.add("price");
    dishPrice.textContent = price;

    item.append(info, dishPrice);
    menu.appendChild(item);
  });

  return menu;
}
