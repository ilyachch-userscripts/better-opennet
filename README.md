# Better Opennet

![Version](https://img.shields.io/github/v/release/ilyachch-userscripts/better-opennet?style=flat-square&label=version&color=blue)
![License](https://img.shields.io/github/license/ilyachch-userscripts/better-opennet?style=flat-square)
![Build Status](https://img.shields.io/github/actions/workflow/status/ilyachch-userscripts/better-opennet/release.yml?style=flat-square&label=build)

**Better Opennet** is a Userscript designed to modernize and improve the reading experience on [Opennet.ru](https://www.opennet.ru). It adds a clean image viewer, allows for a distraction-free layout, and gives you control over which page elements (comments, sidebars) are displayed.

## ✨ Features

*   **🖼️ Modern Image Viewer:** Click on any image or image link within an article to view it in a high-resolution, centered modal with a dark backdrop.
*   **👓 Clear View Mode:** A toggleable "Reading Mode" that hides the right sidebar (`r_col`) and expands the article content for better readability.
*   **🔇 Visual Noise Control:** Toggle the visibility of navigation sidebars (`lenta_nav`) to focus solely on the content.
*   **💬 Comment Management:**
    *   Toggle visibility of the "Comments" section.
    *   Toggle visibility of the "Add Comment" form.
*   **💾 Persistent Settings:** Your preferences are saved automatically and applied on your next visit.

## 🚀 Installation

### 1. Install a Userscript Manager
You need a browser extension to run this script. We recommend:
*   [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari)
*   [Violentmonkey](https://violentmonkey.github.io/) (Open Source alternative)

### 2. Install the Script
Click the link below to install the latest version directly:

[**⬇️ Install Better Opennet**](https://github.com/ilyachch-userscripts/better-opennet/releases/latest/download/better-opennet.user.js)

## ⚙️ Usage

Once installed, the script works automatically on Opennet article pages (`art.shtml`).

To change settings, open your Userscript Manager's menu (Tampermonkey/Violentmonkey icon in the browser toolbar) while on an Opennet page. You will see the following options:

*   **Use Clear View:** Expands the article width and hides the right column.
*   **Hide/Show visual noise:** Toggles the left navigation bars.
*   **Hide/Show comments:** Toggles the entire discussion section.
*   **Hide/Show add comment section:** Toggles just the reply form.

*Note: The page will automatically reload when you toggle a setting to apply the layout changes.*

## 🛠️ Development

This project is built with [Vite](https://vitejs.dev/) and [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey).

### Prerequisites
*   Node.js (v18 or later)
*   npm, pnpm, or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/ilyachch-userscripts/better-opennet.git
cd better-opennet

# Install dependencies
npm install
```

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. Provides a link to install the "dev" version of the script in your browser. Changes are hot-reloaded. |
| `npm run build` | Builds the production `.user.js` file into the `dist/` folder. |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run format` | Runs Prettier to format the code. |
| `npm run preview` | Preview the production build locally. |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
