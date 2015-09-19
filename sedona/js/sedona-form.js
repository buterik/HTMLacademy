
	var legend = document.querySelector(".booking-form-show-btn");
	var animation = document.querySelector(".booking-form-container");

	legend.addEventListener("click", function(event) {
		event.preventDefault();
		animation.classList.add("shown-form");
	});
