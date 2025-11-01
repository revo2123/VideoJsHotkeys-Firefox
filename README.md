# Video Hotkeys

A cross-browser browser extension that adds keyboard shortcuts for Video.js players. Enhance your video watching experience with customizable hotkeys for play/pause, volume control, seeking, and more.

[![Firefox Add-on](https://img.shields.io/badge/Firefox-Add--on-orange?logo=firefox-browser)](https://addons.mozilla.org/en-US/firefox/addon/videojs-hotkeys/)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?logo=google-chrome)](https://chrome.google.com/webstore)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)

## ✨ Features

- **Customizable Hotkeys** - Enable or disable any keyboard shortcut via the extension popup
- **Cross-Browser Support** - Works on Firefox, Chrome, Edge, Brave, and Safari
- **Smart Input Handling** - Automatically ignores keyboard input when typing in text fields
- **Persistent Settings** - Your preferences are saved and synced across browser sessions

## ⌨️ Keyboard Shortcuts

| Key | Action | Default |
|-----|--------|---------|
| **Space** | Play/Pause | ✅ Enabled |
| **M** | Mute/Unmute | ✅ Enabled |
| **← →** | Skip backwards/forwards 5 seconds | ✅ Enabled |
| **↑ ↓** | Volume up/down (5% increments) | ✅ Enabled |
| **F** | Toggle Fullscreen | ✅ Enabled |

> 💡 **Tip:** You can toggle any shortcut on or off through the extension popup menu.

## 🌐 Browser Compatibility

| Browser | Status | Notes |
|---------|--------|-------|
| Firefox | ✅ Fully Supported | Native `browser.*` API support |
| Chrome | ✅ Fully Supported | Uses compatibility layer |
| Edge | ✅ Fully Supported | Uses compatibility layer |
| Brave | ✅ Fully Supported | Uses compatibility layer |
| Opera | ✅ Fully Supported | Uses compatibility layer |
| Safari | ✅ Supported | Native `browser.*` API support |

## 📦 Installation

### From Browser Stores (Recommended)

- **Firefox:** [Install from Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/videojs-hotkeys/)
- **Chrome/Edge/Brave:** Coming soon to Chrome Web Store

## 🚀 Usage

1. **Install the extension** using one of the methods above
2. **Navigate to any website** with a Video.js player
3. **Press the keyboard shortcuts** - they work automatically!
4. **Customize settings** by clicking the extension icon in your browser toolbar

### Settings Popup

Click the extension icon to access the settings popup where you can:
- Toggle each hotkey on or off
- All changes are saved automatically

## 📁 Project Structure

```
VideoJsHotkeys-Firefox/
├── manifest.json             # Extension manifest (Manifest V3)
├── addHotkeys.js             # Main content script with hotkey logic
├── browser-compat.js         # Cross-browser API compatibility layer
├── icons/
│   └── 48.png               # Extension icon
└── popup/
    ├── index.html           # Settings popup HTML
    ├── index.js             # Popup logic and settings management
    └── style.css            # Popup styles
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 Technical Details

- **Manifest Version:** 3
- **Permissions:** `storage` (for saving user preferences)
- **Content Scripts:** Injected on all URLs (`<all_urls>`)
- **Storage:** Uses `browser.storage.local` API (compatible across browsers)

### API Compatibility

The extension includes a compatibility layer (`browser-compat.js`) that automatically detects the browser environment:
- **Firefox/Safari:** Uses native `browser.*` API
- **Chromium browsers:** Converts `chrome.*` API to `browser.*` format with Promise wrapping

## 🐛 Known Issues & Limitations

- Hotkeys only work on pages with Video.js players detected by the selector `video.video-js, .video-js video`
- Some websites may have their own keyboard handlers that could conflict

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Attribution:** When using this code, please include the copyright notice and license file. A link back to this repository is appreciated but not required.

## 🙏 Acknowledgments

- Built for [Video.js](https://videojs.com/) player
- Uses WebExtensions API for cross-browser compatibility

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/revo2123/VideoJsHotkeys-Extension/issues)
- **Firefox Add-on Page:** [View on AMO](https://addons.mozilla.org/en-US/firefox/addon/videojs-hotkeys/)

---

**Version:** 1.0  
**Last Updated:** 2024
