$(document).ready(function() {

  $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('nav ul').toggleClass('active');
        $('nav ul').slideToggle("300");

        e.preventDefault();
    });  
    
});