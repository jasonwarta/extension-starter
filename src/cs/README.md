# content scripts

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
