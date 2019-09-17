	
	// Jquery logic to change the color of 'Order Now' button on mouseover and mouseout 

		$(document).ready(function(){
			$(".btn-color").mouseover(function(){
				$(".btn-color").css("background-color", "#ab3d0f");
			});
			$(".btn-color").mouseout(function(){
				$(".btn-color").css("background-color", "#c54712");
			});
		});
		

	// Jquery logic to change the color of 'NOTIFY ME' button on mouseover and mouseout 

		$(document).ready(function(){
			$(".notify-btn").mouseover(function(){
				$(".notify-btn").css("background-color", "#ab3d0f");
			});
			$(".notify-btn").mouseout(function(){
				$(".notify-btn").css("background-color", "#c54712");
			});
		});

	
	// Jquery logic to change the color of 'Subscribe' button on mouseover and mouseout 

		$(document).ready(function(){
			$(".subscribe-btn").mouseover(function(){
				$(".subscribe-btn").css("background-color", "#ab3d0f");
			});
			$(".subscribe-btn").mouseout(function(){
				$(".subscribe-btn").css("background-color", "#c54712");
			});
		});

	
	// Jquery logic to replace 'type your email here' by input field on mouse over 

	$(document).ready(function(){
		$("#email").click(function(){
			$("#email").replaceWith("<input type='email'></input>");
		});
	});
	
	// Jquery logic to change fill the rating
	$(document).ready(function(){
		$(".rating").mouseover(function(){
			$(".rating").css("color", "#ff5912");
		});
	});
	
	$(document).ready(function(e) {
         alert(jsonObject.logo.path);
	}); 
	