function updateClock() {
  const hourHand = document.getElementById("hand-hour");
  const minuteHand = document.getElementById("hand-minute");
  const secondHand = document.getElementById("hand-second");

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
}

document.addEventListener("DOMContentLoaded", updateClock);
setInterval(updateClock, 1000);



const clockMinusBtn = document.getElementById("clock-minus-btn");
const clockPlusBtn = document.getElementById("clock-plus-btn");

const clockTime = document.getElementById("clock-time");

const clockStartBtn = document.getElementById("clock-start-btn");
const clockResetBtn = document.getElementById("clock-reset-btn");

clockTime.innerText = "0";

let clockTimeNumber = 0;

clockMinusBtn.onclick = function() {
  if(clockTimeNumber === 0){
    clockTimeNumber = 0;
  }
  else{
    clockTimeNumber = clockTimeNumber - 1;
    clockTime.innerText = clockTimeNumber;
  }
}

clockPlusBtn.onclick = function() {
  if(clockTimeNumber === 60){
    clockTimeNumber = 60;
  }
  else{
    clockTimeNumber = clockTimeNumber + 1;
    clockTime.innerText = clockTimeNumber;
  }
}

const dynamicIsland = document.getElementById("dynamic-island");

let countdownInterval;
let shrinkTimeout;
let doneTimeout;

clockStartBtn.onclick = function() {
  // Expand dynamic island
  dynamicIsland.style.width = "300px";
  dynamicIsland.style.height = "50px";
  dynamicIsland.style.top = "10px";
  dynamicIsland.style.borderColor = "rgba(255, 114, 54, 1)";
  dynamicIsland.innerHTML = `<p id="dynamic-island-timer"></p>`;
  const timerDisplay = document.getElementById("dynamic-island-timer");

  // Convert minutes to seconds
  let timeLeft = clockTimeNumber * 60;
  timerDisplay.innerText = formatTime(timeLeft);

  // Clear previous intervals/timeouts
  clearInterval(countdownInterval);
  clearTimeout(shrinkTimeout);
  clearTimeout(doneTimeout);

  // Start countdown
  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.innerText = "Done!";

      dynamicIsland.style.width = "300px";
      dynamicIsland.style.height = "50px";
      dynamicIsland.style.top = "10px";
      timerDisplay.style.fontSize = "30px";

      // Post-finish animation (expand again after 1 sec)
      doneTimeout = setTimeout(() => {
        dynamicIsland.style.width = "96px";
        dynamicIsland.style.height = "26px";
        dynamicIsland.style.top = "5px";
        dynamicIsland.innerHTML = "";
        dynamicIsland.style.borderColor = "rgba(0, 0, 0, 1)";
      }, 3000);
    }
  }, 1000);

  // Shrink animation after 2 seconds
  shrinkTimeout = setTimeout(() => {
    dynamicIsland.style.width = "120px";
    dynamicIsland.style.height = "26px";
    dynamicIsland.style.top = "5px";
    timerDisplay.style.fontSize = "20px";
    dynamicIsland.style.borderColor = "rgba(193, 87, 41, 1)";
  }, 2000);
};

// Helper function for MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
