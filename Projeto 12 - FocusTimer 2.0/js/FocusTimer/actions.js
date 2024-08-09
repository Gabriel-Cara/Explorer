import { state } from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function play() {
  if (state.isRunning) {
    return
  }

  state.isRunning = true
  timer.countDown()
}

export function stop() {
  state.isRunning = false
}

export function add() {
  stop()

  let minutes = state.minutes += 5
  if (minutes > 60) {
    minutes = 60;
    alert('Limite de 1 hora atingido.')
  }

  timer.updateDisplay(minutes)
}

export function minus() {
  stop()

  let minutes = state.minutes -= 5
  if (minutes < 1) {
    minutes = 1
    alert('Erro: tempo mínimo permitido de 1 minuto')
  }

  timer.updateDisplay(minutes)
}

export function forest() {
  state.isMute = sounds.forest.classList.toggle('music-on')
  if(state.isMute) {
    sounds.forest.play()
    return
  }

  sounds.forest.pause()
}

export function rain() {
  state.isMute = sounds.rain.classList.toggle('music-on')

  if(state.isMute) {
    sounds.rain.play()
    return
  }

  sounds.rain.pause()
}

export function coffe() {
  state.isMute = sounds.coffe.classList.toggle('music-on')
  if(state.isMute) {
    sounds.coffe.play()
    return
  }

  sounds.coffe.pause()
}

export function fire() {
  state.isMute = sounds.fire.classList.toggle('music-on')
  if(state.isMute) {
    sounds.fire.play()
    return
  }

  sounds.fire.pause()
}