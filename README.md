# Just Another Text Editor
A simple text editor web app which can be used offline as a PWA.

Just Another Text Editor (JATE) is a simple web app which contains an instance of the [CodeMirror](https://codemirror.net/) editor. The primary purpose (and motivation) of the app is to apply knowledge of:

- Service Workers
- Progressive Web Apps (PWAs); and
- IndexedDB instances

We leveraged this through [Webpack](https://webpack.js.org/), and several plugins to simplify the process of packaging all the web assets. You can find the full list of what was used in the [Credits](#credits) section.

Some of the biggest challenges of the project I encountered were:

- Using IndexedDB to only store one bit of data, and pass that data back to the editor.
- Setting up the plugins in general; and
- Investigating duplicate InjectManifest warnings while running in dev mode.

That said, I did develop a better understanding of how service workers in general function, and how I would consider approaching PWA deployment in future apps.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
### Live Build
You can access a deployed copy of the web app via Render [here](https://just-another-text-editor-vahh.onrender.com/) to play with it live, or to install it as a PWA without having to go through any additional setup.

### Requirements
- [Node.js LTS 20.11.0](https://nodejs.org/en/download) or better

### Initial Setup
1. Download a copy of the repository as a .ZIP onto your system and extract anywhere.
2. Using a command prompt or terminal shell, navigate to the extracted files on the top level. You should see a `client` and `server` folder here.
3. Run `npm install` to install `concurrently` and other modules, which are necessary for deploying the app.
4. Run `npm run install` to run simultaneous installs for the client and server subdirectories.
5. Run one of the following commands as desired:
    - `npm run start:dev` to launch the server and client in development mode
    - `npm run start` to launch the frontend build process and run the server
    - `npm run client` to only run the client (in dev mode)
    - `npm run server` to only run the server
    - `npm run build` to only perform a compile of client files

## Usage
The usage of the app itself is quite straightforward! Just type in the editor as normal. Your work will be saved when the editor loses focus automatically.

If you're using the app from a web browser that's compatible with PWA installations (all Chromium-based browsers), you will see an  "Install!" button for the app at the top-left corner. This will open the PWA installation app included with the browser.

## Credits
### Runtimes and Libraries
Runtime
- [Node.js](https://nodejs.org/en)

Libraries and Modules
- [Express.js](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [webpack-cli](https://www.npmjs.com/package/webpack-cli)
- [Workbox](https://developer.chrome.com/docs/workbox)
- [Babel](https://babeljs.io/)
- [idb](https://www.npmjs.com/package/idb)
- [concurrently](https://www.npmjs.com/package/concurrently)

Plugins and Loaders
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
- [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest)
- [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
- [babel-loader](https://www.npmjs.com/package/babel-loader)
- [css-loader](https://www.npmjs.com/package/css-loader)
- [style-loader](https://www.npmjs.com/package/style-loader)
- [http-server](https://www.npmjs.com/package/http-server)

Additional Resources
- [CodeMirror](https://codemirror.net/)

Starting code was provided by University of Sydney and edX as part of the Full Stack Coding Bootcamp.

## License
This project is provided under the [MIT License](./LICENSE)
