export function Elements() {
  const play = document.querySelector(".button-play")
  const stop = document.querySelector(".button-stop")
  const increase = document.querySelector(".button-increase")
  const decrease = document.querySelector(".button-decrease")

  const piano = document.querySelector(".button-piano")
  const rain = document.querySelector(".button-rain")
  const waves = document.querySelector(".button-ocean")
  const fire = document.querySelector(".button-fire")

  const toggleSwitch = document.querySelector(".toggle-switch-circle")

  let minutesOnDisplay = document.querySelector(".minutes")
  let secondsOnDisplay = document.querySelector(".seconds")

  let countdown, minutes, seconds

  return {
    play,
    stop,
    increase,
    decrease,
    piano,
    rain,
    waves,
    fire,
    toggleSwitch,
    minutesOnDisplay,
    secondsOnDisplay,
    countdown,
    minutes,
    seconds,
  }
}
