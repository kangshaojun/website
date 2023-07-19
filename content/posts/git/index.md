---
author: "亢少军"
date: 2023-01-24
linktitle: Git相关笔记
title: Git相关笔记
featuredImage: ""
description: "git 命令 版本控制"
---

Git常用命令及一些使用知识。

## Git代理

### 打开配置
```bash
vi ~/.gitconfig
```

### 设置代理
```bash
git config --global http.proxy http://127.0.0.1:57158
git config --global https.proxy https://127.0.0.1:57158

git config --global http.proxy 'http://127.0.0.1:18443'
git config --global https.proxy 'https://127.0.0.1:18443'
```
### 取消代理
```bash
git config --unset http.proxy
```
### 取消全局代理
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## git常用命令

### 合并并提交
```bash
合并用这命令
git checkout main
git merge --squash -X theirs develop
git commit -m "merge from b20449b6b32915afa548b0facd7fc0525b5c0171"
git pull
git push
```

### 合并分支
```bash
git checkout main
git merge feed
```

### 查看分支
```bash
git branch
```

### 创建分支
```bash
git checkout -b feed
```

### 切换分支
```bash
git switch feed
```

### 分支推送至远程仓库
```bash
git push origin feed
```

### 强制覆盖本地命令
```bash
git fetch --all
git reset --hard origin/master
git pull
```

### 重置命令
```bash
git reset --hard d8791ffd95a38108b5530d365cada90bc2d6cff0
```

### 提交日志
```bash
git log develop

commit d8791ffd95a38108b5530d365cada90bc2d6cff0
Author: kangshaojun <kangshaojun@gmail.com>
Date:   Wed Jun 28 08:59:59 2023 +0800

    Change GPT logic.
```