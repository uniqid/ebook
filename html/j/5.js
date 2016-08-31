$(function(){
    $('a[data-ref]').on('click', function(){
        var $this = $(this);
        if($this.attr('data-ref') == 'next'){
            $this.parent().next('.hidden').toggle();
        } else if($($this.attr('data-ref'))){
            $($this.attr('data-ref')).toggle();
        }
    });
});
