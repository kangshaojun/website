---
author: "亢少军"
date: 2023-01-27
linktitle: WebRTC相关笔记
title: WebRTC相关笔记
featuredImage: ""
description: "WebRTC P2P SFU 流媒体 网络等知识 PION/ION-SFU"
---

## Chrome相关
```bash
chrome://webrtc-internals/ 监测webrtc数据
chrome://flags/  启用关闭chrome实验室功能
```

## nw.js相关
添加chromium-args可绕过https自签名问题
```js
{
"name":"static",
"version":"1.0.0",
"description":"",
"main":"index.html",
"author":"",
"license":"ISC",
"chromium-args": "--enable-file-cookies --allow-running-insecure-content --ignore-certificate-errors",
"window": {
    "title": "node-webkit demo",
    "icon": "hospital72.png",
    "toolbar": true,
    "frame": true,
	 "width": 800,
    "height": 500
  }
}
```

## WebRTC调试工具
Chrome浏览器输入
```bash
webrtc-internals
```