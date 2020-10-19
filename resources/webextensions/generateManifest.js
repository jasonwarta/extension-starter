// manifest for extensions that follow the WebExtension standard
const manifest = {
  manifest_version: 2,
  name: 'ExtensionStarter',
  version: '0.0.1',
  browser_action: {
    default_title: 'Extension Starter',
    default_popup: 'ExtensionStarter.popup.html',
  },
  background: {
    scripts: ['ExtensionStarter.bg.js'],
    persistent: false,
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['ExtensionStarter.cs.js'],
      run_at: 'document_start',
    },
  ],
  options_ui: {
    page: 'ExtensionStarter.options.html',
    open_in_tab: false,
  },
  permissions: ['activeTab'],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self';",
};

// customizations for the edge cases where chrome or firefox requires slightly different syntax
const browserSpecific = {
  chrome: {},
  firefox: {},
};

module.exports = (browser) => {
  return {
    ...manifest,
    ...browserSpecific[browser],
  };
};
