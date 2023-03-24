let baseURL = "https://deckofcardsapi.com/api/deck";

/***** Solution 1 *****/
axios.get(`${baseURL}/new/draw/`).then((res) => {
  let { suit, value } = res.data.cards[0];
  console.log(
    "Draw single card from a deck >>>>",
    `${value.toLowerCase()} of ${suit.toLowerCase()}`
  );
});

/***** Solution 2 *****/

axios.get(`${baseURL}/new/draw/`).then((res) => {
  let deckId = res.data.deck_id;
  let firstCard = res.data.cards[0];

  axios.get(`${baseURL}/${deckId}/draw/`).then((res) => {
    let secondCard = res.data.cards[0];
    console.log(
      `Card 1: ${firstCard.value} of ${firstCard.suit}`,
      `Card 2: ${secondCard.value} of ${secondCard.suit}`
    );
  });
});

/***** Solution 3 *****/
let btn = document.getElementById("button");

btn.addEventListener("click", function setup() {
  let cardContainer = document.querySelector("#card-container");

  axios
    .get(`${baseURL}/new/shuffle/`)
    .then((res) => {
      return axios.get(`${baseURL}/${res.data.deck_id}/draw/`);
    })
    .then((res) => {
      console.log("button", res);
      let cardSrc = res.data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      let img = document.createElement("img");
      img.setAttribute("src", cardSrc);

      img.setAttribute(
        "style",
        `transform: translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
      );
      cardContainer.append(img);
    });
});
