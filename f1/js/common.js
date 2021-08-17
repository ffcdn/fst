let unfamiliarStr = ['웃', '유', '☿', 'ღ', '♁', '♆', 'Б', 'Ф', 'Ц', 'Ч', 'И', 'ЙК', '々', '〆', 'の', 'ぁ', '〥', '〩', 'を', 'ず', 'あ', 'じ', '☊', '☋']
let strLength = unfamiliarStr.length;
let subNumber = Math.floor(Math.random() * strLength);
document.title = unfamiliarStr[subNumber];

// 分享用 appid
window.itemsAppId = [
    'wx268fcfe924dcb171',// 知乎
    'wxe6fc600d8a7e230c',// 虎扑
    'wxe9199d568fe57fdd', // 简书
    'wx8377383b8121f9fb', // 搜狐
    'wx10ce490118943a33',// 凤凰网
    'wx4dd648e754458dfe',// 今日头条
    // 'wx827225356b689e24', // 京东商城
    // 'wx839691cce7c102bb', // 拼多多
    // 'wxce0a56c2bb620e25', // 唯品会
];

// 分享模式修改
window.manualShare = true;

if (typeof (window.shareTitleGroug) === "undefined") {
    // xd.jpg: http://res2.eqh5.com/FswVe8eqtb1K83nO9JvowDZ0IKdE
    // tz.jpg http://res.eqh5.com/FkZ8xqzhspUThSG7ZHQF8LFatpOP

window.shareTitleGroug = [
            {
            desc: `明天早上9点，\n全场限时免单领取\n\n_sjhz`,
            title: `_emoji给你送上立秋第一份奶茶\n\n_sjhz`,
            timeline_title:`_emoji我开的新店，\n所有用户全场免单！`,
            img: `https://yo8iuijp3nga.oss-cn-hangzhou.aliyuncs.com/icon/mxbc.jpg`,
        },
        {
            desc: `明天早上9点，\n全场限时免单领取\n\n_sjhz`,
            title: `_emoji秋天第一杯奶茶，安排！\n\n_sjhz`,
            timeline_title:`_emoji我开的新店，\n所有用户全场免单！`,
            img: `https://yo8iuijp3nga.oss-cn-hangzhou.aliyuncs.com/icon/mxbc.jpg`,
        },
        {
            desc: `明天早上9点，\n全场限时免单领取\n\n_sjhz`,
            title: `_emoji秋天的第一杯奶茶！\n\n_sjhz`,
            timeline_title:`_emoji我开的新店，\n所有用户全场免单！`,
            img: `https://yo8iuijp3nga.oss-cn-hangzhou.aliyuncs.com/icon/mxbc.jpg`,
        },
        {
            desc: `明天早上9点，\n全场限时免单领取\n\n_sjhz`,
            title: `_emoji秋天第一杯奶茶免単！\n\n_sjhz`,
            timeline_title:`_emoji我开的新店，\n所有用户全场免单！`,
            img: `https://yo8iuijp3nga.oss-cn-hangzhou.aliyuncs.com/icon/mxbc.jpg`,
        },
        {
            desc: `明天早上9点，\n全场限时免单领取\n\n_sjhz`,
            title: `_emoji秋天第一杯奶茶给你\n\n_sjhz`,
            timeline_title:`_emoji我开的新店，\n所有用户全场免单！`,
            img: `https://yo8iuijp3nga.oss-cn-hangzhou.aliyuncs.com/icon/mxbc.jpg`,
        },
        {
            desc: `明天早上9点，\n全场限时免单领取\n\n_sjhz`,
            title: `_emoji秋天第一杯冷饮奶茶\n\n_sjhz`,
            timeline_title:`_emoji我开的新店，\n所有用户全场免单！`,
            img: `https://yo8iuijp3nga.oss-cn-hangzhou.aliyuncs.com/icon/mxbc.jpg`,
        }
    ];
}

// 爱情句子
window.verse = [
    "花看半开，酒饮微醺。",
    "积石如玉，列松如翠。郎艳独绝，世无其二。",
    "你连指尖都泛出好看的颜色。",
    "此心安处是吾乡。",
    "凡心所向，素履所往，生如逆旅，一苇以航。",
    "山有木兮木有枝，心悦君兮君不知。",
    "沧海月明珠有泪，蓝田日暖玉生烟。",
    "可是你没告诉我，幸福是否也有期限。",
    "我们都老得太快却聪明的太迟。",
    "在这社会里，爱情是因为伤痛绝望而美丽，像罗蜜欧梁山泊。",
    "明明就是该玩的年纪，偏要扯上爱情，活该你心疼。",
    "带着心疼的泪光，要往美丽的地方。",
    "有多少人和我一样，发表签名是为了让她看见。",
    "诸法无我，一切众生都是随缘而起的幻象。",
    "我还在原地等你，你却已经忘记曾来过这里。",
    "不要输掉自己不要败给别人。",
    "花时间解释不如花时间去证明。",
    "说一百句对不起不如做一件对的起的事。",
    "命运在自己手中，你可以创造自己的命运，只要下定决心。",
    "没有失败，只有暂时停止成功!",
    "成功就是你被击落到失望的深渊之后反弹得有多高。",
    "人可以没有骨气，但不可以做懦夫。",
    "有本事率性的人，也要有本事坚强。",
    "面对美好的未来不如面对残酷的现在。",
    "我不知道什么叫年少轻狂，我只知道胜者为王。",
    "生活告诉我们不要总是想要放弃，那么再多的机会也会失去。",
    "把今天打碎，让出去作废，我才十几岁，不可以活着那么累。",
    "生是中国人，死是中国鬼。要我为日本，那是不可能。",
    "人这一生总有几个梦是要碎的。",
    "什么才是快乐的生活，就是现在不用担心待会!",
    "寂寞的人有两种，一种是什么话都听的明白，一种则是什么都听不明白。",
    "女生都想做一菲，男生都喜欢诺澜。我们学会了坚强，却比不上那脆弱的—跌。",
    "前面的路还很远，你可能会哭，但是一定要走下去，一定不能停。",
    "我并不是一个坚强的人，但我知道在该坚强的时候一定要坚强。",
    "让尘归尘，土归土，收拾收拾凌乱的心情，让我们重新启程。",
    "什么是坚持?就是—天，又一天，你告诉自己，再坚持一天!",
    "想—千次，不如去做一次。华丽的跌倒，胜过无谓的徘徊。",
    "未来可期 人生值得！",
    "希望以后的我们再相逢 都是站在最高处。",
    "世界美好与你环环相扣。",
    "长路浩浩荡荡 万事皆可期待。",
    "你今后的人生无可辜负，愿你往后的岁月无可回顾。",
    "减少依赖，降低期待；保持热爱，奔赴山海。",
    "愿你三冬暖，愿你春不寒；愿你天黑有灯，下雨有伞；愿你一路上，有良人相伴。",
    "宇宙山河浪漫，生活点滴温暖，都值得你前进。",
    "女孩的眼应藏下星辰大海和万丈光芒.",
    "山野千里，你是我藏在星星里的浪漫。",
    "希望这个夏天，能成为我和你的夏天。",
    "未曾谋面的也终将会相遇，慢慢来吧，慢慢约会吧。",
    "永远善良，永远来日方长。",
    "所有人都祝你快乐，我只愿你遍历山河，觉得人间值得。",
    "你只管善良，险恶都交给我。",
    "我们把黑夜中跳舞的心脏叫做月亮，你是云层里隐约可见的星光，是银河里掉下来的一块糖。",
    "不要因为小事闷闷不乐，一切都会过去的，不信你回头看看，不知不觉中已经度过了多少苦难。",
    "当迷恋结束时，真正的爱情就开始了。",
    "你是八千里云和月，是十万里星河。",
    "你眸海温涟 藏山高水远 我的人间",
    "白天是人，半夜是鬼。",
    "喜欢淋着下不完的雨，说着讲不完的故事，想着那些不再出现的人。",
    "无需凭借他人的光.",
    "社会是有等级的，很多事不公平。别抱怨，因为没有用。",
    "我们才十几岁，何必把一切都看得那么透。",
    "有一种镜头叫做诗歌。我们在路上，低吟浅唱。",
    "是福不是祸，是你我就不想躲开。",
    "月遇从云，花遇从风，今晚夜空很美我又想你。",
    "热爱可抵岁月漫长。",
    "我们各自努力，最高处见。",
    "运气不够的时候，试试勇气",
    "我见过大海也见过繁星，但是只有遇到你，才是我长久以来所有奔赴的意义。",
    "只想用我一如既往的风格，描述每天不一样的心情。",
    "就算这世界有太多的失望，希望你能试着接受，并且学着不为难自己。愿你一直单纯、勇敢，相信爱。",
    "月亮坠入不见底的河 星星垂眸惊动来舸。",
    "环游遍整个星系 找不到比你更亮的星星.",
    "大概，每个人都会遇到一个不能在一起的人，放手舍不得，坚持又太累，爱而不得时最煎熬。",
    "小朋友 收起小小烦恼 挂起月亮 睡个好觉",
    "如果在黑暗中感到不适 请到舞台中央来",
    "你不要因为一片云，就指着天空说没太阳。",
    "认真活成自己的太阳",
    "喜欢最狂的风和最静的大海。",
    "有些眼泪原来是挡不住的，就像你。",
    "我的口袋里藏着你从城堡里逃跑的星星。",
    "你是我猝不及防的心动，亦是我始料不及的惊鸿。",
    "愿你拥有强大的自愈能力",
    "好朋友就像是星星，你不一定总是能见到他们。但你知道，他们会一直在那里。",
    "白茶清欢无别事，我在等风也等你。",
    "夏天你是清风，冬天你是暖阳。我的世界只有春秋和你。",
    "海中月是天上月，眼前人是心上人。向来心是看客心，奈何人是剧中人。",
    "好的爱情，战得胜时间，抵得住流年，经得起离别，受得住想念。",
    "你是东半球，我是西半球，我们在—起，就是整个地球。",
    "我们在—起的日子，会是我今生最美丽的回忆。",
    "—辈子和你在—起，才叫将来，换了别人，那叫将就。",
    "你不来找我，我也没法说想你。",
    "你的名字写满在我心里，就让我永远爱你吧!",
    "我也不知道你哪里好，反正你就是我不爱别人的理由。",
    "你就是“欠我!”谁要你让我爱上你?所以你就用你一辈子的时间慢慢偿还吧!",
    "愿未来所有好时光都有你相伴，愿情话终有主，你我不再孤独。",
    "我的幸福，就是和你温暖的过—辈子。",
    "既然你迟早是我的人，那我为何不早点行使我的权利。",
    "累了吗，停在我怀里吧!",
    "我一向看人很准的，你这个人，—看就知道是我的人。",
    "最美好的事，是人潮拥挤，你自然而然牵紧我的手。",
    "厌恶所有晴天以外的天气，但是如果你来，风雨雷电我都陪你。",
    "希望以后你能比我早走一步，因为我舍不得把你一个人丢在世上。",
    "哥一直被模仿，但从未被超越。",
    "其实全世界最幸福的童话，不过是，与你—起度过柴米油盐的岁月。",
    "在认识你之后，我才发现自己可以这样情愿的付出。",
    "我把梦想卖了，换成了柴米油盐。",
    "别人笑我太疯癫，我笑他人眼光好。",
    "待我长发及腰，少年娶我可好?",
    "如果你缺爱，想看我能给你多少，没关系，我可以都给你。",
    "蓝天上，手指划过的痕迹，暖了阳光，暖了眼眸，却湿润了心。",
    "明月直入，无心可猜。",
    "大知闲闲，小知间间。",
    "应是天仙狂醉，乱把白云揉碎。",
    "生命在闪耀中现出绚烂，在平凡中现出真实",
    "人心中都有自己的早晨，时候到了人会自己醒来。",
    "心怀浪漫宇宙 也珍惜人间日常",
    "时光很匆忙 别错过落日与夕阳",
    "天气晴 宜收集快乐",
    "太阳起了我也起，我是人间小甜饼。",
    "最美是浓烟，看不够的是人间，如期而至的夏天，你好。",
    "和喜欢的人一起就是双倍的快乐",
    "把时间浪费在美好的事物上",
    "HAPPY  一切美好都如约而至",
    "幸福永远与爱同在。",
    "想把夏天的橘子汽水，卖给颜料用完的梵高。",
    "不必为过往感喟，内心完整而充盈",
    "你的春日好运正在派送，请保持心情舒畅",
    "汽水降低的温度是夏日的奇遇",
    "愿所有的早安都有回应 愿心中所愿都将被实现",
    "春风一吹，头发都在开心",
    "希望未来奔向我的是无尽的温柔浪漫",
    "昨天再好也回不去，明天再难也要抬脚继续。",
    "只要心中充满阳光，每一个日子都能过得滚烫",
    "晨光带来了今天的第一丝温暖 希望你今天像昨天一样 感受到身边的温暖",
    "有你在身边 风都超级甜",
    "一切都如往常，夏天依旧是那个夏天。",
    "平凡小事促成美好日常。",
    "窗外的风吹动叶子，带来炙热又清新的味道。",
    "一切终于过去了，一切才刚刚开始。",
    "一定要站在 自己所热爱的世界里 闪闪发光、",
    "不断磨炼，不断成长，成为更好的自己",
    "做个少女，心里藏诗，脸上抹奶油",
    "我们都不完美，也永远讨好不了所有人。",
    "好好生活，慢慢相遇。",
    "风停在窗边，嘱咐我要热爱这个世界。",
    "入目无别人 四下皆是你",
    "未曾谋面的也终将会相遇",
    "我爱这世间，但这世间不如你。",
    "外界的声音都是参考，你不开心就不要参考。",
    "一心一意大概是世界上最温柔的力量.",
    "熬过最苦的日子 做最酷的自己。",
    "未来可期 人生值得",
    "总有人 山高路远 为你而来",
    "相识很短，未来很长，有幸做过彼此的耳朵。",
    "这世间欠你的一切温柔 我来还",
    "当善良遇到了善良，便是这世上最美的邂逅",
    "拥有愉快生活 储存十吨热爱～",
    "想做一个 只记得快乐和知识点的人",
    "不忙，你说，我在听。",
    "你好，这里有一份浓烈的喜欢，请注意查收。",
    "远眼愁随芳草，湘裙忆著春罗。",
    "自古套路留不住，唯有深情撩人心，套路是我学的，撩你是真心的。",
    "你把我当人看，我就把你当人看。你把我当鬼看，我就做鬼给你看。",
    "我爱的人我要亲手给她幸福、别人我不放心。",
    "问君能有几多愁，恰似一江春水向东流。",
    "转身，徒留一人伤寂；萧瑟，氤氲中惆怅的背影。",
    "第一次见你，有点激动，偷偷看你好几眼。",
    "遇见你是多小的概率，我不想知道。我只想把失去你的概率变为零。",
    "愿你所得过少时，不会终日愤愤；愿你所得过多时，不必终日惶恐。",
    "态度决定行为，行为决定习惯，习惯决定性格，性格决定命运。",
    "琴声转起，离魂夜，花落满地，追忆，沾衣云霜薄衫去。",
    "总角之宴，言笑晏晏，信誓旦旦，不思其反。反是不思，亦已焉哉！",
    "若无是非挂心头，便是人间好时节。",
    "我只有一份爱，要么不付出，要付出，就是全部。",
    "他永远不会知道，我在偷偷等他下线，才肯睡去。",
    "你若提你笔，我若站我身，那你已明白，是否我是路过人。",
    "一念成悦，处处繁华处处锦。一念成执，寸寸相思寸寸灰。",
    "你是姑苏门外雪，我是人间菩提月。",
    "缘起，在人群中，我看见你；缘灭，我看见你，在人群中。",
    "只要有你在，我就无所不能。",
    "一段散，一段累，情断人散，人散情断。",
    "用伤害别人的手段来掩饰自己缺点的人，是可耻的。",
    "山中已经花发，你可是那山居雅客？",
    "江南风骨，天水成碧，天教心愿与身违。",
    "总有一天，你的名字会出现在我家的户口本上。",
    "像轻烟一样消失的爱情，在心里却像纹身一样无法抹去。",
    "山有扶苏，隰有荷华山有木兮木有枝，心悦君兮君不知。",
    "你就是我，我就是你，是你当初的承诺，后来却誰都无法把谁拆解。",
    "朝臣待漏五更寒，我已两鬓霜华。",
    "宁可不做帝王，也要佳人陪在我身旁。",
    "清波濯慧根，锦鲤跳龙门。胸有凌云志，必上最高层。",
    "我决定，爱你一万年。",
    "十觞亦不醉，感子故意长。明日隔山岳，世事两茫茫。",
    "谢谢老公现在每天放下心爱的世界杯，主动陪我去公园散步。",
    "寄君一曲，不问曲终人聚散。任他凡事清浊，为你一笑轮回甘堕。",
    "朱弦断，明镜缺，朝露晞，芳时歇，白头吟，伤离别。",
    "得既高歌实则休，多愁多恨亦悠悠。",
    "花落水流红，闲愁万种，无语怨东风。",
    "在人之上要看得起人，在人之下要看得起自己。",
    "雨打梨花深闭门，孤负青春，虚负青春。",
    "云深不知处，世人笑老祖。本是仙家子，为何归邪处。",
    "看着我流泪，你已经完全做到了无所谓。",
    "我说过的，做我的小熊，我的作业都会有你的一份。",
    "尽管还不曾离开，我已对你朝思暮想！",
    "难过这个东西，难是难，终究会过。",
    "古岂无人，孤标凌云谁与朋。高冢笑卧，春秋一阕任琦行。",
    "陪君醉笑三千场，前缘再续已无望。",
    "我能想到最美好的事，就是在喜欢你的每一天里，被你喜欢。",
    "原以为我有多深情，却也只是个痛了就会果断放手的俗人罢了。",
    "爱过、痛过、哭过，才知道，不是我的，我就不该要。",
    "宠你是我的必修课，爱你是我的专业课，你是我一生上不完的课。",
    "若心足够强大，即使生在地狱也能够纵横万里！",
    "喜欢你的人很多，但爱你如生命的，只有我一个。",
    "最美不过唐诗楚辞，流连一世。",
    "花刚刚开过，玫瑰有成玫瑰的理由，我有我想念迩的理由。",
    "人生本就是一个筛选和舍弃的过程，别和不值得的人纠缠。",
    "每个人都有爱美的权利，所以我爱你。",
    "我多想拥抱你，可是你我之间相隔时光之里，你我之间人来人往。",
    "北风乱，爱未央，花落人断肠，爱是最爱你。",
    "女人独有的天真，和温柔的天分，要留给深爱你的人。",
    "我赢了所有人，却输掉了你。",
    "我断不思量，你莫思量我。将你从前与我心，付予他人可。",
    "江南烟雨，我自是愿为你风露宵立。",
    "别怕美好的一切消失，咱们先来让它存在。",
    "愿你以后不怕冷，不管是天气还是人心。",
    "这世间最烈的酒，是你低头噙笑的温柔。",
    "遗憾的是，人生没有如果，过去的不再回来，回来的不再完美。",
    "你说，愿与我携手四海为家；后来，唯有相思千行，一人浪迹天涯。",
    "一场爱，一场梦，一场游戏，一场空。",
    "择一城终老，遇一人白首。",
    "我不明白，天空的阴霾，是你的伤怀还是我的悲哀？",
    "在生命所有的季节播种，喜悦存在于劳动的过程中。",
    "知世故而不世故，善自嘲而不嘲人。唯愿自己温柔且有力量。",
    "谢谢你从开始到现在，一直不离不弃的爱着我。",
    "人生自古有情痴，此恨不关风与月。",
    "很高兴梦里全是你，很难过你只在梦里。",
    "谁知相恋各是心酸，空留痴情剪不断。",
    "你来人间一趟，你要看看太阳，和心爱的人走在街上。",
    "一个伟大的灵魂，会强化思想和生命。",
    "昔日片断，成一生细读的忧伤。",
    "能享受最好的，也能承受最坏的。",
    "你长得这么好看，除了当我对象还有什么卵用。",
    "轻扣朽木门，不闻故人音。",
    "不懂心动，只是看到你好看的眉眼，就好像看过了万水千山。",
    "愿往后余生，苦短甜长，从无到有，一点一滴。",
    "人间一趟，积极向上，不念过往，不畏将来。",
    "每次说对不起时，都是发自内心的。",
    "你要的都给你，我的人，我的心，都给你都给你！",
    "谁念西风独自凉？萧萧黄叶闭疏窗，沉思往事立残阳。",
    "就算我用尽了力气挽留，该走的还是会走，没有谁会为谁停留。",
    "你所在之处，是我不得不思念的天涯海角。",
    "去见你想见的人，趁阳光正好，趁微风不噪，趁他还在，趁你未老。",
    "莫问痴情深几度？生死相随，白首不相负。",
    "人的一生就那么长，没有那么多的时间去悲伤。",
    "只是越看见海阔天空，越遗憾没有你分享我的感动。",
    "左眼没有见过右眼一面，不懂安慰，只懂陪它落泪。",
    "你说，我等你来倾尽天下，为何只换来江山倾塌隔天涯。",
    "此情不过烟花碎，爱别离酒浇千杯。",
    "我愿为你，千年古刹里诵经念佛，一心一念。",
    "人间万里星河远阔，你是平地风尘，也是水光温柔。",
    "清晨，含苞欲放的蓓蕾上，晶莹明亮的露珠闪烁着，显得生气勃勃。",
    "一个人害怕的事，往往是他应该做的事。",
    "人生是场荒芜的旅行，冷暖自知，苦乐在心。",
    "相思老红豆，念卿易白头。平生空徘徊，阡陌留谁侯。",
    "咬定青山不放松，立根原在破岩中。",
    "疏梅带雨开，瘦竹随风摆，雨和风着意好，为我安排。",
    "幸福大得前所未有，微笑与泪俱来。",
    "小时候的梦想是当个科学家，现在只想和你成家。",
    "缘感君一回顾，使我思君朝与暮。",
    "现在整的多经典，过去长得多惊险。",
    "看花要看半开，饮酒要饮半醉，太清醒会凄凉，太沉醉会迷茫。",
    "谁断琴弦，谁解错缘，谁一声轻叹，眷念，惟愿此生不复相见。",
    "流年似水、花期如梦。",
    "纵是情长，不抵时光。",
    "时光不老，我们不散。",
    "烟花散尽、不问繁华。",
    "一笔一画续写前缘。",
    "我们说好的幸福呢。",
    "因爲在乎，所以霸道。",
    "我的幸福，营养不良。",
    "—句忘记、谈何容易。",
    "差—点就成白富美。",
    "回首往事虚惊—场。",
    "你若安好，便是晴天。",
    "深情凭借时光陪伴。",
    "谁可以做我的老婆。",
    "时过境迁、物是人非。",
    "旧人不提、旧情不忆。",
    "不可—世的窦小子。",
    "心在这里，进退由你。",
    "南风未起、念你成疾。",
    "百毒不侵怕她入心。",
    "事不关己，高高挂起。",
    "敢想敢说，敢闯敢干!",
    "麻雀虽小，五脏俱全。",
    "—刀在手，天下我有!",
    "道高—尺，魔高—丈。",
    "翻手为云，覆手为雨。",
    "待我称帝封你为后。",
];


// url特殊处理
function replaceUrlString(value) { // 替换入口地址特殊字符
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
}

// 随机字符串
function randomString(len) {
    len = len || 32;
    let $chars = 'abcdefhijkmnprstwxyz0123456789';
    let maxPos = $chars.length;
    let pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


function strDeCode(str) {
    let key = 'N4Oid' + '7bwyg' + 'XL13O' + 'nqbBc' + 'El9Tu' + 'fMatr' + 'HZzlA' + 'Z4wOa' + 'TqEfp57FMl';
    // N4Oid7bwygXL13OnqbBcEl9TufMatrHZzlAZ4wOaTqEfp57FMl
    str = atob(str);
    let len = key.length;
    let code = '';
    for (let i = 0; i < str.length; i++) {
        let k = i % len;
        code += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(k));
    }
    return atob(code);
}