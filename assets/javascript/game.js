var wins = 1;
var losses = 1;
var score = 0;

$(document).ready(function() {
	var random1 = Math.floor(Math.random() * (120 - 19) + 19);
		$("#randomNumber").html(random1);


	$(".btn").on("click", function() {
		//var images = $(this).closest("#images");
		var amount = +$(this).val();
		score = amount+score;
		$("#score2").html(score);
		
		if (score === random1) {
			$("#wins").html(wins++);
			score = 0;
			random1 = Math.floor(Math.random() * (120 - 19) + 19);
				$("#randomNumber").html(random1);
		};

		if (score > random1) {
			$("#losses").html(losses++);
			score = 0;
			random1 = Math.floor(Math.random() * (120 - 19) + 19);
				$("#randomNumber").html(random1);
		};

	});


});