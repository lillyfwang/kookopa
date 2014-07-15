(function() {
  $('#landing-register').click(function(){
    if ($('#landing-login-form').css('display') == 'none') {
        $('#landing-signup-form').fadeToggle("slow");
    	$('#landing-welcome').fadeToggle("slow");
    }
    else {
    	$('#landing-signup-form').fadeToggle("slow");
    	$('#landing-login-form').fadeToggle("slow");
    }
  });
  
  $('#landing-login').click(function(){
    if ($('#landing-signup-form').css('display') == 'none') {
   	 	$('#landing-login-form').fadeToggle("slow");
    	$('#landing-welcome').fadeToggle("slow");
    }
    else {
     	$('#landing-signup-form').fadeToggle("slow");
    	$('#landing-login-form').fadeToggle("slow");
    }
  });
}).call(this);