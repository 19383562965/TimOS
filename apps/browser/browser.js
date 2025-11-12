const iframe = document.getElementById("iframe");
const searchBtn = document.getElementById("search-btn");
const input = document.getElementById("input");
const menu = document.getElementById("menu");
const refresh = document.getElementById("refresh");
const menuCatalog = document.getElementById('menu-catalog');

searchBtn.onclick = function() {
    let url = input.value.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    input.value = url;
    iframe.src = url;
  };

refresh.onclick = function() {
  let memoryOne = iframe.src;
  iframe.src = "";
  iframe.src = memoryOne;
};

menu.onclick = function() {
  if(menuCatalog.style.display === "none") {
        menuCatalog.style.display = "flex";
      } else {
        menuCatalog.style.display = "none";
      }
};

menuCatalog.addEventListener('click', function (event) {
    // Check if a button was clicked
    if (event.target.tagName === 'BUTTON') {
      // Get the text of the button
      const buttonText = event.target.textContent.trim();

      menuCatalog.style.display = "none";

      // Set the input's value
      input.value = buttonText;
    }
  });