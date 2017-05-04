var wins = 0;
var losses = 0;
//var random1 = Math.floor(Math.random() * (120 - 19) + 19);
	//document.getElementById=("randomNumber").innterHTML = random1;
	//console.log(random1);
//var random2 = Math.floor(Math.random() * 12) + 1;
	//console.log(random2);

$(document).ready(function() {
	var random1 = Math.floor(Math.random() * (120 - 19) + 19);
		$("#randomNumber").html(random1);


	$(".btn").on("click", function() {
		//var images = $(this).closest("#images");
		var amount = +$(this).val();
		$("#score2").html(amount);

	});

	//$(".btn").on("click", function() {
		//var value = data("value");
		//console.log(value);
	//});













});