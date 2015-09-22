
var legend = document.querySelector(".booking-form-show-btn");
var form = document.querySelector(".booking-form-container");

legend.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.add("shown-form");
});

window.addEventListener("load", function() {
	form.classList.add("hidden-form");
});
