const cardArray = [
    {
        name: 'landscape',
        img: 'images/landscape.jpg'
    },
    {
        name: 'road',
        img: 'images/road.jpg'
    },
    {
        name: 'rock',
        img: 'images/rock.jpg'
    },
    {
        name: 'snowforest',
        img: 'images/snowforest.jpg'
    },
    {
        name: 'sunset',
        img: 'images/sunset.jpg'
    },
    {
        name: 'city',
        img: 'images/city.jpg'
    },
    {
        name: 'village',
        img: 'images/village.jpg'
    },
    {
        name: 'landscape',
        img: 'images/landscape.jpg'
    },
    {
        name: 'road',
        img: 'images/road.jpg'
    },
    {
        name: 'rock',
        img: 'images/rock.jpg'
    },
    {
        name: 'snowforest',
        img: 'images/snowforest.jpg'
    },
    {
        name: 'sunset',
        img: 'images/sunset.jpg'
    },
    {
        name: 'city',
        img: 'images/city.jpg'
    },
    {
        name: 'village',
        img: 'images/village.jpg'
    }
]
console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];

let cardChosenIds = []
const cardsWon = []

const createBoard = () =>{
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/dark.jpg');
        card.setAttribute('data-id', i);
        card.setAttribute('width', '100px' );
        card.setAttribute('height', '100px');
        card.addEventListener('click', flipCard),
        gridDisplay.appendChild(card);
    }
};
createBoard()

function checkMatch(event) {
   const cards = document.querySelectorAll('img');
   const optionOneId = cardChosenIds[0];
   const optionTwoId = cardChosenIds[1];
    console.log('check for a match');
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/dark.jpg');
        cards[optionTwoId].setAttribute('src', 'images/dark.jpg');
        alert('Vous avez cliqué la même carte !')
        // event.stopPropagation();
    };

    if(cardsChosen[0] == cardsChosen[1]){
        alert('Bravo !!')
        cards[optionOneId].setAttribute('src', 'images/ligth.jpg');
        cards[optionTwoId].setAttribute('src', 'images/ligth.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/dark.jpg');
        cards[optionTwoId].setAttribute('src', 'images/dark.jpg');
        alert('Désolé, réessayez !')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length / 2){
        resultDisplay.innerHTML =`Bravo, vous avez gagné !!`

    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id') /* this. représente cici chaque élément clické */
    cardsChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log(cardsChosen)
    console.log(cardChosenIds)
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    };
}