dynamicIsland = document.getElementById("dynamic-island");
dynamicIsland.style.height = "100px";
dynamicIsland.style.width = "100px";
dynamicIsland.innerHTML = `<ion-icon name="hourglass-outline" style="color: orange;"></ion-icon>`;
dynamicIsland.style.fontSize = "60px";
dynamicIsland.style.top = "10px";

window.onload = (event) => {
  dynamicIsland.style.height = "26px";
  dynamicIsland.style.width = "96px";
  dynamicIsland.innerHTML = ``
  dynamicIsland.style.fontSize = "26px";
  dynamicIsland.style.top = "0";
};

const photosIcon = document.getElementById("photos");

photosIcon.onclick = function () {
  setTimeout(myTimer, 1000);
  dynamicIsland.style.height = "100px";
  dynamicIsland.style.width = "100px";
  dynamicIsland.innerHTML = `<ion-icon name="checkmark-outline" style="color: green;"></ion-icon>`;
  dynamicIsland.style.fontSize = "60px";
  dynamicIsland.style.top = "10px";
  function myTimer() {
    dynamicIsland.style.height = "26px";
    dynamicIsland.style.width = "96px";
    dynamicIsland.innerHTML = ``
    dynamicIsland.style.fontSize = "26px";
    dynamicIsland.style.top = "0";
    clearTimeout(myTimer);
  }
}
