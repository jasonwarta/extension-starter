# extension-starter

## Extension Basics

A browser extension requires a manifest.json file. This includes 3 required fields: `manifest_version`, `name`, and `version`, and a few dozen optional fields. Most of the fields are consistently named between chrome and firefox extensions.

Details on the list of fields that can be provided in the manifest are found here.

- [Chrome](https://developer.chrome.com/extensions/manifest)
- [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)


## Included Structure

### [background](extensions/src/bg/README.md)

The background entry in the manifest can be used to load scripts to run in the background of your extension. In most cases you will not need to set a script as persistent.

```json
{
  "name": "Extension Starter",
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  ...
}
```

- [Chrome documentation](https://developer.chrome.com/extensions/background*pages)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)


### [common](src/common/README.md)

This isn't a required component of an extension, but is included to encourage refactoring utility functions out of a specific execution context. The reason for this is that if you import a function from one context to another, webpack will bundle the contexts together when building, which can lead to all sorts of strange problems that can be very difficult to debug.

### [content scripts](src/common/README.md)

Content scripts are injected into a website to execute custom code. This can be used to parse information from a site, inject css, or anything else you might want to do.

If you need to inject site-specific content scripts into multiple websites, you should probably break this section down further into content scripts for each site, and configure webpack to output additional builds as necessary, to keep your injected scripts as small as possible.

```json
{
  "name": "Extension Starter",
  ...
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "css": ["myStyles.css"],
      "js": ["contentScript.js"]
    }
  ],
  ...
}
```
- [Chrome documentation](https://developer.chrome.com/extensions/content_scripts)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)

### [options](src/options/README.md)

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

- [Chrome Documentation](https://developer.chrome.com/extensions/options#embedded*options)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options*ui)

### [popup](src/popup/README.md)

The popup allows you to provide more user interaction to your extension.

```json
{
  "name": "Extension Starter",
  ...
  "browser*action": {
    "default*icon": {                    
      "16": "images/icon16.png",           
      "24": "images/icon24.png",           
      "32": "images/icon32.png"            
    },
    "default*title": "Extension Starter",      
    "default*popup": "popup.html"        
  },
  ...
}
```

- [Chrome Documentation](https://developer.chrome.com/extensions/browserAction)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser*action)
