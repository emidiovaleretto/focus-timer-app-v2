import { Elements } from "./elements.js"
import { Button } from "./controls.js"
import { Timer } from "./timer.js"

import { playSound } from "./sounds.js"

let { minutesOnDisplay, secondsOnDisplay, countdown } = Elements()

const timer = Timer({ minutesOnDisplay, secondsOnDisplay, countdown })

const audio = playSound()

export function Events({
  play,
  stop,
  increase,
  decrease,
  piano,
  rain,
  waves,
  fire,
}) {
  play.onclick = () => {
    if (!play.classList.contains("button-pause")) {
      Button.play()
      timer.timerCoutdown()
    } else {
      Button.pause()
      timer.pauseTimerDisplay()
    }
  }

  stop.onclick = () => {
    if (!play.classList.contains("button-play")) {
      Button.stop()
      timer.resetTimerDisplay()
    }
  }

  increase.onclick = () => {
    timer.increaseTime()
  }

  decrease.onclick = () => {
    timer.decreaseTime()
  }

  piano.onclick = () => {
    piano.classList.toggle("active")

    if (!piano.classList.contains("active")) {
      audio.piano.pause()
    } else {
      audio.piano.play()
    }
  }

  rain.onclick = () => {
    rain.classList.toggle("active")

    if (!rain.classList.contains("active")) {
      audio.rain.pause()
    } else {
      audio.rain.play()
    }
  }

  waves.onclick = () => {
    waves.classList.toggle("active")

    if (!waves.classList.contains("active")) {
      audio.waves.pause()
    } else {
      audio.waves.play()
    }
  }

  fire.onclick = () => {
    fire.classList.toggle("active")

    if (!fire.classList.contains("active")) {
      audio.fire.pause()
    } else {
      audio.fire.play()
    }
  }
}
