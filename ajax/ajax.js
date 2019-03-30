function ajax(url, fuSuccess, fuFail) {
    var oAjax;
    if(window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHttp");
    }
    oAjax.open('get', url, true)
    oAjax.send()
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
            if(oAjax.status === 200) {
                fuSuccess(oAjax.responseText)
            } else {
                fuFail()
            }
        }
    }
}