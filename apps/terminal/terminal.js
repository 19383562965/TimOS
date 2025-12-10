document.addEventListener("DOMContentLoaded", () => {

  const runTerminalBtn = document.getElementById("run-terminal-btn");
  const terminalInput = document.getElementById("terminal-input");

  const PCBackground = document.getElementById("background");

  runTerminalBtn.addEventListener("click", () => {
    const value = terminalInput.value.trim();

    if (value === ">wallpaper") {
      PCBackground.src = "https://images.squarespace-cdn.com/content/v1/51a26726e4b0f0ad7357f298/1698728709825-TEITCJTHNHNLZ4GQMW1J/MacBook+Pro+wallpaper.png"
    }
    else if (value === ">dif") {
      setTimeout(myTimer, 1000);
      dynamicIsland.style.height = "100px";
      dynamicIsland.style.width = "100px";
      dynamicIsland.innerHTML = `<ion-icon name="flame-outline" style="color: orange;"></ion-icon>`;
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
    else {
      console.log("Command not recognized:", value);
    }

    terminalInput.value = ">";
  });
});
