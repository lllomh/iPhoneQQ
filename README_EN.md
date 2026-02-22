<h1 align="center">iPhoneQQ</h1>

<p align="center">A Vue 2.0 mobile app simulating the QQ experience</p>

<p align="center">
  <a href="README.md">简体中文</a> · <a href="README_EN.md">English</a>
</p>

---

# Introduction

This is a Vue 2.0 project that simulates the mobile QQ app — a beginner's exploration into frontend development. QQ was chosen because it has a rich set of interactions, making it a great practice target. The project is still being improved in my spare time, built little by little every day.

After more than 9 years, the remaining features have finally been completed. Through rain and wind, it was never forgotten.

**Note: This project is purely a personal hobby project and has no affiliation with Tencent QQ or any related services.**




## Tech Stack

Vue 2.0 + vue-resource + vue-router + webpack + ES6/7 + SVG



# Getting Started

#### Note: This project uses ES6/7+ features. Node.js 6.0 or above is required (Node 10+ or 14+ LTS recommended).

```
git clone https://github.com/lllomh/iPhoneQQ.git

cd iPhoneQQ

npm install
```

### Development

```
npm run dev

Visit http://localhost:8080
(Defaults to localhost — no hosts file changes needed.
For mobile debugging, update the host in config/index.js to your local IP.)
```


### Production Build

```
npm run build

Place the generated dist/ folder on your server to deploy.
```




# About This Project

> This project is mainly intended to practice building an interactive application with the Vue 2 architecture.

> If this has been helpful to you, please consider clicking the "Star" button in the top-right corner — thank you! ^_^

> You can also "Follow" me — I'll keep open-sourcing more interesting projects.

> Development environment: macOS 10.12.3 · Chrome 55 · Win10 · Firefox

> Special thanks to myself for sticking with it day after day. Well done. 🌹

> For any issues, please open an Issue directly. If you've found a bug and have a great fix, PRs are very welcome! 👍

> Another beginner Vue 2 + vue-router project, much simpler than this one — great for getting started: [vue-blog](https://github.com/lllomh/vue-blog.git)



# About the Demo & Data

1. The demo uses simulated static data for display purposes only.


## Live Demo

#### (The demo uses mock data — fixed and for style demonstration only. Clone and run locally to see real data.)

[View Demo Here](http://app.lllomh.cn/) (Please preview in Chrome's mobile mode)

### Scan the QR code on mobile

![](http://app.lllomh.cn/static/img/fnx.png)




# Planned Features

- [x] Message list page — Done
- [x] Swipe actions on message list — Done
- [x] Delete messages — Done
- [x] Mark messages as read / unread — Done
- [x] Pull-to-refresh — Done
- [x] Friends list — Done
- [x] Expand / collapse friend groups — Done
- [x] Chat interface — Done
- [x] Edit personal profile — Done
- [x] Friend profile detail — Done
- [x] Moments feed — Done
- [x] QZone module — Done




# Summary

1. Things have been a bit busy lately, so progress has been slow. But building this has been genuinely fun — better than doing nothing. QQ has a lot of features, so there's still plenty to work on!

2. The project is still not fully complete — keep pushing forward.


# Ultimate Goals

1. Build a simulated e-commerce backend system with Node.js. (Planning has already begun.)

2. Use Vue 2 to build a cross-platform hybrid app for iOS and Android.

3. If time permits, release a PC web version as well.

The goal is to become a full-stack developer spanning frontend, backend, mobile iOS, and Android.

...Stay tuned.




# Screenshots

### Full Demo (Work in Progress)

<img src="http://app.lllomh.cn/static/img/yanshi/GIF.gif" width="365" height="619"/>




# Project Structure

```
|-- build                            // Webpack config files
|-- config                           // Build path config
|-- dist                             // Production build output — deploy to server
|-- yanshi                           // Project screenshots
|-- src                              // Source directory
|   |-- components                   // Shared components
|       |-- footer                   // Global footer component
|       |-- header                   // Global header component
|   |-- data                         // Data directory
|       |-- data.json                // Mock data
|   |-- page
|       |-- home                     // Message list page
|           |-- index
|       |-- peopleList               // Friends list page
|           |-- index
|       |-- chat                     // Chat page
|           |-- index
|       |-- profile                  // Edit personal profile
|           |-- index
|       |-- friend                   // Friend profile detail
|           |-- index
|       |-- moments                  // Moments feed
|           |-- index
|       |-- space                    // QZone
|           |-- index
|
|   |-- router                       // Route configuration
|
|   |-- style                        // Global styles
|       |-- style.css
|
|   |-- App.vue                      // Root page component
|
|   |-- main.js                      // Entry point — loads global components
|
|-- .babelrc                         // ES6 transpile config
|-- .editorconfig                    // Code style config
|-- .gitignore                       // Git ignore rules
|-- favicon.ico                      // Browser tab icon
|-- index.html                       // HTML entry point
|-- package.json                     // Project dependencies
|-- README.md                        // Documentation (Chinese)
|-- README_EN.md                     // Documentation (English)
```
