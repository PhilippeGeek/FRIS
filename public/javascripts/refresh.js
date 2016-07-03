
$(function(){
    setInterval(function(){
        $.get('/scores',function(r){
            r = JSON.parse(r);
            $('#fr').html(r['france']);
            $('#is').html(r['iceland']);
        })
    },2000);
});