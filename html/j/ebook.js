var g_cur_pos,g_timer; 
document.onmousedown = function(){
    clearInterval(g_timer);
};
document.ondblclick = function(){
    g_timer = setInterval(function(){
        g_cur_pos = document.body.scrollTop + document.documentElement.scrollTop; 
        window.scroll(0, ++g_cur_pos); 
        if (g_cur_pos != (document.body.scrollTop + document.documentElement.scrollTop)){
            clearInterval(g_timer);
        }
    }, 50);
};

document.onkeydown = function(){
    if(typeof event == 'undefined'){
        return;
    }
    var src = '', obj, home_src = '6.htm',
        num = location.href.replace(/.*?(\d+)\.htm$/, '$1');
        num = +num;
    if (event.keyCode == 37) {
        var prev = document.getElementById('_prev');
        src = prev? prev.href: (num > 1? num-1: 1) + '.htm';
    }
    else if (event.keyCode == 39) {
        var next = document.getElementById('_next');
        src = next? next.href: (num + 1) + '.htm';
    }
    else if (event.keyCode == 13) {
        var home = document.getElementById('_home');
        src = home? home.href: home_src;
    }
    if(src != ''){
        obj = (src == home_src) && window.parent? window.parent: document;
        obj.location = src;
    }
};