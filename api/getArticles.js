const bodyParser = require('body-parser');
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let ArticleContent = [
   {
        id:1,
        essaysTitle: "这是一篇测试内容",
        detail: "长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:2,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:3,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:4,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:5,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:6,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:7,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:8,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:9,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:10,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:11,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        },
        { 
        id:12,
        essaysTitle: "这是一篇测试内容",
        detail: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        remark: "无",
        author: "陈凯",
        time: "2020-05-10 10:00:00"
        }
];

app.get('/api/getArticles', (req, res) => {
    let id = req.query.id;

    if (typeof id === 'undefined' || id === null) {
    // 当 id 没有传值过来时，返回 ArticleContent 所有数据
    res.send({
        message: 'get 接口请求成功',
        code: 200,
        data: ArticleContent
    });
    } else {
    let arr = ArticleContent.filter(item => item.id == id);
    res.send({
        message: 'get 接口请求成功',
        code: 200,
        data: arr
    });
}
});

module.exports = app;

if (process.env.VERCEL) {
    module.exports.handler = serverless(app);
}

//    const port = process.env.PORT || 3000;

//    app.listen(port, () => {
//      console.log(`Server is running on port ${port}`);
//    });