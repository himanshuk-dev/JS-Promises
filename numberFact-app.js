// global variables
let cardHolder = document.getElementById("container");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the number and convert to integer
  const number = document.getElementById("number").value;

  if (!number) {
    alert("Please enter a number.");
    return;
  }

  //API URL
  let url = `http://numbersapi.com/${number}`;

  //   Promise to get data from API
  axios.get(url).then((res) => {
    generateCard(res.data);
  });

  //   reset form after submit
  form.reset();
});

// Generate information card

function generateCard(fact) {
  const card = document.createElement("div");
  card.classList.add("card", "m-4", "bg-dark", "text-light");
  card.style.width = "18rem";
  card.style.display = "inline-block";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = fact;

  cardBody.appendChild(cardText);

  card.appendChild(cardBody);
  cardHolder.appendChild(card);

  return cardHolder;
}
