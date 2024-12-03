const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    let v = fetch(url)
            .then(data => data.json())
            .then(items => {
                jokeContainer.textContent = `${items.joke}`;
                jokeContainer.classList.add("fade")
                console.log(items)});
    console.log(v);
}
btn.addEventListener("click",getJoke);
getJoke();