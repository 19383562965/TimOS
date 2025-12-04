const floatingTaskbarBtn = document.getElementById("floating-taskbar-btn");
const fullWidthTaskbarBtn = document.getElementById("full-width-taskbar-btn");
const dock = document.getElementById("dock");

fullWidthTaskbarBtn.addEventListener("click", () => {
  dock.style.transition = "0.2s";
  dock.style.minWidth = "700px";
  dock.style.bottom = "5px";
  dock.style.borderRadius = "0px";
  dock.style.padding = "10px 0";
  dock.style.border = "solid 0px rgba(0, 0, 0, 0.15)";
  dock.style.backgroundFilter = "blur(1000px)";
});

floatingTaskbarBtn.addEventListener("click", () => {
  dock.style.transition = "0.2s";
  dock.style.minWidth = "100px";
  dock.style.bottom = "20px";
  dock.style.borderRadius = "30px";
  dock.style.padding = "10px";
  dock.style.border = "solid 2px rgba(0, 0, 0, 0.15)";
});
