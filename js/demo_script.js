// Typographic scale toggle function


$(document).ready(function(e) {
	// Type scale toggle button
	$(".toggle-scale").click(function(){
		$("html").toggleClass("font-scale-active font-scale-inactive");
		$(this).toggleClass("on off");
	});
	// Type fonts toggle button
	$(".toggle-fonts").click(function(e){
		e.preventDefault();
		if($("html").hasClass("wf-active")) {
			$("html").removeClass("wf-active");
			$("html").addClass("wf-inactive");
			$(this).removeClass("on");
			$(this).addClass("off");
			// reset correction
			//$("html").addClass("corrected");
		} else {
			$("html").removeClass("wf-inactive");
			$("html").addClass("wf-active");
			$(this).removeClass("off");
			$(this).addClass("on");
			//$(".toggle-font-correction").removeClass("off");
			//$(".toggle-font-correction").addClass("on");
		}
	});
	// Type font correction toggle button
	$(".toggle-font-correction").click(function(e){
		e.preventDefault();
		if($("html").hasClass("uncorrected")) {
			$("html").removeClass("uncorrected");
			$(this).removeClass("off");
			$(this).addClass("on");
		} else {
			$("html").addClass("uncorrected");
			$(this).removeClass("on");
			$(this).addClass("off");
		}
	});
	// OTF Features toggle button
	$(".toggle-otf-features").click(function(e){
		e.preventDefault();
		$("html").toggleClass("otf-active otf-inactive");
		$(this).toggleClass("on off");
	});
});

