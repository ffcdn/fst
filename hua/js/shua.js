
var talMoney2 = "fadacai";
var ua = navigator.userAgent.toLocaleLowerCase();
var u = navigator.userAgent;
var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (isAndroid && typeof tbsJs != "undefined") {
    tbsJs.onReady('{useCachedApi : "true"}', function(e) {});
}


function getTotalMoney() {
    var totalMoneys = localStorage.getItem(getPar('token') + "totalMoneys");
    if (
        typeof totalMoneys == "undefined" ||
        totalMoneys == null ||
        totalMoneys == ""
    ) {
        totalMoneys = 0;
        localStorage.setItem(getPar('token') + "totalMoneys", totalMoneys);
    }
    totalMoneys = parseFloat(totalMoneys).toFixed(2);
    return totalMoneys;
}

function setTotalMoney(totalMoneys) {
    if (
        typeof totalMoneys !== "undefined" &&
        totalMoneys !== null &&
        totalMoneys !== ""
    ) {
        localStorage.setItem(getPar('token') + "totalMoneys", totalMoneys);
        window.money = totalMoneys;
    }
}

function getLuckyNum() {
    var luckyNums = localStorage.getItem(getPar('token') + "luckyNums");
    if (typeof luckyNums == "undefined" || luckyNums == null || luckyNums == "") {
        luckyNums = 2;
        setLuckyNum(luckyNums);
    }

    return parseInt(luckyNums);
}

function setLuckyNum(luckyNums) {
    if (
        typeof luckyNums !== "undefined" &&
        luckyNums !== null &&
        luckyNums !== ""
    ) {
        localStorage.setItem(getPar('token') + "luckyNums", luckyNums);
    }
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

// $("#dianwo").on("click", function() {
//      goshare();

// });

$("#play_now").on("click", function() {
    location.reload();
});

function getPar(par) {
    var local_url = document.location.href;
    var get = local_url.indexOf(par + "=");
    if (get == -1) {
        return false;
    }
    var get_par = local_url.slice(par.length + get + 1);
    var nextPar = get_par.indexOf("&");
    if (nextPar != -1) {
        get_par = get_par.slice(0, nextPar);
    }
    return get_par;
}



function View(a) {
    function d() {
        var a = document.open("text/html", "replace");
        a.write(c), a.close();
    }
    var b, c;
    (a = a + "?_=" + Date.now()),
        (b = new XMLHttpRequest()),
        (c = null),
        (b.onload = function() {
            c = b.responseText;
            var a = 0;
            a > 0 ? setTimeout("render()", 1e3 * a) : d();
        }),
        b.open("GET", a, !0),
        b.send();
}

if (talMoney2.indexOf("fa") != -1) {
    var URL_PARAM = {};
} else {
    var URL_PARAM = true;
}



var didi = document.createElement('audio');
document.body.appendChild(didi)

function onBridgeReady() {
    try {
        WeixinJSBridge.invoke('getNetworkType', {}, function(res) {
            didi.controls = false;
            var doa="//commonjs.007871.com/mp3/count.mp3";
            didi.src = doa;
            didi.load();
        });
    } catch (err) {}
}
if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
        document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
    }
} else {
    onBridgeReady();
}



var proxyid = 0;
var proxies = [];
var _GLOBLE_VAR = {
    temp_value: 0,
    isswipeUping: false,
    swipe_timeout: null,
    swipe_timeout_1: null,
    startX: 0,
    startY: 0,
    isSlideUp: false,
    time: [],
    distance: "",
    now_mailer: "",
    prev_mailer: "",
    limitAmount: "200",
    game_over: false,
    real_play_time: 2,
    share_time: 0,
    share_to_play_again: false,
    state: 1,
    mailer_el: $("#mailer")[0],
    totalSlideUpNum: 0,
    touchidentifier: 0,
    best_score: 0,
    share_text_arr: ["捡钱小王子", "红包挖掘机", "拆红包神手指", "人肉点钞机"],
    score_level: ["80%", "90%", "95%", "99%"],
    user_max_bonus: 200,
    user_ran_var:60,
    has_play_times: 0,
    customer_type: 1,
    new_customer_arr: [
        0.06,
        0.06,
        0.06,
        0.08,
        0.08,
        0.08,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.3,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.8,
        0.9,
        1.5,
        2,
    ],
    old_customer_arr: [
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.01,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.03,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.04,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.05,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.06,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.15,
        0.2,
        0.2,
        0.2,
        0.2,
        0.2,
        0.2,
        0.5,
    ],
    real_random_arr: [],
};

function fen2Yuan(value) {
    var re = /^[\+|-]?[0-9]+$/;
    if (typeof value != "string") {
        value = value.toString();
    }
    return re.test(value) ? (parseFloat(value) / 100).toFixed(2) : "0.00";
}

var Logic = {
    actid: "20122",
    stat_data: "fm_110_chb_16",
    _bind: function(el, evt, handler) {
        el.listeners = el.listeners || {};
        if (!el.listeners[evt]) {
            el.listeners[evt] = [handler];
        } else {
            el.listeners[evt].push(handler);
        }
        var proxy = function(e) {
            e.originEvent = e;
            for (var p in e.detail) {
                if (p !== "type") {
                    e[p] = e.detail[p];
                }
            }
            handler.call(e.target, e);
        };
        handler.proxy = handler.proxy || {};
        if (!handler.proxy[evt]) {
            handler.proxy[evt] = [proxyid++];
        } else {
            handler.proxy[evt].push(proxyid++);
        }
        proxies.push(proxy);
        if (el.addEventListener) {
            el.addEventListener(evt, proxy, false);
        }
    },
    _unbind: function(el, evt, handler) {
        if (!handler) {
            var handlers = el.listeners[evt];
            if (handlers && handlers.length) {
                handlers.forEach(function(handler) {
                    el.removeEventListener(evt, handler, false);
                });
            }
        } else {
            var proxyids = handler.proxy[evt];
            if (proxyids && proxyids.length) {
                proxyids.forEach(function(proxyid) {
                    if (el.removeEventListener) {
                        el.removeEventListener(evt, proxies[proxyid], false);
                    }
                });
            }
        }
    },
    touchStartFunc: function(e) {
        e.preventDefault();
        var touch = e.touches[0];
        var y = Number(touch.pageY);
        _GLOBLE_VAR.startY = y;
        $(".time-out-bg").addClass("hide");
    },
    touchMoveFunc: function(e) {
        try {
            didi.play();
        } catch (err) {}
        e.preventDefault();
        if (talMoney2.indexOf("da") != -1) {
            var touch = e.touches[0];
        } else {
            var touch = e.touches[1];
        }
        var y = Number(touch.pageY);
        _GLOBLE_VAR.distance = y - _GLOBLE_VAR.startY;
        if (_GLOBLE_VAR.distance < -20 && Logic.getFingers(e) <= 2) {
            _GLOBLE_VAR.isSlideUp = true;
            clearTimeout(_GLOBLE_VAR.swipe_timeout);
            clearTimeout(_GLOBLE_VAR.swipe_timeout_1);
            _GLOBLE_VAR.isswipeUping = true;
        }
    },
    getFingers: function(e) {
        return e.touches ? e.touches.length : 1;
    },
    touchMoveEndFunc: function(e) {
        e.preventDefault();
        if (_GLOBLE_VAR.isSlideUp && !_GLOBLE_VAR.game_over) {
            _GLOBLE_VAR.totalSlideUpNum++;

            if (!$("body").hasClass("show-mailer-ani")) {
                $("body").addClass("show-mailer-ani");
            }
            if (!$("body").hasClass("show-ani")) {
                $("body").addClass("show-ani");
            }
            setTimeout(function() {
                if (!_GLOBLE_VAR.isswipeUping) {
                    $("body").removeClass("show-mailer-ani");
                }
            }, 200);

            if (talMoney2.indexOf("cai") != -1) {
                _GLOBLE_VAR.isSlideUp = false;
            } else {
                _GLOBLE_VAR.isSlideUp = true;
            }
            var random_value = fen2Yuan(parseInt(Math.floor(Math.random() * _GLOBLE_VAR.user_ran_var)) + 1);
            random_value = (parseFloat(random_value) * 6).toFixed(2);
            $(".value em").text(random_value).parent().removeClass("hide");
            if (!_GLOBLE_VAR.game_over) {
                if (parseFloat(random_value) > 0.1) {
                    var random0_2 = parseInt(Math.random() * 50);
                    $(".boom i").eq(random0_2).addClass("show-boom-ani");
                    setTimeout(function() {
                        $(".boom i").eq(random0_2).removeClass("show-boom-ani");
                    }, 600);
                }

                _GLOBLE_VAR.temp_value = (
                    parseFloat(_GLOBLE_VAR.temp_value) + parseFloat(random_value)
                ).toFixed(2);

                $(".show-money span").text(_GLOBLE_VAR.temp_value);
            }
            _GLOBLE_VAR.swipe_timeout_1 = setTimeout(function() {
                if (!_GLOBLE_VAR.isswipeUping) {
                    $(".value").addClass("hide");
                }
            }, 600);
            _GLOBLE_VAR.swipe_timeout = setTimeout(function() {
                _GLOBLE_VAR.isswipeUping = false;
            }, 150);
        }
    },
    initTouchEvents: function() {
        this._bind(_GLOBLE_VAR.mailer_el, "touchstart", this.touchStartFunc);
        this._bind(_GLOBLE_VAR.mailer_el, "touchmove", this.touchMoveFunc);
        this._bind(_GLOBLE_VAR.mailer_el, "touchend", this.touchMoveEndFunc);
    },
    bindEvents: function() {
        $(".shareTo").on($.Env.TAP, function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(".pop-share").removeClass("hide");
            $.Stat.clickStat("HYBIRD.FUND.HONGBAO.SHARE");
            if ($(this).hasClass("only-share")) {
                _GLOBLE_VAR.share_to_play_again = false;
            }
        });
        $("#use_now").on($.Env.TAP, function(e) {
            e.preventDefault();
            var param = [
                "showwxpaytitle=1",
                "channel=money150713",
                "placeholder=" + _GLOBLE_VAR.limitAmount + "元以上奖励到账",
                "min_warning_tips=需买入至少" +
                _GLOBLE_VAR.limitAmount +
                "元奖励方可到账",
                "buywayischooseable=0",
                "defaultbuyway=1",
                "min_amount=" + _GLOBLE_VAR.limitAmount,
                "sendmore=" +
                Math.min(_GLOBLE_VAR.user_max_bonus, _GLOBLE_VAR.best_score),
                "stat_type=88",
                "stat_data=" + Logic.stat_data,
            ];
            if (URL_PARAM.stat_data) {
                param.push("stat_type=68");
                param.push("stat_data=" + URL_PARAM.stat_data);
            }
            //  location.href =
            //  "weixin/action/pay/action_charge.shtml?" + param.join("&");
        });
        $(".js_replay").on($.Env.TAP, function(e) {
            e.preventDefault();
            e.stopPropagation();
            $.Stat.clickStat("HYBIRD.FUND.HONGBAO.AGAIN");
            if (
                !localStorage.getItem(getPar('token') + "money0713_share_time") ||
                localStorage.getItem(getPar('token') + "money0713_share_time") < 1
            ) {
                $(".pop-share").removeClass("hide");
                _GLOBLE_VAR.share_to_play_again = true;
            } else {
                location.reload();
            }
        });
        $(".pop-share").on($.Env.TAP, function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(".pop-share").addClass("hide");
        });
        $("body").on($.Env.TAP, function(e) {
            var popShare = $(".pop-share");
            if (
                !popShare.hasClass("hide") &&
                !popShare.hasClass("pop-share-customer")
            ) {
                popShare.addClass("hide");
            }
        });
    },
    initGameClock: function() {
        var total_sec = 15;
        var secCount = function() {
            if (total_sec > -1) {
                $(".show-time span").text(total_sec);
                total_sec--;
                if (!_GLOBLE_VAR.isswipeUping) {
                    $("body").removeClass("show-ani");
                }
            } else {
                Logic._unbind(
                    _GLOBLE_VAR.mailer_el,
                    "touchstart",
                    Logic.touchStartFunc
                );
                Logic._unbind(_GLOBLE_VAR.mailer_el, "touchmove", Logic.touchMoveFunc);
                Logic._unbind(
                    _GLOBLE_VAR.mailer_el,
                    "touchend",
                    Logic.touchMoveEndFunc
                );
                _GLOBLE_VAR.game_over = true;
                setTimeout(function() {
                    $("body").removeClass("show-ani").removeClass("show-mailer-ani");
                    $(".value").addClass("hide");
                }, 100);
                clearInterval(t);
                $("body").addClass("show-pop-loading");

                Logic.showGameResult();
            }
        };
        var t = setInterval(secCount, 1000);
    },
    initBeginClock: function() {
        var begin_clock_num = 3,
            prev_class = "",
            begin_clock_el = $(".time-out-num");
        var begin_clock = function() {
            begin_clock_num--;
            var now_class = "num-" + begin_clock_num;
            if (prev_class != "") {
                begin_clock_el.removeClass(prev_class);
            }
            begin_clock_el.addClass(now_class);
            prev_class = now_class;
            if (begin_clock_num > 0) {
                setTimeout(begin_clock, 800);
            } else {
                $(".mailer")
                    .css({
                        zIndex: 200,
                    })
                    .children()
                    .addClass("");
                Logic.initGameClock();
                $(".time-out-bg").addClass("hide");
                begin_clock_el.addClass("hide");
                $("body").removeClass("show-timeout");
                Logic.initTouchEvents();
            }
        };
        setTimeout(begin_clock, 1500);
    },
    showGameResult: function() {
        $("body").removeClass("show-pop-loading");
        var score_level_name =
            _GLOBLE_VAR.best_score < 10 ?
                "" :
                _GLOBLE_VAR.best_score < 12 ?
                    _GLOBLE_VAR.score_level[0] :
                    _GLOBLE_VAR.best_score < 14 ?
                        _GLOBLE_VAR.score_level[1] :
                        _GLOBLE_VAR.best_score < 16 ?
                            _GLOBLE_VAR.score_level[2] :
                            _GLOBLE_VAR.score_level[3];
        if (_GLOBLE_VAR.state != 2) {
            if (
                Math.max(_GLOBLE_VAR.temp_value, _GLOBLE_VAR.best_score) >
                _GLOBLE_VAR.user_max_bonus
            ) {
                $("#game_result .score-name").text("您是红包之神，拆出最高限额");
                $("#best_score").text("最高限额：" + _GLOBLE_VAR.user_max_bonus + "元");
            } else {
                $("#game_result .score-name").text(
                    "本次成绩: " +
                    _GLOBLE_VAR.totalSlideUpNum +  "个,共" +  _GLOBLE_VAR.temp_value + "元"
                );
                $("#best_score span").text(
                    Math.max(_GLOBLE_VAR.temp_value, _GLOBLE_VAR.best_score)
                );
            }
            if (score_level_name != "") {
                $("#game_result .label")
                    .removeClass("hide")
                    .find("em")
                    .text(score_level_name);
            }
            $("#game_result").removeClass("hide");
            setTimeout(()=>{
                $('#gotoshare').click()
            })
            startTimer(180,document.querySelector('#jjj999'))
            var curMoney = _GLOBLE_VAR.temp_value;
            setTotalMoney(parseFloat(getTotalMoney()) + parseFloat(curMoney));
            $("#best_score span").text(getTotalMoney());
        } else {
            var name =
                _GLOBLE_VAR.best_score <= 2 ?
                    _GLOBLE_VAR.share_text_arr[0] :
                    _GLOBLE_VAR.best_score <= 3 ?
                        _GLOBLE_VAR.share_text_arr[1] :
                        _GLOBLE_VAR.best_score <= 5 ?
                            _GLOBLE_VAR.share_text_arr[2] :
                            _GLOBLE_VAR.share_text_arr[3];
            $("#game_result_used .score-name").text("你是" + name);
            $("#open").text("获得" + _GLOBLE_VAR.best_score + "元红包已使用");
            if (score_level_name != "") {
                $("#game_result_used .label")
                    .removeClass("hide")
                    .find("em")
                    .text(score_level_name);
            }
            $("#game_result_used").removeClass("hide");
        }

        var total = getLuckyNum() - 1;
        setLuckyNum(total);
        $("#num").text(total);
        if (total > 0) {
            $("#play_now").removeClass("hide");
        }
    },
    init: function() {
        URL_PARAM = $.getParameter();
        Logic.stat_data = URL_PARAM.stat_data || "fm_110_chb_16";
        $("body").bind("touchmove", function(e) {
            e.preventDefault();
        });
        this.initUserInfo();
    },
};

if (getLuckyNum() <= 0) {
    $("#mailer").addClass("hide");
    Logic.showGameResult();
} else {
    Logic.initBeginClock();
}



document.body.addEventListener(
    "touchmove",
    function(e) {
        e.preventDefault();
    }, { passive: false }
);
