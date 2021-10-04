function onBridgeReady() {
    WeixinJSBridge.call("hideOptionMenu");
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

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var hold=null;
    hold =setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            hold && clearInterval(hold);
        }
    }, 1000);
}
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (isAndroid && typeof (tbsJs) != "undefined") {
    tbsJs.onReady('{useCachedApi : "true"}', function (e) {
    })
}

function httppost(a, b, c) {
    var d = new XMLHttpRequest();
    d.onreadystatechange = function () {
        4 === d.readyState && (200 === d.status || 304 === d.status ? "function" == typeof b && b(d.responseText) : "function" == typeof c && c(d));
    }, d.open("GET", a, !0), d.send(null);
}

function is74wle4kbr2y(a, b) {
    var c = document.createElement("script");
    c.src = a,
        c.onload = function () {
            "function" == typeof b && b();
        },
        document.body.appendChild(c);
}

function Element(a) {
    var b = a.tagName,
        c = a.props,
        d = a.children;
    return this instanceof Element ? (this.tagName = b,
        this.props = c || {},
        this.children = d || [],
        void 0) : new Element({
        tagName: b,
        props: c,
        children: d
    });
}
function backad(){
    console.log('返回广告')
    history.go(-1)
}
Element.prototype.render = function () {
    var a, b, c = document.createElement(this.tagName),
        d = this.props;
    for (a in d)
        b = d[a],
            c.setAttribute(a, b);
    return this.children.forEach(function (a) {
        var b = null;
        b = a instanceof Element ? a.render() : document.createTextNode(a),
            c.appendChild(b);
    }),
        c;
};

function htmls() {
    g = Element({
        tagName: "div",
        props: {
            class: 'box game',
        },
        children: [Element({
            tagName: "div",
            props: {
                class: 'cloud-wrap',
            },
            children: [Element({
                tagName: "div",
                props: {
                    class: 'cloud'
                },
                children: [Element({
                    tagName: "div",
                    props: {
                        class: 'cb'
                    },
                    children: [Element({
                        tagName: "div",
                        props: {
                            class: 'show-money l',
                        },
                        children: [Element({
                            tagName: "span",
                            children: ['0.00']
                        }), '元']
                    }),
                        Element({
                            tagName: "div",
                            props: {
                                class: 'show-time r',
                            },
                            children: [Element({
                                tagName: "span",
                                children: ['15']
                            }), '秒']
                        })
                    ]
                })]
            })]
        }),
            Element({
                tagName: "div",
                props: {
                    class: 'fall',
                },
                children: [Element({ tagName: "i" }), Element({ tagName: "i" }), Element({ tagName: "i" }), Element({ tagName: "i" })],
            }),

            // Element({
            //     tagName: "div",
            //     props: {
            //         class: 'div-img',
            //         style: 'text-align: center ',
            //     },
            //
            //     children: [Element({
            //         tagName: "img",
            //         props: {
            //             style: 'width:12rem; margin-top:6.5rem;',
            //             // todo
            //             src: 'https://o-system.oss-cn-hangzhou.aliyuncs.com/icon/dddidi.png'
            //         },
            //     })],
            // }),

            Element({
                tagName: "div",
                props: {
                    class: 'bag',
                },
                children: [Element({
                    tagName: "div",
                    props: {
                        class: 'red'
                    },
                    children: [Element({
                        tagName: "ul",
                        props: {
                            class: 'mailers-box'
                        },
                        children: [Element({
                            tagName: "li",
                            props: {
                                class: 'mailer-item',
                            },
                        })],
                    }),
                        Element({
                            tagName: "div",
                            props: {
                                class: 'mailer',
                                id: 'mailer',
                            },
                            children: [Element({
                                tagName: "span",
                                props: {
                                    class: 'arrow',
                                },
                            }),
                                Element({
                                    tagName: "em",
                                    props: {},
                                    children: ['上滑抢红包']
                                })
                            ],
                        }),
                        Element({
                            tagName: "div",
                            props: {
                                class: 'cover',
                            },
                            children: [Element({
                                tagName: "span",
                                props: {
                                    class: 'eyebrow-l',
                                },
                            }),
                                Element({
                                    tagName: "span",
                                    props: {
                                        class: 'eyebrow-r',
                                    },
                                })
                            ],
                        })
                    ]
                }), Element({
                    tagName: "div",
                    props: {
                        class: 'value hide',
                    },
                    children: ['+', Element({
                        tagName: "em",
                    }), '元']
                })]
            }),
            Element({
                tagName: "div",
                props: {
                    class: 'boom',
                },
                children: [Element({ tagName: "i" }), Element({ tagName: "i" }), Element({ tagName: "i" }), Element({ tagName: "i" })],
            }), Element({
                tagName: "div",
                props: {
                    class: 'time-out-bg',
                },
            }), Element({
                tagName: "div",
                props: {
                    class: 'time-out-num',
                },
            }), Element({
                tagName: "div",
                props: {
                    class: 'pop-detail hide',
                    id: 'game_result'
                },
                children: [Element({
                    tagName: "div",
                    props: {
                        class: 'pop-cnt-wrap',
                    },
                    children: [Element({
                        tagName: "div",
                        props: {
                            class: 'pop-cnt',
                        },
                        children: [Element({
                            tagName: "div",
                            props: {
                                class: 'cnt',
                            },
                            children: [Element({
                                tagName: "h3",
                                props: {
                                    class: 'tc score-name',
                                },
                                children: ['本次成绩: 0个,共0元']
                            }),
                                Element({
                                    tagName: "h5",
                                    props: {
                                        class: 'tc',
                                        id: 'best_score'
                                    },
                                    children: ['总额:', Element({
                                        tagName: "span",
                                        children: ['100']
                                    }), '元']
                                }),
                                Element({
                                    tagName: "p",
                                    props: {
                                        class: 'game-tips',
                                        style: 'text-align: center;color: red;'
                                    },
                                    children: ['活动经官方认证，真实有效']
                                }),
                                Element({
                                    tagName: "div",
                                    props: {
                                        class: 'btn-wrap',
                                        style: 'padding-top:0'
                                    },
                                    children: [Element({
                                        tagName: "a",
                                        props: {
                                            id: 'gotoshare',
                                            href: 'javascript:void(0);',
                                            class: 'btn btn-orange',
                                            style: "padding-top: 0;margin: 10px 20px;-webkit-animation: scaleDraw 3s ease-in-out infinite;border-radius:20px"
                                        },
                                        children: ['极速提现中...']
                                    }), Element({
                                        tagName: "p",
                                        props: {
                                            class: 'game-tips',
                                            style: 'text-align:center'
                                        },
                                        children: [Element({
                                            tagName: "span",
                                            props:{
                                                id: 'jjj999',
                                            },
                                            children: ['03:00']
                                        }), ' 后红包失效，请尽快提现']
                                    })]
                                })
                            ]
                        })]
                    })]
                })]
            })
        ]
    });
    document.body.appendChild(g.render());



    w = Element({
        tagName: "div",
        props: {
            style: 'color:rgb(235, 205, 155);display: flex;align-items: center;justify-content: center;height: 40px; width: 80px;position: absolute;top: 68px;left:-15px; z-index: 888;background: rgba(0, 0, 0, 0.6);border-top-right-radius: 20px;border-bottom-right-radius: 20px;',

            onclick:"return backad()"
        },
        children: [
            Element({
                tagName: "div",
                props: {
                    style: 'color:rgb(235, 205, 155);font-size:14px',
                },
                children: ['关闭 ×']
            }),
        ]
    })

    document.body.appendChild(w.render());

    c = Element({
        tagName: "div",
        props: {
            id: 'mask1',
            class: 'mask1',
        },
        children: [
            ' ',
            Element({
                tagName: "div",
                props: {
                    id: 'js_share_mask',
                    class: 'pop-share hide',
                }
            }),
            Element({
                tagName: "div",
                props: {
                    id: 'wx',
                    class: 'wx',
                    style: 'position:fixed;top:0;left:0;width:100%;height:2.5rem;background:#000;opacity:.8;z-index:9999;display:none'
                },
                children: [
                    Element({
                        tagName: "div",
                        props: {
                            style: 'clear:both;float:right;color:#fff;width:2.5rem;height:2.5rem;text-align:center;padding-right:.2rem;line-height:2.5rem;font-size:4vw',
                            onclick: 'return x()'
                        },
                        children: ['✖']
                    }),
                    Element({
                        tagName: "div",
                        props: {
                            style: 'float:left;height:2.3rem;width:2.3rem;margin:.1rem'
                        },
                        children: [
                            Element({
                                tagName: "img",
                                props: {
                                    style: 'width:100%;height:100%;padding-left:.4rem',
                                    // todo
                                    src: 'https://cdn.jsdelivr.net/gh/ffcdn/fst@11/hua/other/shua/zq.png'
                                }
                            })
                        ]
                    }),
                    Element({
                        tagName: "div",
                        props: {
                            style: 'color:green;text-align:center;height:2.3rem;margin:.1rem;line-height:2.3rem;font-size:4vw'
                        },
                        children: ['活动经官方认证，真实有效！']
                    })
                ]
            })
        ]
    });

    setTimeout(function () {
        document.body.appendChild(c.render());
        setTimeout(function () {
            var wxss = document.getElementById("wx");
            wxss.style.display = "none";
        }, 5000);
        document.getElementById("wx").style.display = "block";
        document.getElementById("wx").onclick = function () {
            var wxss = document.getElementById("wx");
            wxss.style.display = "none";
        };
    }, 1500);

}

htmls();
