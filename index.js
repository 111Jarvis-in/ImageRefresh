const dogUrl = "https://random.dog/woof.json"
const jokeUrl = "https://v2.jokeapi.dev/joke/Programming"

function displayMessage() {
    fetch(jokeUrl)
        .then(response => response.json())
        .then(joke => {
            document.getElementById("joke").innerHTML = joke.setup == 'undefined' ? joke.joke : joke.setup;
        });
    fetch(dogUrl)
        .then(response => response.json())
        .then(image => {
            document.getElementById("imgUrl").src = image.url;
        });
}
var btn = document.getElementById("btn");
