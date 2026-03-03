document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const dynamicIsland = document.getElementById("dynamic-island");

  // --- Settings Menu ---
  const settingsMenuTaskbarBtn = document.getElementById("settings-menu-taskbar-btn");
  const settingsMenuDisplayBtn = document.getElementById("settings-menu-display-btn");
  const settingsMenuTopBarBtn = document.getElementById("settings-menu-top-bar-btn");

  const settingsInfoTaskbar = document.getElementById("settings-info-taskbar");
  const settingsInfoDisplay = document.getElementById("settings-info-display");
  const settingsInfoTopBar = document.getElementById("settings-info-top-bar");

  function hideAllSettings() {
    settingsInfoTaskbar.style.display = "none";
    settingsInfoDisplay.style.display = "none";
    settingsInfoTopBar.style.display = "none";
  }

  settingsMenuTaskbarBtn.onclick = () => { hideAllSettings(); settingsInfoTaskbar.style.display = "inline"; };
  settingsMenuDisplayBtn.onclick = () => { hideAllSettings(); settingsInfoDisplay.style.display = "inline"; };
  settingsMenuTopBarBtn.onclick = () => { hideAllSettings(); settingsInfoTopBar.style.display = "inline"; };

  // --- Dock / Taskbar ---
  const dock = document.getElementById("dock");
  const floatingTaskbarBtn = document.getElementById("floating-taskbar-btn");
  const fullWidthTaskbarBtn = document.getElementById("full-width-taskbar-btn");
  const transparentTaskbarBtn = document.getElementById("transparent-taskbar-btn");

  function setDockBackground(lightColor, darkColor) {
    dock.style.backgroundColor = body.classList.contains("dark-mode") ? darkColor : lightColor;
  }

  function floatingTaskbar() {
    dock.className = "floating";
    dock.style.transition = "0.2s";
    dock.style.minWidth = "100px";
    dock.style.bottom = "20px";
    dock.style.borderRadius = "30px";
    dock.style.padding = "10px";
    dock.style.backdropFilter = "blur(10px)";
    dock.style.borderWidth = "2px";
    setDockBackground("rgba(255,255,255,0.2)", "rgba(0,0,0,0.2)");
  }

  function fullWidthTaskbar() {
    dock.className = "full-width";
    dock.style.transition = "0.2s";
    dock.style.borderRadius = "0";
    dock.style.bottom = "0";
    dock.style.padding = "10px 0";
    dock.style.minWidth = "100%";
    dock.style.backdropFilter = "blur(20px)";
    dock.style.borderWidth = "1px";
    setDockBackground("rgba(255,255,255,0.5)", "rgba(0,0,0,0.5)");
  }

  function transparentTaskbar() {
    dock.className = "transparent";
    dock.style.transition = "0.2s";
    dock.style.minWidth = "100%";
    dock.style.bottom = "0";
    dock.style.borderRadius = "0";
    dock.style.padding = "10px";
    dock.style.backdropFilter = "none";
    dock.style.borderWidth = "0";
    setDockBackground("rgba(255,255,255,0)", "rgba(0,0,0,0)");
  }

  // --- Dynamic Island Animation ---
  function dynamicIslandAnimation() {
    dynamicIsland.style.height = "26px";
    dynamicIsland.style.width = "96px";
    dynamicIsland.innerHTML = `<ion-icon name="checkmark-outline" style="color: grey;"></ion-icon>`;
    dynamicIsland.style.fontSize = "20px";
    dynamicIsland.style.gap = "10px";

    setTimeout(() => {
      dynamicIsland.style.height = "26px";
      dynamicIsland.style.width = "96px";
      dynamicIsland.innerHTML = ``;
      dynamicIsland.style.fontSize = "26px";
      dynamicIsland.style.gap = "0px";
    }, 1000);
  }

  // --- Dock Button Events ---
  floatingTaskbarBtn.onclick = () => { floatingTaskbar(); localStorage.setItem("dockPosition", "floating"); dynamicIslandAnimation(); };
  fullWidthTaskbarBtn.onclick = () => { fullWidthTaskbar(); localStorage.setItem("dockPosition", "fullWidth"); dynamicIslandAnimation(); };
  transparentTaskbarBtn.onclick = () => { transparentTaskbar(); localStorage.setItem("dockPosition", "transparent"); dynamicIslandAnimation(); };

  // --- Load Saved Dock Position ---
  const savedDock = localStorage.getItem("dockPosition") || "floating";
  if (savedDock === "fullWidth") fullWidthTaskbar();
  else if (savedDock === "transparent") transparentTaskbar();
  else floatingTaskbar();

  // --- Screen Height Controls ---
  const screenHeightInput = document.getElementById("input-screen-height");
  const hundredScreenHeight = document.getElementById("hundred-screen-height");
  const ninetyFiveScreenHeight = document.getElementById("ninety-five-screen-height");
  const ninetyScreenHeight = document.getElementById("ninety-screen-height");
  const eightyFiveScreenHeight = document.getElementById("eighty-five-screen-height");
  const saveScreenHeight = document.getElementById("save-screen-height");
  const realScreenSize = document.getElementById("real-screen-size");

  function setBodyHeight(value) {
    body.style.height = value + "vh";
    localStorage.setItem("screenHeight", value);
    dynamicIslandAnimation();
  }

  hundredScreenHeight.onclick = () => setBodyHeight(100);
  ninetyFiveScreenHeight.onclick = () => setBodyHeight(95);
  ninetyScreenHeight.onclick = () => setBodyHeight(90);
  eightyFiveScreenHeight.onclick = () => setBodyHeight(85);
  saveScreenHeight.onclick = () => {
    const value = parseInt(screenHeightInput.value);
    if (!isNaN(value)) setBodyHeight(value);
  };

  const savedHeight = localStorage.getItem("screenHeight") || "100";
  body.style.height = savedHeight + "vh";

  realScreenSize.onclick = () => {
    body.style.width = window.innerWidth + "px";
    body.style.height = window.innerHeight + "px";
  };

  // --- Top Bar Controls ---
  const topBar = document.getElementById("menu-bar");
  const transparentTopBarBtn = document.getElementById("transparent-top-bar-btn");
  const blurTopBarBtn = document.getElementById("blur-top-bar-btn");

  blurTopBarBtn.onclick = () => {
    topBar.style.backdropFilter = "blur(20px)";
    topBar.style.backgroundColor = body.classList.contains("dark-mode") ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.2)";
  };

  transparentTopBarBtn.onclick = () => {
    topBar.style.backdropFilter = "none";
    topBar.style.backgroundColor = "rgba(0,0,0,0)";
  };

});
