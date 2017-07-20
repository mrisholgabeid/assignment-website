$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// swap image
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
		
		//swap caption
		var name = $(this).attr("title");
		$("#name").text(name);
				
		// cancel the default action of the link
	    evt.preventDefault();  // jQuery method that's cross-browser compatible
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready


$(document).ready(function() {
	$("#image_rollovers img").each(function() {
		// get old and new urls
		var oldURL = $(this).attr("src");
		var newURL = $(this).attr("id");
		
		// preload images		
		var rolloverImage = new Image();
		rolloverImage.src = newURL;
		
		// set up event handlers			
		$(this).hover(
			function() {
				$(this).attr("src", newURL);
			},
			function() {
				$(this).attr("src", oldURL);
			}
		); // end hover
	}); // end each
}); // end ready


$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	
	// the function for running the slide show	
	var runSlideShow = function() {   
        $("#caption").fadeOut(3000);
        $("#slide").fadeOut(3000,
        	function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt"); 
				$("#slide").attr("src", nextSlideSource).fadeIn(3000);					
				$("#caption").text(nextCaption).fadeIn(3000);
			}
		)
	}
	
	// start slide show
    var timer1 = setInterval(runSlideShow, 3000);
    
    // start and stop the slide show
	// but the toggle event method has been removed from jQuery 1.9
	/*
	$("#slide").toggle( 
		function() {
		    clearInterval(timer1);
		},
		function() {
			timer1 = setInterval(runSlideShow, 3000);
		}
	)
	*/
	
	// here's one way to code this app without using the toggle event method
	$("#slide").click(function() {
		if (timer1 != null) {
	    	clearInterval(timer1);
	    	timer1 = null;
		}
		else {
			timer1 = setInterval(runSlideShow, 1000);
		}
	});
	
});

