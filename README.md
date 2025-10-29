# Video Hotkeys
Available at: https://addons.mozilla.org/en-US/firefox/addon/videojs-hotkeys/  
Firefox extension that adds keyboard shortcuts for Video.js players.

## Shortcuts

- **Space** - Play/Pause
- **M** - Mute/Unmute

Toggle shortcuts on/off via the extension popup.

## Installation

1. Clone this repo
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select `manifest.json`

## Development

```
video-hotkeys/
├── manifest.json
├── addHotkeys.js
├── icons/
└── popup/
    ├── index.html
    ├── index.js
    └── style.css
```