$(document).ready(function() {

  $('.toggle-nav').click(function(e) {
        e.preventDefault();
      
        $(this).toggleClass('active');
//        $('nav ul').toggleClass('active');
        $('nav ul').slideToggle("300");

    });  
    
});