const gridContainer = document.querySelector('.grid-container');
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector('.score').textContent = score;

//Obtener cartas del JSON
fetch('./data/cards.json')
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

//Mezclar cartas
function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

//Crear los elementos HTML de las cartas
function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-name', card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
}

//Función para voltear las cartas, se guarda la primera y la segunda carta en las variables firstCard y secondCard
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector('.score').textContent = score;
  lockBoard = true;

  checkForMatch();
}

//Función para verificar si las cartas son iguales
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

//Deshabilitar las cartas si ya fueron encontradas
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

//Reiniciar el tablero
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

//Reiniciar el juego
function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector('.score').textContent = score;
  gridContainer.innerHTML = '';
  generateCards();
}
