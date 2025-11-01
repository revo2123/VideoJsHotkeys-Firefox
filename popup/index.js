document.addEventListener("DOMContentLoaded", () => {
    // load settings
    browser.storage.local.get(["spaceEnabled", "muteEnabled", "arrowEnabled", "volumeEnabled", "fullscreenEnabled"]).then(settings => {
        document.getElementById("spaceInput").checked = settings.spaceEnabled !== false;
        document.getElementById("muteInput").checked = settings.muteEnabled !== false;
        document.getElementById("arrowInput").checked = settings.arrowEnabled !== false;
        document.getElementById("volumeInput").checked = settings.volumeEnabled !== false;
        document.getElementById("fullscreenInput").checked = settings.fullscreenEnabled !== false;
    });
    // Play/Pause
    document.getElementById("spaceInput").addEventListener("change", (e) => {
        browser.storage.local.set({ spaceEnabled: e.target.checked });
    });
    // Mute
    document.getElementById("muteInput").addEventListener("change", (e) => {
        browser.storage.local.set({ muteEnabled: e.target.checked });
    });
    // Scrub
    document.getElementById("arrowInput").addEventListener("change", (e) => {
        browser.storage.local.set({ arrowEnabled: e.target.checked });
    });
    // Volume
    document.getElementById("volumeInput").addEventListener("change", (e) => {
        browser.storage.local.set({ volumeEnabled: e.target.checked });
    });
    // Fullscreen
    document.getElementById("fullscreenInput").addEventListener("change", (e) => {
        browser.storage.local.set({ fullscreenEnabled: e.target.checked });
    });
});