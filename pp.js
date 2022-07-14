const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const p1scoretext = document.querySelector("#p1score");
const p2scoretext = document.querySelector("#p2score");
const resetbutton = document.querySelector("#resetbutton");
const p1in = document.querySelector("#p1in");
const p2in = document.querySelector("#p2in");
const selection = document.querySelector("#selection");
const img = document.querySelector("img");
const winnerH1 = document.querySelector("#winnerH1");
let p1score = 0;
let p2score = 0;
let winningscore = 11;
let gameover = false;
let fegla = false;
selection.addEventListener("change", function () {
    p1score = 0;
    p2score = 0;
    p1scoretext.textContent = 0;
    p2scoretext.textContent = 0;
    winningscore = this.value;
    console.log(this.value)
    p1scoretext.style.background = `linear-gradient(90deg,green 0px,rgba(0, 205, 14, 0.188) 0px)`;
    p2scoretext.style.background = `linear-gradient(90deg,orange 0px,rgba(255, 166, 0, 0.45) 0px)`;
    winnerH1.style.display = "none";
    gameover = false;
})

p1button.addEventListener("click", function () {
    if (!gameover) {
        p1score += 1;
        p1scoretext.textContent = p1score;
        p1scoretext.style.background = `linear-gradient(90deg,green ${p1score / winningscore * 100}%,rgba(0, 205, 14, 0.188) 0px)`;

        if (p1score == winningscore) {
            gameover = true;
            winnerH1.innerText = ` Winner ${p1in.value}!`;
            winnerH1.style.display = "block";


        }

    }
});

p2button.addEventListener("click", function () {
    if (!gameover) {
        p2score += 1;
        p2scoretext.textContent = p2score;
        p2scoretext.style.background = `linear-gradient(90deg,orange ${p2score / winningscore * 100}%,rgba(255, 166, 0, 0.45) 0px)`;

        if (p2score == winningscore) {
            gameover = true;
            winnerH1.innerText = ` Winner ${p2in.value}!`;
            winnerH1.style.display = "block";

        }

    }
});

resetbutton.addEventListener("click", function () {
    p1scoretext.style.background = `linear-gradient(90deg,green 0px,rgba(0, 205, 14, 0.188) 0px)`;
    p2scoretext.style.background = `linear-gradient(90deg,orange 0px,rgba(255, 166, 0, 0.45) 0px)`;
    winnerH1.style.display = "none";

    p1score = 0;
    p2score = 0;
    p1scoretext.textContent = 0;
    p2scoretext.textContent = 0;
    gameover = false;

});
p1in.addEventListener("input", function (e) {
    console.log(e.target.value);
    p1button.innerText = `${e.target.value}   +1`;
})

p2in.addEventListener("input", function (e) {
    console.log(e.target.value);
    p2button.innerText = `${e.target.value}  +1`;
})

//
img.addEventListener("click", function () {
    if (fegla === false) {
        img.src = "fegla-dis.jpg";
        fegla = true;
    }

    else {
        img.src = "fegla.jpg";
        fegla = false;
    }
})
