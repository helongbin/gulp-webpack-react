本地mock数据， 方便调试

1. 需要全局安装json-server
    npm install -g json-server

2. 该目录下新建两个json文件，db.json和routes.json
    db.json是用来存取数据的
    routes.json是用来匹配请求规则的

3. 启动mock服务器
     json-server mock/db.json --routes mock/routes.json --port 9090
     或者 npm run jsonServer （该命令在package.json中指定）

4. 在webpack-dev-server中指定proxy选项， 以方便devServer请求json-server的数据
    proxy: {
                "/api/*": {
                    target: "http://localhost:9090",
                    secure: false
                }
            }
5. 开始调用api
    浏览器地址栏输入 localhost:8080/api/test
    此请求等价于     localhost:9090/test
    此请求将获取db.json中的test字段数据
