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


const grid = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosenId = [];

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