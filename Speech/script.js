const main_el = document.getElementById("main");

const data = [
  {
    image: "./img/drink.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./img/food.jpg",
    text: "I'm Hungry",
  },
  {
    image: "./img/tired.jpg",
    text: "I'm Tired",
  },
  {
    image: "./img/hurt.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./img/happy.jpg",
    text: "I'm Happy",
  },
  {
    image: "./img/angry.jpg",
    text: "I'm Angry",
  },
  {
    image: "./img/sad.jpg",
    text: "I'm Sad",
  },
  {
    image: "./img/scared.jpg",
    text: "I'm Scared",
  },
  {
    image: "./img/outside.jpg",
    text: "I Want To Go Outside",
  },
  {
    image: "./img/home.jpg",
    text: "I Want To Go Home",
  },
  {
    image: "./img/school.jpg",
    text: "I Want To Go To School",
  },
  {
    image: "./img/grandma.jpg",
    text: "I Want To Go To Grandmas",
  },
];

// console.log(data[0].image);

function createCards(image, text) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card_container");
  cardContainer.innerHTML = `
    <div class="image_container">
        <img src=${image} alt="card information" />
    </div>
    <p class="card_description">
        ${text}
    </p>`;
  //   console.log(main_el); // null !!!!
  console.log(cardContainer); // working good
  //   main_el.appendChild(cardContainer);
}
// data.forEach(createCards);
data.forEach((e, index) => {
  createCards(data[index].image, data[index].text);
});
