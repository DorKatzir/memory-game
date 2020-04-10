//card options
const cardArray = [
    {
        name: 'avocado',
        img: 'images/avocado.png' // relative path
    },
    {
        name: 'avocado',
        img: 'images/avocado.png' // relative path
    },
    {
        name: 'grapes',
        img: 'images/grapes.png'
    },
    {
        name: 'grapes',
        img: 'images/grapes.png'
    },
    {
        name: 'melon',
        img: 'images/melon.png'
    },
    {
        name: 'melon',
        img: 'images/melon.png'
    },
    {
        name: 'papaya',
        img: 'images/papaya.png'
    },
    {
        name: 'papaya',
        img: 'images/papaya.png'
    },
    {
        name: 'strewberry',
        img: 'images/strewberry.png'
    },
    {
        name: 'strewberry',
        img: 'images/strewberry.png'
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.png'
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.png'
    }
]

// randomize card array
cardArray.sort(() => 0.5 - Math.random());


const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// create your board
function createBoard(){
    for(let i=0; i < cardArray.length; i++){
        var card = document.createElement('img'); 
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
    }
}


// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        console.log("You found a Match!");
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        console.log('Sorry, try again...');
    }
    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!';
    }

}

// flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
}

createBoard();