document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'dish1',
        img: 'images/dish1.png'
    },
    {
        name: 'dish1',
        img: 'images/dish1.png'
    },
    {
        name: 'dish2',
        img: 'images/dish2.png'
    },
    {
        name: 'dish2',
        img: 'images/dish2.png'
    },
    {
        name: 'dish3',
        img: 'images/dish3.png'
    },
    {
        name: 'dish3',
        img: 'images/dish3.png'
    },
    {
        name: 'dish4',
        img: 'images/dish4.png'
    },
    {
        name: 'dish4',
        img: 'images/dish4.png'
    },
    {
        name: 'dish5',
        img: 'images/dish5.png'
    },
    {
        name: 'dish5',
        img: 'images/dish5.png'
    },
    {
        name: 'dish6',
        img: 'images/dish6.png'
    },
    {
        name: 'dish6',
        img: 'images/dish6.png'
    },
    {
        name: 'dish7',
        img: 'images/dish7.png'
    },
    {
        name: 'dish7',
        img: 'images/dish7.png'
    },
    {
        name: 'dish8',
        img: 'images/dish8.png'
    },
    {
        name: 'dish8',
        img: 'images/dish8.png'
    },
    {
        name: 'dish9',
        img: 'images/dish9.png'
    },
    {
        name: 'dish9',
        img: 'images/dish9.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
//create board

function createBoard () {
    for( let i =0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/cover-tile.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0]=== cardsChosen[1]){
        alert('You Found a Match!')
        cards[optionOneId].setAttribute('src','images/blank-tile.png')
        cards[optionTwoId].setAttribute('src','images/blank-tile.png')
        cardsWon.push(cardsChosen)
    }
    else      {
        cards[optionOneId].setAttribute('src','images/cover-tile.png')
        cards[optionTwoId].setAttribute('src','images/cover-tile.png')
        alert('Sorry, try again')
    }
    cardsChosen =[]
    cardsChosenId =[]
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === (cardArray.length/2)){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}


//flip card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    // Now to make sure that a blank tile is not selected such that it turns into cover
    if( this.getAttribute('src') === 'images/blank-tile.png')
    return
    
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    this.setAttribute('alt',cardArray[cardId].name)
    if( cardsChosen.length === 2) {
        setTimeout(checkForMatch, 50)// keep timing low such that no new tile cannot be selected in the timelag
    }
}

createBoard()

} )