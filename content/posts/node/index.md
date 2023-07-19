
---
author: "亢少军"
date: 2023-02-10
linktitle: Nodejs相关笔记
title: Nodejs相关笔记
featuredImage: ""
description: "node npm webpack"
---

## Node常用命令

### 查看当前node版本
```bash
$ node -v
```

### 清除npm缓存
```bash
$ npm cache clean -f
```

### 全局安装n
```bash
$ npm install -g n
```

### 升级到最新稳定版
```bash
$ n stable
```

### 升级到最新版
```bash
$ n latest
```

### 升级到定制版
```bash
$ n v14.6.0
```

### 切换使用版本
```bash
$ n 13.10.0 (ENTER)
```

### 删除制定版本
```bash
$ n rm 13.10.0
```

### 用制定的版本执行脚本
```bash
$ n use 13.10.0 some.js
```

### 升级完成查看 node版本
```bash
$ node -v
```

## Webpack
### 安装webpack
```bash
sudo npm install -g webpack
```

执行webpack并显示错误
```bash
webpack --display-error-details
```

放在package.json里
```bash
npm start
npm run build
"start": "node ./bin/www",
"build":"webpack --progress --colors --watch"
```

### Webpack添加监听
```bash
webpack --watch  //添加监听
```