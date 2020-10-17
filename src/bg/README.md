# background

The background entry in the manifest can be used to load scripts to run in the background of your extension. In most cases you will not need to set a script as persistent.

```json
{
  "name": "Extension Starter",
  ...
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  ...
}
```

- [Chrome documentation](https://developer.chrome.com/extensions/background_pages)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)
