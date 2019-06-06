$(document).ready(function(){
  
  //$('button').addClass('makeRed').attr.append("class","makeRed");
  //$('button').addClass('makeBorder');
  
  $('button').mouseenter(function(){
    $('button').removeClass('makeRed').addClass('makeBorder');});

  $('button').mouseleave(function(){
    $('button').removeClass('makeBorder').addClass('makeRed');});


  
});