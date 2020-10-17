# options

The options page can be written in html, css, and js, and should use browser APIs to communicate user settings to the rest of the extension.

```json
{
  "name": "Extension Starter",
  ...
  "options_ui": {
    "page": "options.html",
    "open_in_tab": false
  },
  ...
}
```

- [Chrome Documentation](https://developer.chrome.com/extensions/options#embedded_options)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
