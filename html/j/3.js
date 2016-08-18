$(function(){
    $('.icons1').find('a').on('mouseenter', function(){
        var img = $(this).find('img');
        var src = img.attr('data-hover');
        img.attr({src:src}).css({width:'70px'});
        img.animate({'width':'110'},{duration:133,easing:'easeInOutCirc'}).animate({'width':'100'},{duration:25,easing:'easeInOutCirc'});
    }).on('mouseleave', function(){
        var img = $(this).find('img');
        img.stop(true, true).attr({'src':img.attr('data-src')}).css({width:'74px'});
    });
    $('.icons2').find('a').hover(
        function(){$(this).stop().animate({backgroundPositionX: '5'}, 133, 'linear');},
        function(){$(this).stop().animate({backgroundPositionX: '20'}, 25, 'linear');}
    );
});
