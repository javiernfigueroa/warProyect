let deckId = "";
let pcScore = 0;
let myScore = 0;

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      console.log(deckId);
    });
}

function drawCard() {
  if (deckId === "") {
    console.log("Please click New Deck First");
    return;
  }
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((card) => {
      console.log(card);
      document.getElementById("card1").innerHTML = `
      <img class="cards" src=${card.cards[0].image}></img>
      `;
      document.getElementById("card2").innerHTML = `
      <img class="cards" src=${card.cards[1].image}></img>
      `;

    });
}

document.getElementById("new-deck").addEventListener("click", handleClick);
document.getElementById("new-cards").addEventListener("click", drawCard);


// document.getElementById("pc-score").innerHTML = `
// <h4>PC Score: ${myScore + card.cards[0].value}</h4>
// `;

// document.getElementById("player-score").innerHTML = `
// <h4>My Score: ${myScore + card.cards[1].value}</h4>
// `;