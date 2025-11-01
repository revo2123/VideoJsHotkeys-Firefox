// Browser API compatibility layer
// Provides a unified 'browser' API that works in both Firefox and Chromium-based browsers
(function() {
  // Check if browser API is undefined (Chromium-based browsers use 'chrome' namespace)
  if (typeof browser === 'undefined' && typeof chrome !== 'undefined') {
    // Create a 'browser' alias that uses the chrome API with Promise wrapping
    // Use globalThis to work in both content scripts and extension pages
    const global = typeof globalThis !== 'undefined' ? globalThis : 
                   typeof window !== 'undefined' ? window : 
                   typeof self !== 'undefined' ? self : this;
    
    global.browser = {
      storage: {
        local: {
          get: function(keys) {
            return new Promise((resolve) => {
              chrome.storage.local.get(keys, resolve);
            });
          },
          set: function(items) {
            return new Promise((resolve) => {
              chrome.storage.local.set(items, resolve);
            });
          }
        }
      }
    };
  }
})();
