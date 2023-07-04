import { Elements } from "./elements.js"

const { play } = Elements()

const Button = {
  play() {
    play.classList.remove("button-play")
    play.classList.add("button-pause")
  },
  pause() {
    play.classList.remove("button-pause")
    play.classList.add("button-play")
  },
  stop() {
    play.classList.remove("button-pause")
    play.classList.add("button-play")
  },
}

export { Button }
