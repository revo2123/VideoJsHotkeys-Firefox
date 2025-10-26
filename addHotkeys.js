(function() {
  function getVideoJsPlayers() {
    return Array.from(document.querySelectorAll('video.video-js, .video-js video'));
  }

  // Only add listener once
  if (!window.__videojs_hotkeys_active) {
    window.__videojs_hotkeys_active = true;

    document.addEventListener('keydown', async (ev) => {
      // dont act if input or similar fields are active
      const active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
        return;
      }
      // dont act if no player is active
      const videos = getVideoJsPlayers();
      if (videos.length === 0) return;
      // prevent default for space or m
      if (ev.code === 'Space' || ev.code === 'KeyM') {
        ev.preventDefault();
      }
      const video = videos[0];
      // load settings
      const settings = await browser.storage.local.get(['spaceEnabled', 'muteEnabled']);
      // toggle play/pause, could possibly be undefined before first toggle switch
      if (ev.code === 'Space' && settings.spaceEnabled !== false) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
      // toggle mute, could possibly be undefined before first toggle switch
      if (ev.code === 'KeyM' && settings.muteEnabled !== false) {
        video.muted = !video.muted;
      }
    });
  }
})();