import { Elements } from "./elements.js"
import { Button } from "./controls.js"

let { minutes, seconds } = Elements()

let newMinutes

export function Timer({ minutesOnDisplay, secondsOnDisplay, countdown }) {
  function updateTimerDisplay(minutes, seconds) {
    minutesOnDisplay.innerHTML = String(minutes).padStart(2, "0")
    secondsOnDisplay.innerHTML = String(seconds).padStart(2, "0")
  }

  function getMinutes() {
    return Number(minutesOnDisplay.innerHTML)
  }

  function resetTimerDisplay() {
    clearInterval(countdown)
    updateTimerDisplay(newMinutes ? newMinutes : 25, 0)
  }

  function pauseTimerDisplay() {
    clearInterval(countdown)
  }

  function timerCoutdown() {
    countdown = setInterval(() => {
      minutes = getMinutes()
      seconds = Number(secondsOnDisplay.innerHTML)

      console.log(minutes)

      if (minutes === 0 && seconds === 0) {
        resetTimerDisplay()
        Button.stop()
        return
      }

      if (seconds <= 0) {
        minutes--
        seconds = 59
      } else {
        seconds--
      }

      updateTimerDisplay(minutes, seconds)
    }, 1000)
  }

  function increaseTime() {
    minutes = getMinutes()

    newMinutes = Number(minutes) + 5

    if (newMinutes > 60) return

    updateTimerDisplay(newMinutes, 0)
  }

  function decreaseTime() {
    minutes = getMinutes()

    newMinutes = Number(minutes) - 5

    if (newMinutes < 5) return

    minutes = newMinutes

    updateTimerDisplay(newMinutes ? newMinutes : minutes, 0)
  }

  return {
    updateTimerDisplay,
    resetTimerDisplay,
    pauseTimerDisplay,
    timerCoutdown,
    increaseTime,
    decreaseTime,
  }
}
