import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughing");
const jokeGenerator = document.getElementById("jokeBtn");
laughImg.src = laughing;

generateJoke();

jokeGenerator.addEventListener("click", () => {
  generateJoke();
});
