---
author: "亢少军"
date: 2023-02-16
linktitle: Linux相关笔记
title: Linux相关笔记
featuredImage: ""
description: "linux ubuntu"
---

## 常用命令

### 杀掉指定进程
```js
ps aux | grep 进程名
ps aux | grep node
kill -9 30191
```

### 服务器与服务器拷贝文件
```js
scp -r /opt/jdk1.7/ root@114.55.144.19:/opt
```  
回车后输入目的服务器密码即可  
```js  
#scp -r root@114.55.144.19:/opt/janus  /opt/janus   -r目录
```  
### ubuntu下jdk安装
编辑 .bashrc 文件。
在终端输入如下命令：
```js
vi ~/.bashrc
```
在该文件的末尾，加上以上几行代码：
```js
export JAVA_HOME=/opt/jdk1.7
export CLASSPATH=${JAVA_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```
为了让更改立即生效，请在终端执行如下命令：
```js
source ~/.bashrc
```

### ubuntu root登录
```js
ubuntu14.04使用root账户登录
14.04默认是没有root用户的。 
1、先创建root账户密码sudo passwd root 
2、gedit /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf 
加一句greeter-show-manual-login=true，保存关闭 
3、重启
ubuntu解决root登陆报stdin:is not tty
在上文基础上增加autologin-user=root，自动登录root帐户
报错Error found when loading /root/.profile stdin: is not a tty 
更改/root/.profile文件 
把mesg n 进行注释，增加一行 tty -s && mesg n 
然后reboot
```

### ubuntu安装ssh
更新源列表
```js
"sudo apt-get update"
```
安装ssh
```js
sudo apt-get install openssh-server
```

查看ssh服务是否启动
sudo ps -e |grep ssh"-->回车-->有sshd,说明ssh服务已经启动，如果没有启动，输入"sudo service ssh start"-->回车-->ssh服务就会启动。

使用gedit修改配置文件"/etc/ssh/sshd_config"
打开"终端窗口"，输入"sudo gedit /etc/ssh/sshd_config"-->回车-->把配置文件中的"PermitRootLogin without-password"加一个"#"号,把它注释掉-->再增加一句"PermitRootLogin yes"-->保存，修改成功。

查看Ubuntu 14.04的IP地址
打开"终端窗口"，输入"sudo ifconfig"-->回车-->就可以查看到IP地址。

修改SSH_CONFIG文件
```js
vi /etc/ssh/ssh_config
```
去掉port 22  及 protocol 2,1前面的#号

### ubuntu无法找到add-apt-repository问题的解决方法
```js
python-software-properties 
apt-get install python-software-properties 
除此之外还要安装 
software-properties-common 
于是 
apt-get install software-properties-common 
然后就能用add-apt-repository了
```

### nohup后台运行
示例:
```js
nohup node server.js &
exit 
```

### ubuntu网卡命令
```js
ifconfig eth0 up
ifconfig eth0 down
netstat -ntlp 
netstat -ntlp | grep 8443 
```

## openssl升级安装
1:查看当前版本号
```js
openssl version
```

3:获取最新版本
版本根据自己需要下载地址:
```js
wget http://www.openssl.org/source/openssl-1.0.1t.tar.gz
```
4:解压缩
```js
tar -zxvf openssl-1.0.1t.tar.gz
```
5:进入目录
```js
cd  openssl-1.0.1t
```
6:编译安装
```js
./config --prefix=/usr/local/ssl 
make depend 
make && make install
```

7:修改历史的OpenSSL文件设置备份
```js
mv /usr/bin/openssl /usr/bin/openssl.old
mv /usr/include/openssl /usr/include/openssl.old
```
 
8:设置软连接使其使用新的OpenSSL版本 刚刚安装的OpenSSL默认安装在/usr/local/ssl
```js
ln -s /usr/local/ssl/bin/openssl /usr/bin/openssl
ln -s /usr/local/ssl/include/openssl /usr/include/openssl
```
 
9:更新动态链接库数据
```js
echo "/usr/local/ssl/lib" >> /etc/ld.so.conf 
ldconfig -v
```
OpenSSL 版本信息.
```js
openssl version
OpenSSL 1.0.1t  3 May 2016
 ```