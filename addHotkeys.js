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
      if (ev.code === "Space" || ev.code === "KeyM" || ev.code === "ArrowLeft" || ev.code === "ArrowRight") {
        ev.preventDefault();
      }

      const video = videos[0];

      const settings = await browser.storage.local.get(["spaceEnabled", "muteEnabled", "arrowEnabled"]);

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
    });
  }
})();