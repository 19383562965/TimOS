document.addEventListener("DOMContentLoaded", () => {

  const settingsMenuPersonaliseBtn = document.getElementById("settings-menu-personalise-btn");
  const settingsMenuTaskbarBtn = document.getElementById("settings-menu-taskbar-btn");
  const settingsMenuDisplayBtn = document.getElementById("settings-menu-display-btn");
  const settingsMenuSoundBtn = document.getElementById("settings-menu-sound-btn");

  const settingsInfoTaskbar = document.getElementById("settings-info-taskbar");
  const settingsInfoDisplay = document.getElementById("settings-info-display");

  function hello() {
    settingsInfoTaskbar.style.display = "none";
    settingsInfoDisplay.style.display = "none";
  }

  settingsMenuTaskbarBtn.onclick = function () {
    hello();
    settingsInfoTaskbar.style.display = "inline";
  };

  settingsMenuDisplayBtn.onclick = function () {
    hello();
    settingsInfoDisplay.style.display = "inline";
  };

  const floatingTaskbarBtn = document.getElementById("floating-taskbar-btn");
  const fullWidthTaskbarBtn = document.getElementById("full-width-taskbar-btn");
  const transparentTaskbarBtn = document.getElementById("transparent-taskbar-btn");
  const dock = document.getElementById("dock");

  floatingTaskbarBtn.addEventListener("click", () => {
    dock.style.transition = "0.2s";
    dock.style.minWidth = "100px";
    dock.style.bottom = "20px";
    dock.style.borderRadius = "30px";
    dock.style.padding = "10px";
    dock.style.backdropFilter = "blur(10px)";
    dock.style.borderWidth = "2px";
    dock.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
    if (body.classList.contains("dark-mode")) {
      dock.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
    } else {
      dock.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
    }
  });

  fullWidthTaskbarBtn.addEventListener("click", () => {
    dock.style.transition = "0.2s";
    dock.style.borderRadius = "0px";
    dock.style.bottom = "0px";
    dock.style.padding = "10px 0";
    dock.style.minWidth = "100%";
    dock.style.backdropFilter = "blur(20px)";
    dock.style.borderWidth = "1px";
    if (body.classList.contains("dark-mode")) {
      dock.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    } else {
      dock.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
    }
  });

  transparentTaskbarBtn.addEventListener("click", () => {
    dock.style.transition = "0.2s";
    dock.style.minWidth = "100%";
    dock.style.bottom = "0px";
    dock.style.borderRadius = "0px";
    dock.style.padding = "10px";
    dock.style.backdropFilter = "blur(0px)";
    dock.style.borderWidth = "0px";
    if (body.classList.contains("dark-mode")) {
      dock.style.backgroundColor = "rgb(0, 0, 0, 0)";
    } else {
      dock.style.backgroundColor = "rgb(255, 255, 255, 0)";
    }
  });

});
