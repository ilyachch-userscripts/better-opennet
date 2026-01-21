import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// === Configuration ===
const SCRIPT_NAME = 'Better Opennet';
const NAMESPACE = 'https://github.com/ilyachch';
const MATCH_URLS = ['https://www.opennet.ru/*/art.shtml?*'];
const ICON_URL = 'https://www.google.com/s2/favicons?sz=64&domain=opennet.ru';
// =====================

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: SCRIPT_NAME,
        namespace: NAMESPACE,
        match: MATCH_URLS,
        icon: ICON_URL,
        description: 'Improves the usability of the Opennet.ru website',
        author: 'ilyachch',
        grant: [
          'GM_addStyle',
          'GM_registerMenuCommand',
          'GM_setValue',
          'GM_getValue',
          'GM_deleteValue',
        ],
        homepageURL: 'https://github.com/ilyachch-userscripts/better-opennet',
        supportURL: 'https://github.com/ilyachch-userscripts/better-opennet/issues',
        updateURL:
          'https://github.com/ilyachch-userscripts/better-opennet/releases/latest/download/better-opennet.user.js',
        downloadURL:
          'https://github.com/ilyachch-userscripts/better-opennet/releases/latest/download/better-opennet.user.js',
      },
    }),
  ],
});
