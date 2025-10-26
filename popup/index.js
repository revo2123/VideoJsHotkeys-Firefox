document.addEventListener("DOMContentLoaded", () => {
    // load settings
    browser.storage.local.get(["spaceEnabled", "muteEnabled", "arrowEnabled"]).then(settings => {
        document.getElementById("spaceInput").checked = settings.spaceEnabled !== false;
        document.getElementById("muteInput").checked = settings.muteEnabled !== false;
        document.getElementById("arrowInput").checked = settings.arrowEnabled !== false;
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
});