import axios from "axios"

const jokeContainer = document.getElementById('the-joke')

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    let res = await axios.get('https://icanhazdadjoke.com', config)
    jokeContainer.innerText = res.data.joke
}

export default generateJoke