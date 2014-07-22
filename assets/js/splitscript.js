//for split layout interaction
(function() {
  $( "#split-email-login" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "fold",
        duration: 1000
      }
    });
 
  $( "#split-email" ).click(function() {
    $( "#split-email-login" ).dialog( "open" );
  });

  $( "#tabs" ).tabs();
  
  /** INFORMATION PAGE ANIMATION **/
  $("#split-left").mouseenter(function() {
    $("#split-left").animate({
        width: '+=5%'
    }, 200);
    $("#split-right").animate({
        width: '-=5%'
    }, 200);
  });
  
  $("#split-left").mouseleave(function() {
    $("#split-left").animate({
        width: '-=5%'
    }, 200);
    $("#split-right").animate({
        width: '+=5%'
    }, 200);
  });
  
  $("#split-right").mouseenter(function() {
    $("#split-right").animate({
        width: '+=5%'
    }, 200);
    $("#split-left").animate({
        width: '-=5%'
    }, 200);
  });
  
  $("#split-right").mouseleave(function() {
    $("#split-right").animate({
        width: '-=5%'
    }, 200);
    $("#split-left").animate({
        width: '+=5%'
    }, 200);
  });
  
  /** RENTAL OPTIONS PAGE ANIMATION **/
  $("#split-left2").mouseenter(function() {
    $("#split-left2").animate({
        width: '+=5%'
    }, 200);
    $("#split-right2").animate({
        width: '-=5%'
    }, 200);
  });
  
  
  $("#split-left2").mouseleave(function() {
    $("#split-left2").animate({
        width: '-=5%'
    }, 200);
    $("#split-right2").animate({
        width: '+=5%'
    }, 200);
  });
  
  $("#split-right2").mouseenter(function() {
    $("#split-right2").animate({
        width: '+=5%'
    }, 200);
    $("#split-left2").animate({
        width: '-=5%'
    }, 200);
  });
  
  $("#split-right2").mouseleave(function() {
    $("#split-right2").animate({
        width: '-=5%'
    }, 200);
    $("#split-left2").animate({
        width: '+=5%'
    }, 200);
  });
  
}).call(this);