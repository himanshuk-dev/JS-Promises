// global variables
let cardHolder = document.getElementById("container");
const form = document.getElementById("form");
let checkbox = document.getElementById("checkbox");

form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the number from input field
  let number = document.getElementById("number").value;

  // check if invalid input
  if (!number) {
    alert("Please enter a valid number.");
    form.reset();
    return;
  }

  /*******  Solution 1  *******/
  //API URL
  let url = `http://numbersapi.com/${number}?json`;

  //   Promise to get data from API
  if (number.length < 2 && !checkbox.checked) {
    axios.get(url).then((res) => {
      generateCard(res.data.text);
    });
  }
  /******* End of Solution 1 ********/

  /*******  Solution 2  *******/

  if (number.length > 1 && !checkbox.checked) {
    axios.get(url).then((res) => {
      let facts = res.data;
      multipleInputs(facts);
    });

    function multipleInputs(facts) {
      let factArray = Object.values(facts);
      factArray.forEach((fact) => {
        generateCard(fact);
      });
    }
  }

  /******* End of Solution 2  *******/

  /*******  Solution 3  *******/

  if (checkbox.checked) {
    number = Array(4).fill(number);
    axios.get(url).then((res) => {
      let facts = res.data;
      multipleFacts(facts);
    });

    function multipleFacts(facts) {
      let factArray = Object.values(facts);
      factArray.forEach((fact) => {
        generateCard(fact);
      });
    }
  }

  /*******  End of Solution 3  *******/

  //   reset form after submit
  form.reset();
});

// Generate information card

function generateCard(fact) {
  const card = document.createElement("div");
  card.classList.add("card", "m-2", "bg-dark", "text-light");
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
