$(window).scroll(function() {
	  if (Math.random() < 0.5) {
    	if ($(window).scrollTop() >400) {
    		$('header').fadeIn().addClass('stick');
		}
		else{
			$('header').hide().removeClass('stick');	
		}
	 }
});

$(function(){

$('nav > ul > li > a,.arrow-down a').click (function(e){
	e.preventDefault();
	var aboutHeight= $('.project').innerHeight();
 	var target = $(this).attr('href');
 	if($(window).width() > 768){	
 		var dest = $(target).offset().top;
 		console.log(dest);
 	}
 	else{
 		var dest = $(target).offset().top -20;
 		console.log(dest);
 	}
 	$('html:not(:animated),body:not(:animated)').animate({
		scrollTop: dest },
    1500);
});

$.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this;
}


	$('.quick').submit(function () {
                   
		var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var c = document.getElementById('quickemail');
                var f = document.quick;

		if ((f.quickfirst.value.length === 0) || (f.quickfirst.value== "") || (f.quickfirst.value== null)) {
   
                $('#quickfirst').addClass('red');
                } 
                else {
			
                         $('#quickfirst').removeClass('red');
                         
		}
                if ((f.quicklast.value.length === 0) || (f.quicklast.value== "") || (f.quicklast.value== null)) {
               
                $('#quicklast').addClass('red');
                
		} 
                else {
			
                         $('#quicklast').removeClass('red');
                         
		}
                            
               if (!b.test(c.value)) {
			
                       $('#quickemail').addClass('red');
      
		} else {
			
                         $('#quickemail').removeClass('red');
           
		}
                
                 if ((f.quickmsg.value.length === 0) || (f.quickmsg.value== "") || (f.quickmsg.value== null)) {
                
                $('#quickmsg').addClass('red');
                
		} 
                else {
			
                         $('#quickmsg').removeClass('red');
                         
		}
		
		if ((f.quickfirst.value == "")|| (f.quicklast.value == "") || (!b.test(c.value)) || (f.quickmsg.value == "")) {
			return false;
                        
                       
		}
		if ((f.quickfirst.value != "") &&  (f.quicklast.value != "") && (b.test(c.value)) && (f.quickmsg.value != ""))  {
			
                                         
                     
               //$('#quick-con').hide().fadeOut();
		     //$('<div></div>').attr('id','quickloader').hide().fadeIn('slow').insertBefore('#quick-con');
		      $('.submit').prop('disabled', true);
		     $('#loading span').html('sending');
		    
		     $('#loading').hide().fadeIn('slow').insertAfter('#quick-con').css({'left':'35%','top':'15%'});
            
			$.post('quickmail.php', {
				quickfirst: $('#quickfirst').val(),
                quicklast: $('#quicklast').val(),
				quickemail: $('#quickemail').val(),
                quickmsg: $('#quickmsg').val()
                                    
			},
                       

			function (a) {
		   $('#quick-con').hide().fadeOut();	
		   $('#loading').css({'visibility':'hidden'});
		   $('#contact').goTo();
		   $('#contact h3').remove();
		   $('<div></div>').hide().fadeIn('slow').insertBefore('#quick-con').append(a);
            
                    //$('#quickfirst,#quicklast,#quickemail,#quickmsg').val('');              
                                
			});
			return false
		    }
	       });   
		var aboutHeight= $('.project').innerHeight();
		$('#about').css('top',aboutHeight);
		$('#skills').css('top',aboutHeight);
		$('#history').css('top',aboutHeight);
		$('#contact').css('top',aboutHeight);
		$(".skills-heading").css('z-index','1');
		$(".about-heading").css('z-index','1');
		$(".history-heading").css('z-index','1');
		$(".contact-heading").css('z-index','1');

	if($(window).width() > 768){
		$(".about-heading").stick_in_parent();
		$(".skills-heading").stick_in_parent();
		$(".history-heading").stick_in_parent();
		$(".contact-heading").stick_in_parent();		
		$(".skills-heading").stick_in_parent()
  			.on("sticky_kit:stick", function(e) {
    		//console.log("has stuck!", e.target);
    		$('.html').addClass('m1');
    		setTimeout(function() {
    			$('.css').addClass('m2');
			}, 100);
			setTimeout(function() {
    			$('.jquery').addClass('m3');
			}, 200);
			setTimeout(function() {
    			$('.javascript').addClass('m4');
			}, 300);
			setTimeout(function() {
    			$('.grunt').addClass('m5');
			}, 400);
			setTimeout(function() {
    			$('.npm').addClass('m6');
			}, 500);
			setTimeout(function() {
    			$('.aem').addClass('m7');
			}, 600);
			setTimeout(function() {
    			$('.accessibility').addClass('m8');
			}, 700);
			setTimeout(function() {
    			$('.usability').addClass('m9');
			}, 800);
			setTimeout(function() {
    			$('.ux').addClass('m10');
			}, 900);
			setTimeout(function() {
    			$('.photoshop').addClass('m11');
			}, 1000);
			setTimeout(function() {
    			$('.mentoring').addClass('m12');
			}, 1100);
			setTimeout(function() {
    			$('.leadership').addClass('m13');
			}, 1200);
			setTimeout(function() {
    			$('.agile').addClass('m14');
			}, 1200);
   		})
	}
	else{
		$('#toggle').click(function() {
   			$(this).toggleClass('active');
			$('#overlay').toggleClass('open');
		});

		$('#overlay a').click(function(){
			$('#toggle').click();
		});

		$('.html').addClass('m1');
    		setTimeout(function() {
    			$('.css').addClass('m2');
			}, 100);
			setTimeout(function() {
    			$('.jquery').addClass('m3');
			}, 200);
			setTimeout(function() {
    			$('.javascript').addClass('m4');
			}, 300);
			setTimeout(function() {
    			$('.grunt').addClass('m5');
			}, 400);
			setTimeout(function() {
    			$('.npm').addClass('m6');
			}, 500);
			setTimeout(function() {
    			$('.aem').addClass('m7');
			}, 600);
			setTimeout(function() {
    			$('.accessibility').addClass('m8');
			}, 700);
			setTimeout(function() {
    			$('.usability').addClass('m9');
			}, 800);
			setTimeout(function() {
    			$('.ux').addClass('m10');
			}, 900);
			setTimeout(function() {
    			$('.photoshop').addClass('m11');
			}, 1000);
			setTimeout(function() {
    			$('.mentoring').addClass('m12');
			}, 1100);
			setTimeout(function() {
    			$('.leadership').addClass('m13');
			}, 1200);
			setTimeout(function() {
    			$('.agile').addClass('m14');
			}, 1200);
	}
	$(".skills-heading").css('z-index','1');
	$(".skills-heading").next().css('z-index','1');
	$(".about-heading").css('z-index','1');
	$(".history-heading").css('z-index','1');
	$(".contact-heading").css('z-index','1');
});