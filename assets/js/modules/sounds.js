export function playSound() {
  const piano = new Audio(
    "https://github.com/emidiovaleretto/resources/blob/main/audios/piano.mp3?raw=true",
  )

  const rain = new Audio(
    "https://github.com/emidiovaleretto/resources/blob/main/audios/rain.mp3?raw=true",
  )

  const waves = new Audio(
    "https://github.com/emidiovaleretto/resources/blob/main/audios/ocean_waves.mp3?raw=true",
  )

  const fire = new Audio(
    "https://github.com/emidiovaleretto/resources/blob/main/audios/lofi.mp3?raw=true",
  )

  piano.loop, rain.loop, waves.loop, (fire.loop = true)

  return {
    piano,
    rain,
    waves,
    fire,
  }
}
