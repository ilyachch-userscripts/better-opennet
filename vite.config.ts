import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// === Configuration ===
const SCRIPT_NAME = 'Better Opennet';
const NAMESPACE = 'https://github.com/ilyachch';
const MATCH_URLS = ['*://*/*'];
const ICON_URL = 'https://www.google.com/s2/favicons?sz=64&domain=github.com';
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
        description: 'Tampermonkey app',
        author: 'ilyachch',
        grant: ['GM_addStyle'],
        updateURL: 'https://github.com/ilyachch/better-opennet/releases/latest/download/better-opennet.user.js',
        downloadURL: 'https://github.com/ilyachch/better-opennet/releases/latest/download/better-opennet.user.js',
      },
    }),
  ],
});
