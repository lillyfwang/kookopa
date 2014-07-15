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
}).call(this);