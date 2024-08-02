const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#tryLucky")
const btnAgain = document.querySelector("#tryAgain")


const phrases = [
  "A sorte favorece os audaciosos.",
  "Cada dia é uma nova oportunidade para ser feliz.",
  "Acredite em si mesmo e tudo será possível.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Grandes conquistas começam com pequenos passos.",
  "Siga seus sonhos, eles conhecem o caminho.",
  "As melhores coisas são, as pessoas que amamos, os lugares que conhecémos e as memórias que guardámos ao longo do caminho.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "A vida é uma jornada, aproveite cada momento.",
  "A gratidão é a chave para a verdadeira felicidade."
]

let randomNumber = Math.floor(Math.random() * 10)

btnTry.addEventListener('click', handleLucky)
btnAgain.addEventListener('click', Toggle)

function handleLucky() {
  Toggle()


  screen2.querySelector("#message").innerText = `${phrases[randomNumber]}`
}

function Toggle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}