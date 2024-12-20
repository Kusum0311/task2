let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval;
let isRunning = false;

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        interval = setInterval(startStopwatch, 10);
        isRunning = true;
    }
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    hours = minutes = seconds = milliseconds = 0;
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    document.getElementById("lapTimes").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    const lapTime = ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)};
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    document.getElementById("lapTimes").appendChild(lapItem);
});

function startStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("milliseconds").textContent = formatTime(milliseconds);
}

function formatTime(unit) {
    return unit < 10 ? 0${unit} : unit;
}
