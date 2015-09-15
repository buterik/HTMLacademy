
	var legend = document.querySelector(".legend");
	var animation = document.querySelector(".form-animation");

	legend.addEventListener("click", function(event) {
		event.preventDefault();
		animation.classList.add("shown-form");
	});
