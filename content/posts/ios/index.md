---
author: "亢少军"
date: 2023-01-24
linktitle: iOS相关笔记
title: iOS相关笔记
featuredImage: ""
description: "iOS Pod"
---

## Pod常用命令

### m1常用
m1上需要添加 arch -x86_64
```bash
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
arch -x86_64 pod repo update // 快速更新
arch -x86_64 pod update // 更新所有库
arch -x86_64 pod update Moya // 更新moya
arch -x86_64 pod cache clean --all
```

## 自动打包
自动打包可以使用fastlane这个工具
```bash
fastlane pgyerUp
```

## Swift数据类型
- Int16, 等于short, 占2个字节
- Int32, 等于int, 占4个字节
- Int64, 等于long, 占8个字节
- Int8,  占用1个字节
- Xcode中Int的默认值是64bit的，而Int64也是64bit 

![](https://lsky.cnjsyyb.xyz/i/2023/02/14/63eb9c5cd169a.jpeg)
