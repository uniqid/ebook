$(function(){
    $('.page_nav').children('img').on('click', function(){
        var src = '', obj, home_src = '6.htm', index = $(this).index(),
            num = location.href.replace(/.*?(\d+)\.htm$/, '$1');
            num = +num;

        if (index == 0) {
            var prev = document.getElementById('_prev');
            src = prev? prev.href: (num > 1? num-1: 1) + '.htm';
        }
        else if (index == 2) {
            var next = document.getElementById('_next');
            src = next? next.href: (num + 1) + '.htm';
        }
        else if (index == 1) {
            var home = document.getElementById('_home');
            src = home? home.href: home_src;
        }
        if(src != ''){
            obj = (src == home_src) && window.parent? window.parent: document;
            obj.location = src;
        }
    });
});
