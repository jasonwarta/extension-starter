### [popup](src/popup/README.md)

The popup allows you to provide more user interaction to your extension.

```json
{
  "name": "Extension Starter",
  ...
  "browser_action": {
    "default_icon": {
      "16": "images/icon16.png",
      "24": "images/icon24.png",
      "32": "images/icon32.png"
    },
    "default_title": "Extension Starter",
    "default_popup": "popup.html"
  },
  ...
}
```

- [Chrome Documentation](https://developer.chrome.com/extensions/browserAction)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
