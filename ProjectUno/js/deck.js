const COLORS = ["R","Y","G","B"];
const VALUES = [
    "0",
    "1",
    "1",
    "2",
    "2",
    "3",
    "3",
    "4",
    "4",
    "5",
    "5",
    "6",
    "6",
    "7",
    "7",
    "8",
    "8",
    "9",
    "9",
    "S",
    "S",
    "R",
    "R",
    "+2",
    "+2",
    "C",
    "+4"
];


export default class Deck{
    constructor(cards = createDeck()){
        this.cards = cards;
    }

    shuffle(){
        for(let i = this.cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        return this.cards;
    }

    draw(){
        return this.cards.shift();
    }

    loadImage(url){
        return new Promise(resolve => {
            const image = new Image();
            image.addEventListener("load", () => {
                resolve(image);
            });
            image.src = url;
        })
    }
}

class card{
    constructor(color,value){
        this.color = color;
        this.value = value;
    }
}

function createDeck(){
    return COLORS.flatMap(color => {
        return VALUES.map(value => {
            return new card(color, value);
        });
    });
}