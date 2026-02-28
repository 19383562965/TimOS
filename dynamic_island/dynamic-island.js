//Animation
function glowEffect(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return; // Exit if element not found

    // Add smooth transition
    el.style.transition = "box-shadow 0.8s ease-in-out";

    setTimeout(() => {
        el.style.boxShadow = `
            -6px 6px 6px rgb(141, 159, 255),
            6px -6px 6px rgb(255, 185, 234),
            -4px -4px 8px rgb(255, 214, 113),
            4px 4px 8px rgb(198, 134, 255)
        `;
    }, 0);

    setTimeout(() => {
        el.style.boxShadow = `
            -6px -6px 6px rgb(141, 159, 255),
            6px 6px 6px rgb(255, 185, 234),
            -4px 4px 8px rgb(255, 214, 113),
            4px -4px 8px rgb(198, 134, 255)
        `;
        el.style.transition = "box-shadow 0.8s ease-in-out";
    }, 700);

    setTimeout(() => {
        el.style.boxShadow = `
            6px -6px 6px rgb(141, 159, 255),
            -6px 6px 6px rgb(255, 185, 234),
            4px 4px 8px rgb(255, 214, 113),
            -4px -4px 8px rgb(198, 134, 255)
        `;
    }, 1300);

    setTimeout(() => {
        el.style.boxShadow = "none";
    }, 1900);
}

glowEffect("dock");
dynamicIsland = document.getElementById("dynamic-island");
dynamicIsland.style.width = "96px";
dynamicIsland.style.justifyContent = "right";
dynamicIsland.innerHTML = `<ion-icon id="dynamic-island-loading-icon" name="hourglass-outline" style="color: rgb(141, 159, 255); margin-right: 5px; transform: rotate(720deg); transition: 1s;"></ion-icon>`;
dynamicIsland.style.fontSize = "22px";

window.onload = (event) => {
  dynamicIsland.innerHTML = ``;
  dynamicIsland.style.fontSize = "26px";
  dynamicIsland.style.top = "5px";
  dynamicIsland.style.justifyContent = "center";
};