let dataCars = [
  {
    image: "/assets/svg/audi.svg",
    name: "audi",
  },
  {
    image: "/assets/svg/bmw.svg",
    name: "bmw",
  },
  {
    image: "/assets/svg/chevrolet.svg",
    name: "chevrolet",
  },
  {
    image: "/assets/svg/nissan.svg",
    name: "nissan",
  },
  {
    image: "/assets/svg/tesla.svg",
    name: "tesla",
  },
  {
    image: "/assets/svg/volvo.svg",
    name: "volvo",
  },
  {
    image: "/assets/svg/porsche.svg",
    name: "porsche",
  },
  {
    image: "/assets/svg/mercedes.svg",
    name: "mercedes",
  },
  {
    image: "/assets/svg/mclaren.svg",
    name: "mclaren",
  },
  {
    image: "/assets/svg/lexus.svg",
    name: "lexus",
  },
  {
    image: "/assets/svg/lamborghini.svg",
    name: "lamborghini",
  },
  {
    image: "/assets/svg/kia.svg",
    name: "kia",
  },
  {
    image: "/assets/svg/jeep.svg",
    name: "jeep",
  },
  {
    image: "/assets/svg/rolls-royce.svg",
    name: "rolls-royce",
  },
  {
    image: "/assets/svg/isuzu.svg",
    name: "isuzu",
  },
  {
    image: "/assets/svg/honda.svg",
    name: "jonda",
  },
  {
    image: "/assets/svg/ford.svg",
    name: "ford",
  },
  {
    image: "/assets/svg/ferrari.svg",
    name: "ferrari",
  },
  {
    image: "/assets/svg/daewo.svg",
    name: "daewo",
  },
  {
    image: "/assets/svg/cupra.svg",
    name: "cupra",
  },
  {
    image: "/assets/svg/chevrolet.svg",
    name: "chevrolet",
  },
  {
    image: "/assets/svg/bugatti.svg",
    name: "bugatti",
  },
  {
    image: "/assets/svg/bentley.svg",
    name: "bentley",
  },
  {
    image: "/assets/svg/volkswagen.svg",
    name: "volkswagen",
  },
  {
    image: "/assets/svg/astonmartin.svg",
    name: "astonmartin",
  },
];

let cardsCar = document.querySelector(".cards-car");

dataCars.forEach((parametr) => {
  const card = document.createElement("div");
  const create = document.createElement();
  card.innerHTML = `
    <div class="avto-card content">
        <img src="${parametr.image}" alt="${parametr.name}">
    </div>
    `;
    cardsCar.appendChild(card);
});
