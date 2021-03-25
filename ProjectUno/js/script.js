import Deck from "./deck.js"

// const body = document.getElementsByClassName("container-main")[0];
// const play = document.createElement('div');
// play.className = "play-button";
// play.innerText = "PLAY";

// body.appendChild(play);

const deckArea = document.getElementById("deckArea");
const playArea = document.getElementById("playArea");
const menu = document.getElementById("head");

const deck = new Deck();

//game
const exit = document.getElementById("m4");
exit.onclick = ()=>{    //reset game
    location.reload();
    
}

menu.hidden = true;

let cardsP1 = [], cardsP2 = [], inRound, currentcard;

const activeArea = document.getElementById("activeArea");

const red = document.createElement('div');
red.className = "uno-button red";
red.id = "R";
red.onclick = function(){colorSelected(this)};

const blue = document.createElement('div');
blue.className = "uno-button blue";
blue.id = "B";
blue.onclick = function(){colorSelected(this)};

const green = document.createElement('div');
green.className = "uno-button green";
green.id = "G";
green.onclick = function(){colorSelected(this)};
        
const yellow = document.createElement('div');
yellow.className = "uno-button yellow";
yellow.id = "Y";
yellow.onclick = function(){colorSelected(this)};

var color;

// console.log(activeArea)

const playButton = document.createElement('div');
playButton.className = "play-button";
playButton.innerText = "PLAY";
playButton.onclick = function() {

    const player1 = document.getElementsByClassName("player1-deck")[0];
    const p1uno = document.getElementById("uno1");
    const player2 = document.getElementsByClassName("player2-deck")[0];
    const p2uno = document.getElementById("uno2");
    menu.hidden = false;
    playButton.hidden = true;
    inRound = -1;
    
    deck.shuffle();
    
    // console.log(deck.shuffle());
    
    
    // console.log(player1);
    
    const decK = document.createElement('div');
    decK.className = "deck-card card";
    decK.id = "deck";
    decK.onclick = function(){
        if(inRound == 1 || inRound == -1){
            drawCard("p1");
        }
        else{
            drawCard("p2");
        }
    };
    deckArea.appendChild(decK);
    
    // const plaY = document.createElement('div');
    // plaY.className = "play-card card";
    // // plaY.id = "play";
    // playArea.appendChild(plaY);
    // currentcard = plaY;

    const p1name = document.createElement('div');
    p1name.className = "name toleft";
    p1name.id = "p1nm";
    p1name.innerText = "Player 1";
    player1.appendChild(p1name);

    const p2name = document.createElement('div');
    p2name.className = "name toleft";
    p2name.id = "p2nm";
    p2name.innerText = "Player 2";
    player2.appendChild(p2name);
    
    for(var i = 0; i < 7; i++)
    {
        var tempCard = deck.draw();
        // tempCard.className = "card";
        var card = createCard(tempCard.value,tempCard.color);
        // card.className = "card";
        card.setAttribute("id",tempCard.value+"/"+tempCard.color);
        // card.onclick = playCard(card.id);

        card.onclick = function(id) {

            if(inRound == 0){
                alert("not your turn");
            }
            else {
                
                playCard(this,"p1");
                
            }           
        }
        player1.appendChild(card);
        cardsP1.push(tempCard);
    
        tempCard = deck.draw();
        // tempCard.className = "card";
        var card = createCard(tempCard.value,tempCard.color);
        // card.className = "card";
        card.setAttribute("id",tempCard.value+"/"+tempCard.color);
        card.onclick = function(id) {

            if(inRound == 1){
                alert("not your turn");
            }
            else {

                playCard(this,"p2");
                
            } 

        }
        player2.appendChild(card);
        cardsP2.push(tempCard);
    
    }

    // console.log(deck.cards[0]);
    var checkCard = deck.cards[0];
    // var firstCard = deck.draw();
    // console.log(firstCard);
    while(checkCard.value == "+2" || checkCard.value == "+4" || checkCard.value == "C" || checkCard.value == "R" || checkCard.value == "S"){
        deck.shuffle();
        checkCard = deck.cards[0];
    }
    var firstCard = deck.draw();
    var card = createCard(firstCard.value,firstCard.color);
    card.className = "play-card card";
    card.setAttribute("id",firstCard.value+"/"+firstCard.color);
    playArea.appendChild(card);
    currentcard = card;

    // console.log(cardsP1);
    // console.log(cardsP2);

    let Card = document.getElementsByClassName("card");

    const deckuno = document.getElementById("deckArea");
    const playuno = document.getElementById("playArea");

    const uno1 = document.createElement('div');
    uno1.className = "player1-uno uno-button";
    uno1.id = "p1uno";
    uno1.innerText = "UNO";
    p1uno.appendChild(uno1);

    const chal1 = document.createElement('div');
    chal1.className = "player1-uno challenge-button";
    chal1.id = "p1chal";
    chal1.innerText = "CHALLENGE";
    p1uno.appendChild(chal1);

    const uno2 = document.createElement('div');
    uno2.className = "player2-uno uno-button";
    uno2.id = "p2uno";
    uno2.innerText = "UNO";
    p2uno.appendChild(uno2);

    const chal2 = document.createElement('div');
    chal2.className = "player2-uno challenge-button";
    chal2.id = "p2chal";
    chal2.innerText = "CHALLENGE";
    p2uno.appendChild(chal2);

};

function playCard(context,player) {

    // console.log(context.id);
    console.log(player);

    

    // if(inRound == -1){
    //     context.className = "play-card card";
    //     // context.id = "play";
    //     context.parentElement.removeChild(context);
    //     playArea.removeChild(currentcard);
    //     playArea.appendChild(context);
    //     currentcard = context;
    //     currentcard.id = context.id;
    //     if(player == "p1")
    //         inRound = 0;
    //     else
    //         inRound = 1;
    // }
    // else{

        var contextFields = context.id.split('/');
        var currentFields = currentcard.id.split('/');

        var contextNum = contextFields[0];
        var contextColor = contextFields[1];
        var currentNum = currentFields[0];
        var currentColor = currentFields[1];

        console.log(contextNum);
        console.log(currentNum);

        if(contextNum == "+4" || contextNum == "C"){
            selectColor();
            context.className = "play-card card";
            // context.id = "play";
            context.parentElement.removeChild(context);
            playArea.removeChild(currentcard);
            playArea.appendChild(context);
            currentcard = context;
            currentcard.id = context.id;
            if(player == "p1"){
                
                inRound = 0;
            }                
            else{

                inRound = 1;
            }
            
        }
        else if(contextNum == "S"){
            if(player == "p1"){
                
                inRound = 1;
            }                
            else{

                inRound = 0;
            }
        }
        else if(contextNum == currentNum || contextColor == currentColor || currentNum == "C" && color == contextColor){
            context.className = "play-card card";
            // context.id = "play";
            context.parentElement.removeChild(context);
            playArea.removeChild(currentcard);
            playArea.appendChild(context);
            currentcard = context;
            currentcard.id = context.id;
            if(player == "p1")
                inRound = 0;
            else
                inRound = 1;
        }
        else{
            alert("Please play correct card")
        }
    // }

    

    // console.log(context.id);
    

}

function createCard(number,color){
    const card = document.createElement('div');
    // card.setAttribute("style", getColor(color,number));
    // card.style.backgroundColor = getColor(color, number);
    // card.style.color = getValueColor(number);
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

function drawCard(player){
    var tempCard = deck.draw();
    // tempCard.className = "card";
    var card = createCard(tempCard.value,tempCard.color);
    // card.className = "card";
    card.setAttribute("id",tempCard.value+"/"+tempCard.color);
    card.onclick = function() {

        if(inRound == 1){
            alert("not your turn");
        }
        else {

            playCard(this,"p2");
            
        } 

    }
    if(player == "p1"){
        player1.appendChild(card);
        cardsP1.push(tempCard);
        inRound = 0;
    }
    else{
        player2.appendChild(card);
        cardsP2.push(tempCard);
        inRound = 1;
    }
    
}

function selectColor(){

    playArea.appendChild(red);

    playArea.appendChild(blue);

    playArea.appendChild(green);

    playArea.appendChild(yellow);
}

function colorSelected(context){
    color = context.id;
    playArea.removeChild(red);
    playArea.removeChild(green);
    playArea.removeChild(blue);
    playArea.removeChild(yellow);
}

// function playCard(id){
//     console.log(id);

// }

activeArea.appendChild(playButton);