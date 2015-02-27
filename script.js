$(document).ready(function(){
 var num = 1


  $('.start').click(function(){

    while (num < 2000 ) {
      $('.container').append('<div id="p' + num + '" class="blocks"></div>');
      num = num+1;
    }

$('.blocks').hover(function(){
            $(this).css('opacity', "0.2");
          })
    //$('.blocks').mouseleave(function(){
   // $(this).fadeIn('3000');
  //})
    })




  $('.remove').click(function(){
    $('.blocks').remove();
    num = 1;
  })




});