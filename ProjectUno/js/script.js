import Deck from "./deck.js"

const deck = new Deck();
deck.shuffle();

// console.log(deck.shuffle());

const player1 = document.getElementsByClassName("player1-deck")[0];
const player2 = document.getElementsByClassName("player2-deck")[0];
// console.log(player1);

function getColor(color){
    switch(color){
        case "R":
            return "background-color: red;";
            break;
        case "B":
            return "background-color: blue;";
            break;
        case "G":
            return "background-color: green;";
            break;
        case "Y":
            return "background-color: yellow;";
            break;
    }
}

function createCard(number,color){
    const card = document.createElement('div');
    card.setAttribute("style", getColor(color));
    card.className = "card";

    const topNumber = document.createElement('div');
    topNumber.innerText = number;
    topNumber.className = "top-number";
    card.append(topNumber);

    return card;
}

for(var i = 0; i < 7; i++)
{
    var tempCard = deck.draw();
    var card = createCard(tempCard.value,tempCard.color);
    card.className = "card toleft";
    player1.appendChild(card);

    tempCard = deck.draw();
    var card = createCard(tempCard.value,tempCard.color);
    card.className = "card toleft";
    player2.appendChild(card);

}


