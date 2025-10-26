document.addEventListener('DOMContentLoaded', async () => {
    const settings = await browser.storage.local.get(["spaceEnabled", "muteEnabled"]);
    // init values
    document.getElementById("spaceInput").checked = settings.spaceEnabled !== false;
    document.getElementById("muteInput").checked = settings.muteEnabled !== false;
    // add update listeners for storage
    document.getElementById("spaceInput").addEventListener("change", async (e) => {
        await browser.storage.local.set({spaceEnabled: e.target.checked});
    });
    document.getElementById("muteInput").addEventListener("change", async (e) => {
        await browser.storage.local.set({muteEnabled: e.target.checked});
    });
});