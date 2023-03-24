let baseURL = "https://deckofcardsapi.com/api/deck";

/***** Solution 1 *****/
axios.get(`${baseURL}/new/draw/`).then((res) => {
  let { suit, value } = res.data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});
