import { ApiConfig } from '../entity/ApiConfig'
import { MsgController } from './MsgController'
import { AccessToken } from '../AccessToken'
import { TemplateData } from '../entity/template/TemplateData';
import { MenuManager } from './MenuManager';
import { AccessTokenApi } from '../AccessTokenApi';
import { ApiConfigKit } from '../ApiConfigKit';
import { WeChat } from '../WeChat';
import { TemplateApi } from '../api/TemplateApi';
import { MenuApi } from '../api/MenuApi';
import fs from 'fs';
import express from 'express';
import { AddressInfo } from 'net';
import { CustomServiceApi } from '../api/CustomServiceApi';
import { MenuMsg } from '../entity/msg/out/MenuMsg';
import { Article } from '../entity/msg/out/Article';
const app = express();

// 被动消息回复控制器
const msgAdapter = new MsgController();

app.use(express.static('views'));

app.get('/', (req: any, res: any) => {
    res.send("TypeScript + Node.js + Express 极速开发微信公众号 By Javen <br/><br/> 交流群：114196246");
});

/**
 * 验证开发者入口 
 * 支持多公众号
 * http://域名/msg 或者 http://域名/msg?appId = xxxx
 */
app.get('/msg', (req: any, res: any) => {
    let appId: string = req.query.appId;
    console.log('get....appId', appId);

    if (appId) {
        ApiConfigKit.setCurrentAppId(appId);
    }
    WeChat.checkSignature(req, res);
});

// 接收微信消息入口
app.post('/msg', function (req: any, res: any) {
    console.log('post...', req.query);

    let appId: string = req.query.appId;
    if (appId) {
        ApiConfigKit.setCurrentAppId(appId);
    }
    // 接收消息并响应对应的回复
    WeChat.handleMsg(req, res, msgAdapter)
});

// 发送模板消息
app.get('/sendTemplate', (req: any, res: any) => {
    let templateJson = new TemplateData().New().
        setToUser("ofkJSuGtXgB8n23e-y0kqDjJLXxk").
        setTemplateId("BzC8RvHu1ICOQfO4N7kp6EWz9VAbISJjV2fO5t7MiXE").
        setTemplateUrl("https://gitee.com/javen205/IJPay").
        add("first", "恭喜你购买成功！", "#743A3A").
        add("keyword1", "IJPay 让支付触手可及", "#0000FF").
        add("keyword1", "聚合支付公开课", "#0000FF").
        add("keyword2", "免费", "#0000FF").
        add("keyword3", "Javen205", "#0000FF").
        add("keyword4", "2019-03-12 13:14", "#0000FF").
        add("remark", "请点击详情直接看课程直播，祝生活愉快", "#008000").
        build();
    console.log("templateJson", templateJson);
    TemplateApi.send(res, templateJson);
});

// 读取配置文件来创建自定义菜单
app.get('/creatMenu', (req: any, res: any) => {
    fs.readFile("./config/menu.json", function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        let fileData = data.toString();
        console.log(fileData);
        // res.send(fileData)
        MenuApi.create(res, fileData);
    });
});

// 动态创建自定义菜单
app.get('/dynamicCreatMenu', (req: any, res: any) => {
    MenuApi.create(res, JSON.stringify(MenuManager.getMenu()));
});

// 获取access_token
app.get('/getAccessToken', (req: any, res: any) => {
    AccessTokenApi.getAccessToken().then(data => {
        let accessToken = <AccessToken>data;
        res.send(accessToken);
    });
});


app.get('/setCustomMsg', (req: any, res: any) => {
    let type: string = req.query.type;
    console.log('type', type);

    let openId = "ofkJSuGtXgB8n23e-y0kqDjJLXxk";
    switch (parseInt(type)) {
        case 0:
            CustomServiceApi.sendTyping(res, openId, "Typing");
            break;
        case 1:
            CustomServiceApi.sendText(res, openId, "客服消息---IJPay 让支付触手可及", "javen@gh_8746b7fa293e");
            break;
        case 2:
            // {errcode: 40200,errmsg: "invalid account type hint: [WDtfla05023942]"}
            let list: MenuMsg[] = [];
            list.push(new MenuMsg("101", "非常满意"));
            list.push(new MenuMsg("102", "满意"));
            // list.push(new MenuMsg("103", "有待提高"));
            CustomServiceApi.sendMenu(res, openId, "您对本次服务是否满意呢?", list, "欢迎再次光临");
            break;
        case 3:
            let articles: Article[] = [];
            articles.push(new Article("聚合支付了解一下", "IJPay 让支付触手可及", "https://gitee.com/javen205/IJPay",
                "https://gitee.com/javen205/IJPay/raw/master/assets/img/IJPay-t.png"));
            CustomServiceApi.sendNews(res, openId, articles);
            break;
        case 4:
            CustomServiceApi.sendImage(res, openId, "wqX8pTWl1KIr-8jZHYt4qK3USIzQNztrhmEQDx1BHaJtZrTdCN5KypVeuQ2z5skY");
            break;
        case 5:
            CustomServiceApi.sendVoice(res, openId, "a_6HXIgnXkOXXFYY-S6clAfGEXyArfEens4_MBkFqqwnQ9-Qi9Ii7VRL67rmtsW6");
            break;
        case 6:
            // 需要通过接口上传视频
            CustomServiceApi.sendVideo(res, openId, "uTSuRGeUYpWlpyLyXdwYXqndfgbh4aRKOGwg4-wsgADANwhLYbM--faOAVurxp6G",
                "客服消息发送视频", "一个有趣的视频");
            break;
        case 7:
            CustomServiceApi.addKfAccount(res, "javen@gh_8746b7fa293e", "Javen", "123456");
            CustomServiceApi.addKfAccount(res, "javen205@gh_8746b7fa293e", "Javen205", "123456");
            break;
        case 8:
            CustomServiceApi.getKfList(res);
            break;
        case 9:
            CustomServiceApi.delKfAccount(res, "javen@gh_8746b7fa293e");
            break;
        case 10:
            CustomServiceApi.updateKfAccount(res, "javen205@gh_8746b7fa293e", "Javen", "123456");
            break;
        default:
            break;
    }
});

const server = app.listen(8888, "localhost", () => {
    let addressInfo: AddressInfo = <AddressInfo>server.address();
    if (addressInfo) {
        let host = addressInfo.address;
        let port = addressInfo.port;
        // 亦可以读取配置文件
        let apiConfig = new ApiConfig("Javen", "wx614c453e0d1dcd12", "19a02e4927d346484fc70327970457f9", false, "xxxx");
        // 支持多公众号
        ApiConfigKit.putApiConfig(apiConfig);
        ApiConfigKit.setCurrentAppId();
        // 开启开发模式,方便调试
        ApiConfigKit.devMode = true;
        if (ApiConfigKit.devMode) {
            console.log("服务器已启动, 地址是：http://%s:%s", host, port);
        }
    }
});