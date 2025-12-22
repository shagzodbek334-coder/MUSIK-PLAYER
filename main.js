const text1 = document.querySelector(".text1")
const img = document.querySelector(".img")
const audio = document.querySelector(".audio")
const nextBtn = document.querySelector(".oldinga")
const aldingi = document.querySelector(".orkaga")
const playBtn = document.querySelector("#playBtn")
const musicData = ["bratu", "24 Blood Theme", "Mimosa 2000"]
let index = 0;

const musicFunc = () => {
    text1.textContent = musicData[index]
    img.src = `./musicimg/${musicData[index]}.jpg`
    audio.src = `./music/${musicData[index]}.mp3`
}

musicFunc()


nextBtn.addEventListener("click", () => {
    index++
    if (index >= musicData.length) {
        index = 0
    }
    musicFunc()
    playMusic()
})


aldingi.addEventListener("click", () => {
    index--
    if (index < 0) {
        index = musicData.length - 1
    }
    musicFunc()
    playMusic()
})


playBtn.addEventListener("click", () => {
    if (playBtn.classList.contains("fa-play")) {

        playMusic()


    } else {
        pauseMusic()

    }
});
const playMusic = () => {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause"); audio.play()
}
const pauseMusic = () => {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    audio.pause()

}


const snowContainer = document.getElementById("snow-container");

setInterval(() => {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 5 + 3 + "s";
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}, 200);
