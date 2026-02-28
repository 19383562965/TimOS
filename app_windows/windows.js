document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  let highestZ = 10;
  const appWindows = document.querySelectorAll(".app-window");
  const dock = document.getElementById("dock");

  // ==================== HELPERS ====================
  function bringToFront(win) {
    highestZ++;
    win.style.zIndex = highestZ;
  }

  function freezeWindowContent(windowEl) {
    // Pause videos
    const videos = windowEl.querySelectorAll("video");
    videos.forEach(video => video.pause());

    // Freeze iframes (set src to about:blank)
    const iframes = windowEl.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      if (!iframe.dataset.src) iframe.dataset.src = iframe.src;
      iframe.src = "about:blank";
    });
  }

  function resumeWindowContent(windowEl) {
    // Play videos
    const videos = windowEl.querySelectorAll("video");
    videos.forEach(video => video.play().catch(() => {}));

    // Restore iframes
    const iframes = windowEl.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      if (iframe.dataset.src) iframe.src = iframe.dataset.src;
    });
  }

  // ==================== INITIALIZE WINDOWS ====================
  appWindows.forEach(windowEl => {
    const titleBar = windowEl.querySelector(".title-bar");
    const closeBtn = windowEl.querySelector(".close-window");
    const hideBtn = windowEl.querySelector(".hide-window");
    const fullscreenBtn = windowEl.querySelector(".fullscreen-window");

    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let isFullscreen = false;
    let prevState = {};

    // Random initial position
    const centerX = window.innerWidth / 2 - windowEl.offsetWidth / 2;
    const centerY = window.innerHeight / 2 - windowEl.offsetHeight / 2;
    const offsetX = (Math.random() - 0.5) * (window.innerWidth / 3);
    const offsetY = (Math.random() - 0.5) * (window.innerHeight / 3);
    windowEl.style.left = `${centerX + offsetX}px`;
    windowEl.style.top = `${centerY + offsetY}px`;

    // ==================== DRAGGING ====================
    const startDrag = (clientX, clientY) => {
      isDragging = true;
      dragOffsetX = clientX - windowEl.offsetLeft;
      dragOffsetY = clientY - windowEl.offsetTop;
      bringToFront(windowEl);
    };

    const moveWindow = (clientX, clientY) => {
      if (!isDragging) return;
      let newLeft = clientX - dragOffsetX;
      let newTop = clientY - dragOffsetY;
      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - windowEl.offsetWidth));
      newTop = Math.max(0, Math.min(newTop, window.innerHeight - windowEl.offsetHeight));
      windowEl.style.left = `${newLeft}px`;
      windowEl.style.top = `${newTop}px`;
    };

    // Mouse events
    titleBar.addEventListener("mousedown", e => {
      if (e.target.tagName === "BUTTON") return;
      startDrag(e.clientX, e.clientY);
    });
    document.addEventListener("mousemove", e => moveWindow(e.clientX, e.clientY));
    document.addEventListener("mouseup", () => (isDragging = false));

    // Touch events
    titleBar.addEventListener("touchstart", e => {
      if (e.target.tagName === "BUTTON") return;
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
    });
    document.addEventListener("touchmove", e => {
      if (!isDragging) return;
      const touch = e.touches[0];
      moveWindow(touch.clientX, touch.clientY);
    });
    document.addEventListener("touchend", () => (isDragging = false));

    // ==================== FULLSCREEN ====================
    fullscreenBtn?.addEventListener("click", () => {
      windowEl.style.transition = "all 0.3s ease";

      if (!isFullscreen) {
        prevState = {
          width: windowEl.offsetWidth,
          height: windowEl.offsetHeight,
          left: windowEl.offsetLeft,
          top: windowEl.offsetTop,
          borderRadius: getComputedStyle(windowEl).borderRadius,
          background: getComputedStyle(windowEl).background,
        };

        Object.assign(windowEl.style, {
          width: `${window.innerWidth}px`,
          height: `${window.innerHeight}px`,
          left: "0px",
          top: "0px",
          borderRadius: "0px",
          background: windowEl.classList.contains("dark-mode")
            ? "rgba(46,46,46,1)"
            : "rgba(255,255,255,1)",
        });

        isFullscreen = true;
      } else {
        Object.assign(windowEl.style, {
          width: `${prevState.width}px`,
          height: `${prevState.height}px`,
          left: `${prevState.left}px`,
          top: `${prevState.top}px`,
          borderRadius: prevState.borderRadius,
          background: prevState.background,
        });

        isFullscreen = false;
      }

      bringToFront(windowEl);
      setTimeout(() => (windowEl.style.transition = ""), 300);
    });

    // ==================== CLOSE / HIDE ====================
    // Close button: freezes content
    closeBtn?.addEventListener("click", () => {
      windowEl.classList.remove("active");
      freezeWindowContent(windowEl); // freeze videos/iframes
    });

    // Hide button: just hides visually
    hideBtn?.addEventListener("click", () => {
      windowEl.classList.remove("active");
      // DO NOT freeze content
    });
  });

  // ==================== DOCK ICONS ====================
  const dockIcons = document.querySelectorAll(".app-icon");
  dockIcons.forEach(icon => {
    const appWindow = document.getElementById(`${icon.id}-window`);
    if (!appWindow) return;

    icon.addEventListener("click", () => {
      appWindow.classList.add("active");
      bringToFront(appWindow);
      resumeWindowContent(appWindow); // restore videos/iframes
    });
  });

  // ==================== DARK MODE ====================
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
    document.querySelectorAll(".app-window").forEach(win => win.classList.toggle("dark-mode"));
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  };
  if (darkModeBtn) darkModeBtn.addEventListener("click", toggleDarkMode);
  if (localStorage.getItem("theme") === "dark") toggleDarkMode();

});
