let cards = []
let sum = 0
let message = " "
let isAlive = false
let hasBlackJack = false

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 11) {
    return 1
  } else {
    return randomNumber
  }
}

function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards = [firstCard, secondCard]
  isAlive = true
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw another card?"
    messageEl.textContent = message
  } else if (sum === 21) {
    message = "You've got blackjack!"
    messageEl.textContent = message
    hasBlackJack = true
  } else {
    message = "you are out of the game!"
    messageEl.textContent = message
    isAlive = false
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
