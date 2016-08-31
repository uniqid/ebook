$(function(){
    $('#navmenu').find('.menu').children('li').on('mouseover', function(){
        $(this).addClass('hov');
    }).on('mouseout', function(){
        $(this).removeClass('hov');
    });
    $('a').on('click', function(){
        var href = $(this).attr('href');
        (href == '6.htm') && $('#container').css({'display':'none'});
        if(href=='#' || href == '6.htm'){
            return false;
        }
        $('#container').attr('src', href).load(function(){
            var container = $(this);
            container.height($(this).contents().find("body").height() + 50);
            $(this).contents().find("body").on('click',function(){
                container.height($(this).height() + 50);
                return;
            });
        }).css({'display':'block'});
        return false;
    });
});
