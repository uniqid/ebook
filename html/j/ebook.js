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
    var num = location.href.replace(/.*?(\d+)\.htm$/, '$1');
        num = +num;
    if (event.keyCode == 37) {
        var prev = document.getElementById('_prev');
        if(prev){
            document.location= prev.href;
        } else {
            document.location= (num > 1? num-1: 1) + '.htm';
        }
    }
    else if (event.keyCode == 39) {
        var next = document.getElementById('_next');
        if(next){
            document.location= next.href;
        } else {
            document.location= (num + 1) + '.htm';
        }
    }
    else if (event.keyCode == 13) {
        var home = document.getElementById('_home');
        if(home){
            document.location= home.href;
        } else {
            document.location= '1.htm';
        }
    }
};