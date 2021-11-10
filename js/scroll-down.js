$(document).ready(function(){
    var $popContainer = $('.menu-navegacion');
    var $body = $('html,body');

    $('#pause').on('click', function() {
        $popContainer.fadeIn();
        $body.css('overflow', 'hidden');
    });
    $('#popup-overlay').on('click', function() {
        $popContainer.fadeOut();
        $body.css('overflow', 'auto');
    });
});