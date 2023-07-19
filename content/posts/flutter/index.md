---
author: "亢少军"
date: 2023-01-27
linktitle: Flutter相关笔记
title: Flutter相关笔记
featuredImage: ""
description: "Flutter移动开发"
---

## Flutter常用命令
```bash
flutter	列出所有的命令
flutter help	查看具体命令的帮助信息
flutter doctor	查看是否还需要安装其它依赖
flutter doctor -v	查看详细信息
flutter channel	查看 Flutter SDK 所有分支
flutter channel stable	切换分支
flutter upgrade	升级 Flutter SDK（此命令会同时更新 Flutter SDK 和你的 Flutter 项目依赖包）
flutter packages get	获取项目所有的依赖包（只更新项目依赖包，不包括 Flutter SDK）
flutter packages upgrade	获取项目所有依赖包的最新版本（只更新项目依赖包，不包括 Flutter SDK）
flutter analyze	分析项目代码
flutter build apk	
flutter build ios	
```

## Flutter常见问题

### flutter真机运行 无法打开“iproxy”,因为无法验证开发者
```bash
sudo xattr -d com.apple.quarantine  /Users/ksj/Desktop/flutter/flutter/bin/cache/artifacts/usbmuxd/iproxy
```

### AndroidStudio无法选中iOS模拟器
```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

