const buttonPlay = document.querySelector(".button-play")
const buttonStop = document.querySelector(".button-stop")
const buttonIncrease = document.querySelector("button-increase")
const buttonDecrease = document.querySelector("button-decrease")

const minutesOnDisplay = document.querySelector(".minutes")
const secondsOnDisplay = document.querySelector(".seconds")

const buttonPiano = document.querySelector(".button-piano")

let minutes, seconds, countdown

buttonPlay.onclick = () => {
  countdown = setInterval(() => {
    minutes = minutesOnDisplay.innerHTML.padStart(2, "0")
    seconds = secondsOnDisplay.innerHTML.padStart(2, "0")

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

    minutesOnDisplay.innerHTML = String(minutes).padStart(2, "0")
    secondsOnDisplay.innerHTML = String(seconds).padStart(2, "0")
  }, 1000)
}

buttonStop.onclick = () => {
  clearInterval(countdown)
}
