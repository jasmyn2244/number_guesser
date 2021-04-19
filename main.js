//keep html id names the same as js variable names
var userInput = document.querySelector("#user-input")
var submitBtn = document.querySelector("#submit-btn")
var feedback = document.querySelector(".feedback")
var newGameBtn = document.querySelector("#new-game-btn")
var randomNumber
var userHasWon = false

userInput.addEventListener("keyup", enableSubmitBtn)
submitBtn.addEventListener("click", handleSubmit)
newGameBtn.addEventListener("click", startNewGame)

//This calls enableSubmitBtn on page load
generateRandomNumber()
enableSubmitBtn()
hideOrShowNewGameBtn()

console.log(randomNumber)

function generateRandomNumber() {
  randomNumber = Math.ceil(Math.random() *100-1)+1
}

function handleSubmit() {
  event.preventDefault()
  if (userInput.value < randomNumber) {
    feedback.innerText = userInput.value + " is too low. Guess again!"
  } else if (userInput.value > randomNumber) {
    feedback.innerText = `${userInput.value} is too high. Guess again!`
  } else {
    feedback.innerText = "You got it! Well done! Here's your meme:"
    userHasWon = true
    hideOrShowNewGameBtn()
  }
  clearInput()
}

function hideOrShowNewGameBtn() {
  if (userHasWon == true) {
    newGameBtn.style.visibility = "visible"
  } else {
    newGameBtn.style.visibility = "hidden"
  }
}

function startNewGame() {
  //Generate new random number
  generateRandomNumber()
  // = assign/reassign, == loosly equals, same value, === strictly equals, same value and data Type
  userHasWon = false
  hideOrShowNewGameBtn()
  console.log(randomNumber)
  feedback.innerText = ""
}

function clearInput() {
    userInput.value = ""
}

function enableSubmitBtn() {
  if (userInput.value === "") {
    submitBtn.disabled = true
  } else {
    submitBtn.disabled = false
  }
}
