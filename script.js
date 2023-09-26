var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;

    var bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach(function(bubble) {
        bubble.addEventListener("click", function() {
            var clickednum = Number(this.textContent);
            if (clickednum == hitrn) {
                increaseScore();
                makeBubble();
                getNewhit();
            }
        });
    });
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Time over, click refresh to restart.</h1>`;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("#welcomeMsg").textContent = "Let's Go!";
        runGame(); // Start the game
    }, 3000); // Delay for 3 seconds (3000 milliseconds)
});

function runGame() {
    runTimer();
    makeBubble();
    getNewhit();
    increaseScore();
}
