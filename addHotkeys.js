(() => {
  /**
   * gets videoJsPlayer, if available
   * @returns the VideoPlayer(s), if there are any
   */
  function getVideoJsPlayers() {
    return Array.from(document.querySelectorAll("video.video-js, .video-js video"));
  }

  // only add listener once
  if (!window.__videojs_hotkeys_active) {
    window.__videojs_hotkeys_active = true;
    // add listener for keyboard actions
    document.addEventListener("keydown", async (ev) => {
      // dont act if active element is an input or similar field
      const active = document.activeElement;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
        return;
      }

      const videos = getVideoJsPlayers();
      if (videos.length === 0) return;

      // prevent default action for any valid keys
      if (ev.code === "Space" || ev.code === "KeyM" || ev.code === "ArrowLeft" || ev.code === "ArrowRight" || ev.code === "ArrowUp" || ev.code === "ArrowDown" || ev.code === "KeyF") {
        ev.preventDefault();
      }

      const video = videos[0];

      const settings = await browser.storage.local.get(["spaceEnabled", "muteEnabled", "arrowEnabled", "volumeEnabled", "fullscreenEnabled"]);

      // Play/Pause
      if (ev.code === "Space" && settings.spaceEnabled !== false) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
      // Mute
      if (ev.code === "KeyM" && settings.muteEnabled !== false) {
        video.muted = !video.muted;
      }
      // Skip backwards
      if (ev.code === "ArrowLeft" && settings.arrowEnabled !== false) {
        video.currentTime = Math.max(0, video.currentTime - 5);
      }
      // Skip forwards
      if (ev.code === "ArrowRight" && settings.arrowEnabled !== false) {
        video.currentTime = Math.min(video.duration, video.currentTime + 5);
      }
      // Volume up
      if (ev.code === "ArrowUp" && settings.volumeEnabled !== false) {
        video.volume = Math.min(1, video.volume + 0.05);
        video.muted = false; // Unmute when increasing volume
      }
      // Volume down
      if (ev.code === "ArrowDown" && settings.volumeEnabled !== false) {
        video.volume = Math.max(0, video.volume - 0.05);
      }
      // Toggle Fullscreen
      if (ev.code === "KeyF" && settings.fullscreenEnabled !== false) {
        const videoContainer = video.closest(".video-js") || video.parentElement;
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
          // Exit fullscreen
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        } else {
          // Enter fullscreen
          if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
          } else if (videoContainer.mozRequestFullScreen) {
            videoContainer.mozRequestFullScreen();
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
          }
        }
      }
    });
  }
})();