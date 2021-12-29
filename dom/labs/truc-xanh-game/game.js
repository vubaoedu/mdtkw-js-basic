const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ];

let board = document.getElementById('board');
let id1 = '';
let id2 = '';
let element1 = null;
let element2 = null;
let score = 0;

function initGame() {
    cardArray.sort(function() {
        return 0.5 - Math.random();
    });
    createBoard();
}

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard)
        board.appendChild(card);
    }
}

function flipCard() {
    if (id1 == '') {
        id1 = this.getAttribute('id');
        this.src = cardArray[id1].img;
        element1 = this;
        
    }
    else {
        id2 = this.getAttribute('id');
        this.src = cardArray[id2].img;
        element2 = this;
    }
}

function checkMatch() {
    if (id1 != '' && id2 != '') {
        if (cardArray[id1].name === cardArray[id2].name) {
            window.alert("Congrat!");
            element1.style.visibility = 'hidden';
            element2.style.visibility = 'hidden';
            score++;
            document.getElementById('result').innerHTML = score;
        }
        else {
            window.alert("Sorry!");
            console.log(cardArray[id1]);
            element1.src = 'images/blank.png';
            element2.src = 'images/blank.png';
        }
        id1 = id2 = '';
    }
}

initGame();
setInterval(checkMatch, 100);