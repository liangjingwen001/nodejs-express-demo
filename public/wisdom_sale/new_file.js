// server {
//        #监听80端口，80端口是知名端口号，用于HTTP协议
//        listen       80;
//        #定义访问的域名
//        server_name  www.helloworld.com; 

//        #访问www.helloworld.com的时候引导去访问/nginx/html/helloWorld目录下面的index文件
//        location / {
// 		   root html/helloworld;
//            index index.html index.htm;
//        } 
// 	   #错误处理页面（可选择性配置）
// 		#error_page   404              /404.html;
// 		error_page   500 502 503 504  /50x.html;
// 		location = /50x.html {
// 							 root   html;
// 		}
// }

// server {
//        #监听80端口，80端口是知名端口号，用于HTTP协议
//        listen       80;
//        #定义访问的域名
//        server_name  www.helloworld.com; 

//        #访问www.helloworld.com的时候引导去访问http://192.168.1.1:8080服务器
//        location / {
// 		   proxy_pass http://192.168.1.1:8080/;
//        } 
// 	   #错误处理页面（可选择性配置）
// 		#error_page   404              /404.html;
// 		error_page   500 502 503 504  /50x.html;
// 		location = /50x.html {
// 							 root   html;
// 		}
// }

// upstream tomcat_cluster{
// 	server 192.168.0.1:8080 weight=10;
// 	server 192.168.0.1:8081 weight=10;
// }
// server {
//        #监听80端口，80端口是知名端口号，用于HTTP协议
//        listen       80;
//        #定义访问的域名
//        server_name  www.helloworld.com; 

//        #访问www.helloworld.com的时候根据权重分配到不同的服务器
//        location / {
// 		   proxy_pass http://tomcat_cluster;
//        } 
// 	   #错误处理页面（可选择性配置）
// 		#error_page   404              /404.html;
// 		error_page   500 502 503 504  /50x.html;
// 		location = /50x.html {
// 							 root   html;
// 		}
// }

server {
// 访问http://192.168.0.1/breake，请求分发到http://192.168.0.1/index/index.html，url没有改变
		rewrite /breake /index/index.html break;
// 访问http://192.168.0.1/permanent.html，请求分发到http://192.168.0.1/index/index.html，url改变
		rewrite /permanent.html /index/index.html permanent;
	
       #监听80端口，80端口是知名端口号，用于HTTP协议
       listen       80;
       server_name  www.helloworld.com; 

       #访问www.helloworld.com的时候根据权重分配到不同的服务器
       location / {
		   proxy_pass http://tomcat_cluster;
       } 
	   #错误处理页面（可选择性配置）
		error_page   500 502 503 504  /50x.html;
		location = /50x.html {
							 root   html;
		}
}