import Deck from "./deck.js"

const deck = new Deck();
deck.shuffle();

console.log(deck.shuffle());

const player1 = document.getElementsByClassName("player1-deck")[0];
const player2 = document.getElementsByClassName("player2-deck")[0];
// console.log(player1);

function getColor(color, value){
    
    if(value == "+4"){
        return "background-image: black;"; 
    }
    else if(value == "C"){
        return "background-color: black;"; 
    }
    
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

function getValueColor(value){
    if(value == "+4" || value == "C"){
        return "white"; 
    }
    else
        return "black";
}

// function getRevCardImg(color){
//     switch(color){

//         case "R":
//             return "url('../images/revRed.jpg')";
//             break;
//         case "B":
//             return "url('../images/revBlue.png')";
//             break;
//         case "G":
//             return "url('../images/revGreen.png')";
//             break;
//         case "Y":
//             return "url('../images/revYellow.png')";
//             break;
//     }
// }

// function getSkipCardImg(color){
//     switch(color){

//         case "R":
//             return "url('../images/revRed.jpg')";
//             break;
//         case "B":
//             return "url('../images/revBlue.png')";
//             break;
//         case "G":
//             return "url('../images/revGreen.png')";
//             break;
//         case "Y":
//             return "url('../images/revYellow.png')";
//             break;
//     }
// }

function createCard(number,color){
    const card = document.createElement('div');
    card.setAttribute("style", getColor(color,number));
    // card.style.backgroundColor = getColor(color, number);
    card.style.color = getValueColor(number);
    card.className = "card";

    const topNumber = document.createElement('div');
    topNumber.innerText = number;
    topNumber.className = "top-number";

    
    card.append(topNumber);

    if(!(number == "+4" || number == "C" || number == "R" || number =="S")){
        const cardNum = document.createElement('div');
        cardNum.className = "card-number";
        cardNum.innerText = number;
        card.append(cardNum);
        card.style.backgroundImage = "url('../images/"+color+".png')";
        
    }
    else if(number == "+4"){
        card.style.backgroundImage = "url('../images/fourCard.png')";
    }
    else if((number == "C")){
        card.style.backgroundImage = "url('../images/colorCard.png')";
        card.innerText = "";
    }
    else if(number == "R"){
        card.style.backgroundImage = "url('../images/"+color+number+".png')";
        card.innerText = "";
    }
    else {
        card.style.backgroundImage = "url('../images/"+color+number+".png')";
        card.innerText = "";
    }
    
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


