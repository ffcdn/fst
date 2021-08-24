let baseDomain='';
function ajax(opt) {
    opt = opt || {};
    // console.log(opt);
    opt.method = opt.method || "GET"; //GET：用"GET"方式发送数据,只能256KB;POST：用"POST"方式发送数据,可以大到4MB
    opt.url = opt.url || "";
    opt.url=baseDomain+opt.url;
    opt.async = opt.async || true; //同步异步
    opt.dataType = opt.dataType || "text"; //所传的数的数据类型
    opt.contentType = opt.contentType || "application/x-www-form-urlencoded; charset=utf-8"; //默认表单格式 opt.dataType='json'
    opt.data = opt.data || null;

    var xmlHttp = getXmlHttp(); //获取XML 对象
 
    var postData = getAjaxParama(opt.data); //data
 
    if (opt.contentType === "application/json;charset=utf-8" && opt.dataType === "json") {
        postData = JSON.stringify(opt.data); //转化为字符串
    }
 
    if (opt.method === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', opt.contentType); //而POST请求需要设置请求头，用来传递参数
 
    } else if (opt.method === 'GET') {
        postData = opt.url.indexOf("?") >= 0 ? "&" + postData : "?" + postData; //GET请求，参数是拼接到url上面；
        xmlHttp.open(opt.method, opt.url + postData, opt.async);
        postData = null; //重置参数
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
            var status = xmlHttp.status;
            if (status >= 200 && status < 300) {
                opt.success && opt.success(xmlHttp.responseText);
            } else {
                opt.error && opt.error(status);
            }
        }
    };
 
    xmlHttp.send(postData);
 
    function getXmlHttp() {
        var obj = null;
        //非IE浏览器创建XmlHttpRequest对象
        if (window.XMLHttpRequest) obj = new XMLHttpRequest();
 
        //IE浏览器创建XmlHttpRequest对象
        if (window.ActiveXObject) {
            try {
                obj = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                try {
                    obj = new ActiveXObject("msxml2.XMLHTTP");
                } catch (ex) {}
            }
        }
        return obj;
 
    }
 
    function getAjaxParama(data) {
        var params = [];
 
        for (var key in data) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return params.join('&'); //添加&字符串
 
    }
 
}