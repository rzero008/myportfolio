
$(document).ready(function() {

	//load script
	$("body").queryLoader2({
        barColor: "#f20000",
        backgroundColor: "#000",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });


	$('#vidWrapper').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'assets/cgi.mp4',
		ogv:'assets/tunnel_animation.ogv',
		webm:'assets/cgi.webm',
		poster:'assets/tunnel_animation.jpg',
		opacity:1,
		fullscreen:true,
	});
	
	
	$('#div_demo').videoBG({
		mp4:'assets/tunnel_animation.mp4',
		ogv:'assets/tunnel_animation.ogv',
		webm:'assets/tunnel_animation.webm',
		poster:'assets/tunnel_animation.jpg',
		scale:true,
		zIndex:0
	});
	
	
	$('#text_replacement_demo').videoBG({
		mp4:'assets/text_replacement.mp4',
		ogv:'assets/text_replacement.ogv',
		webm:'assets/text_replacement.webm',
		poster:'assets/text_replacement.png',
		textReplacement:true,
		width:760,
		height:24
	});
	
	
	
	
	
		
});



