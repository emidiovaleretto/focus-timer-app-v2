import { Elements } from "./elements.js"
import { Button } from "./controls.js"
import { Timer } from "./timer.js"

import { playSound } from "./sounds.js"

let { minutesOnDisplay, secondsOnDisplay, countdown } = Elements()

const timer = Timer({ minutesOnDisplay, secondsOnDisplay, countdown })

const start = playSound()

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
    start.playPianoBackground()
  }

  rain.onclick = () => {
    start.playRainBackground()
  }

  waves.onclick = () => {
    start.playWavesBackground()
  }

  fire.onclick = () => {
    start.playFireBackground()
  }
}
