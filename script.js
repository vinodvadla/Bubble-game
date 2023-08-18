
let bottom = document.getElementById("bottom");
let tdiv = document.getElementById("Target")
let score = document.getElementById("Score")
let arr = []
let a = ``;
let sc = 0
const showBubble = () => {
    for (let i = 1; i < 191; i++) {
        let ran = Math.floor(Math.random(1) * 10)
        arr[i] = `<div id="bub">${ran}</div>`;
        a += arr[i]
    }
    bottom.innerHTML = a
}
const showTarget = () => {
    let target = Math.floor(Math.random(1) * 10)
    tdiv.textContent = `${target}`;
}
bottom.addEventListener("click", (e) => {
    let num = Number(e.target.textContent);
    let tr = Number(tdiv.innerHTML);
    if (num == tr) {
        sc += 10;
        score.innerHTML = sc;
        e.target.style.opacity = "0";
        showTarget()
    }
})
const setTimer = () => {
    let timer = document.getElementById("Timer");
    let time = 60;
    let int = setInterval(() => {
        timer.innerHTML = time;
        time--
        if (time <= 0) {
            clearInterval()
            timer.innerHTML = 0;
            bottom.classList.add("gameover");
            bottom.classList.add("dflex")
            bottom.innerHTML = `<h1>Game Over</h1><br><h2>Your Score Is ${sc}</h2>`;
        }
    }, 1000)
}

showTarget();
setTimer()
showBubble();
