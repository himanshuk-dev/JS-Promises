let baseURL = "https://deckofcardsapi.com/api/deck";

/***** Solution 1*****/
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
