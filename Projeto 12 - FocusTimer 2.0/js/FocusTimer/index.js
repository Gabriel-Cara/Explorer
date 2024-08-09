import { state } from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function start(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  timer.updateDisplay(minutes, seconds)
  events.registerControls()
  events.registerSounds()
}