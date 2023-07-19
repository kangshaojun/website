---
author: "亢少军"
date: 2023-02-16
linktitle: Nginx相关笔记
title: Nginx相关笔记
featuredImage: ""
description: "nginx 安装 配置 反向代理"
---

## nginx安装
```bash
wget  http://nginx.org/download/nginx-1.8.0.tar.gz

sudo tar -zxvf nginx-1.8.0.tar.gz -C /usr/local/src/

cd /usr/local/src/nginx-1.8.0

sudo ./configure --prefix=/usr/local/nginx --with-http_ssl_module

sudo make && sudo make install
```

## RTMP+HLS配置
```bash
location /hls {  
types {  
      application/vnd.apple.mpegurl m3u8;  
      video/mp2t ts;  
      }  
      root /tmp;  
      add_header Cache-Control no-cache;  
} 

rtmp {  
    server {  
        listen 1955;  
  
        application myapp {  
            live on;  
        }  
        application hls {  
            live on;  
            hls on;  
            hls_path /tmp/hls;  
        }  
    }  
} 
```
## HTTPS反向代理
```bash
#	server {
#        listen 8889;
#        server_name cloudrtmp.com;
#		ssl on;
#        ssl_certificate         sslkey/213472807170417.pem;
#        ssl_certificate_key sslkey/213472807170417.key;
#       ssl_session_timeout 5m;
#       ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
#       ssl_ciphers AESGCM:ALL:!DH:!EXPORT:!RC4:+HIGH:!MEDIUM:!LOW:!aNULL:!eNULL; 
#       ssl_prefer_server_ciphers on;
#       location / {
#       proxy_pass  http://cloudrtmp.com:8088;
#        }
#  }
```

