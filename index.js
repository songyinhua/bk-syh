const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');//配置视图模板
const logger = require('koa-logger');//日志模块
const router = require('./routers/router');//我们所有的路由
const {join} = require('path');

//app是koa的实例
const app = new Koa;


//日志模块是启动服务的时候回打印出，我们访问路由的时候所有的消息，有路径，状态码等
app.use(logger());

//配置静态资源目录
app.use(static(join(__dirname,'public')));

//配置视图模板
app.use(views(join(__dirname,"views")),{
    extension:'pug'
})


//绑定控制的路由对象
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,() => {
    console.log('项目启动成功监听在3000端口');
    
})

