$(function(){
    $('tr').hover(function(){
        $(this).css('background', 'lightgreen');
    },function(){
        $(this).css('background', $(this).attr('data-bg'));
    }).each(function(k,v){
        var c = k % 2? 'lightgray': 'lightblue';
        $(v).css('background', c).attr('data-bg', c);
    });
});
