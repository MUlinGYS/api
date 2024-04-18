//引入包
const express = require('express');

const bodyParser = require('body-parser');

//实例化服务器
const app = express();

//定义端口
const port = 3000;

//解析post请求
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//模拟数据库数据
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
]

app.get('/', (req, res) => {
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

app.post('/', (req, res) => {
    let data = req.body;
    console.log(data,'data');
    ArticleContent.push(data);
    res.send({
        message: 'post接口请求成功',
        code: 200,
        data: ArticleContent
    });
});

app.listen(port, () => {
    console.log(`服务器启动成功，端口为：${port}`);
});