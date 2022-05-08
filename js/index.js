$(document).ready(function(){
    $.ajax({
        url: 'header.html',
        cache: false,
        async: false,
        success: function(html){
            $('main').before(html);
        }
    });
    $.ajax({
        url: 'footer.html',
        cache: false,
        async: false,
        success: function(html){
            $('main').after(html);
        }
    });
})
