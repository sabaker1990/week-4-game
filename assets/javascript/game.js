var wins = 1;
var losses = 1;
var score = 0;
var resetPoints = function() {
	var populateRandomValue = function (button) {
		button.value = Math.floor(Math.random() * (12 - 1) + 1);
	}

populateRandomValue(document.getElementById("button-1"));
populateRandomValue(document.getElementById("button-2"));
populateRandomValue(document.getElementById("button-3"));
populateRandomValue(document.getElementById("button-4"));

};

$(document).ready(function() {
	var random1 = Math.floor(Math.random() * (120 - 19) + 19);
	resetPoints();

	$("#randomNumber").html(random1);

	$(".btn").on("click", function() {
		var amount = +$(this).val();
		score = amount+score;
		$("#score2").html(score);
		
		if (score === random1) {
			$("#wins").html(wins++);
			score = 0;
			random1 = Math.floor(Math.random() * (120 - 19) + 19);
				$("#randomNumber").html(random1);
			resetPoints();
		};

		if (score > random1) {
			$("#losses").html(losses++);
			score = 0;
			random1 = Math.floor(Math.random() * (120 - 19) + 19);
				$("#randomNumber").html(random1);
			resetPoints();
		};

	});


});