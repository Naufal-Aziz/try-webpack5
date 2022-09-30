import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughing')
const jokeContainer = document.getElementById('the-joke')
laughImg.src = laughing


jokeContainer.innerText = generateJoke()

console.log('1')