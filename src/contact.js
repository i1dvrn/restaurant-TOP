const details = [
  ["Address", "123 Maple Street, Springfield"],
  ["Phone", "(555) 010-0199"],
  ["Email", "hello@rustyfork.example"],
  ["Reservations", "Call ahead for parties of six or more."],
];

export default function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("tab", "contact");

  const title = document.createElement("h1");
  title.textContent = "Contact";

  const card = document.createElement("dl");
  card.classList.add("contact-card");

  details.forEach(([label, value]) => {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = value;
    card.append(dt, dd);
  });

  contact.append(title, card);
  return contact;
}
