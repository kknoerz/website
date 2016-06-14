
function sizeLettering(){
  $("#title h1, #title h2, #title h3").lettering();

  var tw = $('#title').width();
  var th = $('#title').height();

  var lw = $('#left').width();
  var lh = $('#left').height();

  $('#title').css({'height':tw+'px'});



  var pw = $('#profile').width();
  var ph = $('#profile').height();

  var pDiff = (tw - pw);

  var titlePos = $('#title').position();
  var charLeftPos = titlePos.left + th / 2;
  var charTopPos = titlePos.top + th / 2 - (tw/1.7);

  $('h1 span, h2 span, h3 span').css({
    'height' : (th*.7 )+'px',
    'left' : charLeftPos+'px',
    'top' : charTopPos+'px'
  });
}

$(document).ready(function(){

  // debugger;
  sizeLettering();

});

$(window).resize(function(){
  sizeLettering();
});
