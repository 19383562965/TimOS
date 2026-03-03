const search = document.getElementById("browser-search");
const searchBtn = document.getElementById("browser-search-btn");
const iframe = document.getElementById("browser-iframe");

// Click button to search
searchBtn.onclick = handleActionSearch;

// Press Enter to search
search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleActionSearch();
    }
});

function handleActionSearch() {
    const searchValue = search.value.trim();
    iframe.src = "";

    if (!searchValue) {
      iframe.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    } // Do nothing if empty

    // If the input already contains https:// or http://, use it directly
    else if (searchValue.startsWith("https://") || searchValue.startsWith("http://")) {
        iframe.src = searchValue;
        iframe.style.backgroundColor = "rgba(255, 255, 255, 1)"
    } else {
        iframe.src = "https://" + searchValue;
        iframe.style.backgroundColor = "rgba(255, 255, 255, 1)"
    }

}