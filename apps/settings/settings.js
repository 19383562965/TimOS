document.addEventListener("DOMContentLoaded", () => {

  const settingsMenuTaskbarBtn = document.getElementById("settings-menu-taskbar-btn");
  const settingsMenuDisplayBtn = document.getElementById("settings-menu-display-btn");
  const settingsMenuTopBarBtn = document.getElementById("settings-menu-top-bar-btn");

  const settingsInfoTaskbar = document.getElementById("settings-info-taskbar");
  const settingsInfoDisplay = document.getElementById("settings-info-display");
  const settingsInfoTopBar = document.getElementById("settings-info-top-bar");

  function settingsMenu() {
    settingsInfoTaskbar.style.display = "none";
    settingsInfoDisplay.style.display = "none";
    settingsInfoTopBar.style.display = "none";
  }

  settingsMenuTaskbarBtn.onclick = function () {
    settingsMenu();
    settingsInfoTaskbar.style.display = "inline";
  };

  settingsMenuDisplayBtn.onclick = function () {
    settingsMenu();
    settingsInfoDisplay.style.display = "inline";
  };

  settingsMenuTopBarBtn.onclick = function () {
    settingsMenu();
    settingsInfoTopBar.style.display = "inline";
  };

  const floatingTaskbarBtn = document.getElementById("floating-taskbar-btn");
  const fullWidthTaskbarBtn = document.getElementById("full-width-taskbar-btn");
  const transparentTaskbarBtn = document.getElementById("transparent-taskbar-btn");
  const dock = document.getElementById("dock");

  function floatingTaskbar() {
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
  };

  function fullWidthTaskbar() {
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
  };

  function transparentTaskbar() {
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
  };

  floatingTaskbarBtn.onclick = function () {
    floatingTaskbar();
    localStorage.setItem("dock position", "floatingTaskbar")
  }
  fullWidthTaskbarBtn.onclick = function () {
    fullWidthTaskbar();
    localStorage.setItem("dock position", "fullWidthTaskbar")
  }
  transparentTaskbarBtn.onclick = function () {
    transparentTaskbar();
    localStorage.setItem("dock position", "transparentTaskbar")
  }

  let dockPosition = localStorage.getItem("dock position");
  if (dockPosition === "fullWidthTaskbar") { fullWidthTaskbar(); }
  else if (dockPosition === "transparentTaskbar") { transparentTaskbar(); }
  else { floatingTaskbar(); }

  const hundredScreenHeight = document.getElementById("hundred-screen-height");
  const ninetyFiveScreenHeight = document.getElementById("ninety-five-screen-height");
  const ninetyScreenHeight = document.getElementById("ninety-screen-height");
  const eightyFiveScreenHeight = document.getElementById("eighty-five-screen-height");
  const saveScreenHeight = document.getElementById("save-screen-height");
  const screenHeightInput = document.getElementById("input-screen-height");

  hundredScreenHeight.onclick = function () {
    body.style.height = "100vh";
    localStorage.setItem("screen height", "100");

  };

  ninetyFiveScreenHeight.onclick = function () {
    body.style.height = "95vh";
    localStorage.setItem("screen height", "95");
  };

  ninetyScreenHeight.onclick = function () {
    body.style.height = "90vh";
    localStorage.setItem("screen height", "90");
  };
  eightyFiveScreenHeight.onclick = function () {
    body.style.height = "85vh";
    localStorage.setItem("screen height", "85");
  };
  saveScreenHeight.onclick = function () {
  const valueScreenHeight = screenHeightInput.value;
  body.style.height = valueScreenHeight + "vh";
  localStorage.setItem("screen height", valueScreenHeight);
};


  body.style.height = localStorage.getItem("screen height") + "vh";

  realScreenSize.onclick = function () {
    let width = window.innerWidth;
    let height = window.innerHeight;
    body.style.width = width;
    body.style.height = height;
  }

  const transparentTopBarBtn = document.getElementById("transparent-top-bar-btn");
  const blurTopBarBtn = document.getElementById("blur-top-bar-btn");

  const topBar = document.getElementById("menu-bar");

  blurTopBarBtn.onclick = function () {
    topBar.style.backdropFilter = "blur(20px)";
    if (body.classList.contains("dark-mode")) {
      topBar.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    } else {
      topBar.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }
  };

  transparentTopBarBtn.onclick = function () {
    topBar.style.backdropFilter = "none";
    topBar.style.backgroundColor = "rgba(0,0,0,0)";
  };
  
});
