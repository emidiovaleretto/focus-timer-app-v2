const buttonPlay = document.querySelector(".button-play")
const buttonStop = document.querySelector(".button-stop")
const buttonIncrease = document.querySelector(".button-increase")
const buttonDecrease = document.querySelector(".button-decrease")

const minutesOnDisplay = document.querySelector(".minutes")
const secondsOnDisplay = document.querySelector(".seconds")

const buttonPiano = document.querySelector(".button-piano")

let countdown

let minutes = minutesOnDisplay.innerHTML
let seconds = secondsOnDisplay.innerHTML

function updateTimerDisplay() {
  minutesOnDisplay.innerHTML = String(minutes).padStart(2, "0")
  secondsOnDisplay.innerHTML = String(seconds).padStart(2, "0")
}

function increaseTime() {
  if (minutes >= 59) return

  minutes = Number(minutes) + 5
  updateTimerDisplay()
}

function decreaseTime() {
  if (minutes <= 0) return

  minutes = Number(minutes) - 5
  updateTimerDisplay()
}

buttonPlay.onclick = () => {
  countdown = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(countdown)
      return
    }

    if (seconds <= 0) {
      minutes--
      seconds = 59
    } else {
      seconds--
    }

    updateTimerDisplay()
  }, 1000)

  buttonPlay.classList.remove("button-play")
  buttonPlay.classList.add("button-pause")
}

buttonStop.onclick = () => {
  buttonPlay.classList.remove("button-pause")
  buttonPlay.classList.add("button-play")
  clearInterval(countdown)
}

buttonIncrease.onclick = () => {
  increaseTime()

  if (minutes >= 60) {
    buttonIncrease.disabled = true
    // TODO: add a class to the button to change its color
  }
}

buttonDecrease.onclick = () => {
  decreaseTime()

  if (minutes <= 5) {
    buttonDecrease.disabled = true
    // TODO: add a class to the button to change its color
  }
}
