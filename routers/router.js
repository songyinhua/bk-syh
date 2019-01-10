const Router = require('koa-router');

//生成路由实例
const router = new Router;

//访问跟路由
router.get('/',async (ctx,next) =>{
    await ctx.render('index.pug',{
        title: '假装这是一个正经的黄播'
    })
})

//设置user路由，主要用来处理用户登录，注册
router.get(/^\/user\/(?=reg|login)/,async (ctx,next) =>{
    //show为true为注册，show false显示登录
    const show = /reg$/.test(ctx.path);
    
    await ctx.render('register.pug',{show})
    
})








module.exports = router;