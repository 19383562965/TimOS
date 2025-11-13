const body = document.body;

const menuBar = document.getElementById("menu-bar");
const dock = document.getElementById("dock");

/*Control center*/
const controlCenter = document.getElementById("control-center");
const controlCenterBtn = document.getElementById("control-center-btn");

controlCenterBtn.onclick = function () {
  if (controlCenter.style.display === "none") {
    controlCenter.style.display = "flex"
    hideTimeout = setTimeout(() => {
      controlCenter.style.opacity = "1"
    }, 200);
  }
  else {
    controlCenter.style.opacity = "0"
    hideTimeout = setTimeout(() => {
      controlCenter.style.display = "none"
    }, 200);
  }
}
controlCenter.onmouseleave = function () {
  controlCenter.style.opacity = "0";
  hideTimeout = setTimeout(() => {
    controlCenter.style.display = "none"
  }, 200);
}

/**
 * Wallpapers
 */
const background = document.getElementById("background");

const wallpaper = document.getElementById("wallpaper");
const wallpaperOne = document.getElementById("wallpaper-one");
const wallpaperTwo = document.getElementById("wallpaper-two");
const wallpaperThree = document.getElementById("wallpaper-three");
const wallpaperFour = document.getElementById("wallpaper-four");
const wallpaperFive = document.getElementById("wallpaper-five");
const wallpaperSix = document.getElementById("wallpaper-six");
const wallpaperSeven = document.getElementById("wallpaper-seven");
const wallpaperEight = document.getElementById("wallpaper-eight");
const wallpaperNine = document.getElementById("wallpaper-nine");

wallpaper.onclick = function () { background.src = "images/wallpapers/background.jpg" }
wallpaperOne.onclick = function () { background.src = "images/wallpapers/background_one.jpg" }
wallpaperTwo.onclick = function () { background.src = "images/wallpapers/background_two.jpg" }
wallpaperThree.onclick = function () { background.src = "images/wallpapers/background_three.jpg" }
wallpaperFour.onclick = function () { background.src = "images/wallpapers/background_four.jpg" }
wallpaperFive.onclick = function () { background.src = "images/wallpapers/background_five.jpg" }
wallpaperSix.onclick = function () { background.src = "images/wallpapers/background_six.jpg" }
wallpaperSeven.onclick = function () { background.src = "images/wallpapers/background_seven.jpg" }
wallpaperEight.onclick = function () { background.src = "images/wallpapers/background_eight.jpg" }
wallpaperNine.onclick = function () { background.src = "images/wallpapers/background_nine.jpg" }

/**
 * ON LOAD
 */
const loadingAnimation = document.getElementById("loading-animation");

window.addEventListener("load", function () {
  // Hide loading animation
  const loadingAnimation = document.getElementById("loading-animation");
  if (loadingAnimation) {
    setTimeout(() => {
      loadingAnimation.style.display = "none";
      body.style.backdropFilter = "blur(0)"
      body.src = "images/wallpapers/background_three.jpg"
    }, 5000);
  }

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }
});

/**
 * RELOADING
 */
const reloadBtn = document.getElementById("reload-btn");
const reloadVideo = document.getElementById("loading-video");
const windowsContainer = document.getElementById("windows-container");

reloadBtn.addEventListener("click", () => {
  const loadingAnimation = document.getElementById("loading-animation");
  reloadVideo.src = "videos/reloading screen.mp4";
  windowsContainer.style.display = "none";
  loadingAnimation.style.display = "flex";
  loadingAnimation.style.opacity = "1";
  menuBar.style.opacity = "0"
  dock.style.opacity = "0"
  reloadVideo.playbackRate = 1.0;
  reloadVideo.currentTime = 0;
  reloadVideo.play();
  setTimeout(() => {
    location.reload();
  }, 4000);
});


/**
 * Date and time for the menu bar
 */
function updateDateTime() {
  const now = new Date();

  // Date parts
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
  const month = now.toLocaleDateString('en-US', { month: 'short' });
  const day = now.getDate();

  document.getElementById("menu-bar-date").textContent =
    `${weekday} ${month} ${day}`;

  // Time parts in 12-hour format
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  minutes = minutes < 10 ? "0" + minutes : minutes;

  document.getElementById("menu-bar-time").textContent =
    `${hours}:${minutes} ${ampm}`;
}

// Run immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

/**
 * Date on the calendars app
 */
function updateCalendarIcon() {
  const now = new Date();

  // Get weekday name (Mon, Tue, ...)
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });

  // Get day of month
  const day = now.getDate();

  // Update elements
  document.getElementById("calendar-icon-week-day").textContent = weekday;
  document.getElementById("calendar-icon-date").textContent = day;
}

// Run immediately
updateCalendarIcon();

// Update once a minute (in case date changes at midnight)
setInterval(updateCalendarIcon, 60 * 1000);


const terminalInput = document.getElementById("terminal-input")
terminalInput.value = ">";
