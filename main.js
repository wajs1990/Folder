$(function(){
    $('#play').click(function(){
        $('#slider').cycle('resume');return false;});
        $('#pause').click(function(){
            $('#slider').cycle('pause');return false;});


$('#slider').cycle({
    fx:       'scrollHorz',
    next:      '#next',
    prev:       '#prev',
    pager:      '#pager',
    timeout:     4000,
    speed:      1000
});
});