	var minusAdult = document.querySelector(".minus-adult"); 
	var plusAdult = document.querySelector(".plus-adult");
	var counterAdult = document.querySelector(".number-adult");

	var minusKids = document.querySelector(".minus-kids"); 
	var plusKids = document.querySelector(".plus-kids");
	var counterKids = document.querySelector(".number-kids");



	minusAdult.addEventListener("click", function(event) {
		event.preventDefault();
		if (counterAdult.value > counterAdult.min) {
		counterAdult.value = Number(counterAdult.value) - 1;
		}

	});

	plusAdult.addEventListener("click", function(event) {
		event.preventDefault();
		if (counterAdult.value < counterAdult.max) {
		counterAdult.value = Number(counterAdult.value) + 1;
		}

	});

	minusKids.addEventListener("click", function(event) {
		event.preventDefault();
		if (counterKids.value > counterKids.min) {
		counterKids.value = Number(counterKids.value) - 1;
		}

	});

	plusKids.addEventListener("click", function(event) {
		event.preventDefault();
		if (counterKids.value < counterKids.max) {
		counterKids.value = Number(counterKids.value) + 1;
	}

	})


	// for(i=0; i<minus.length; i++) {
	// 	minus[i].addEventListener("click", minusClickListener, false)
	// };


	// function minusClickListener (event) {
	// 	event.preventDefault();
	// 	console.log(event);
	// 	var targetID = event.target.ladida;
	// 	console.log(targetID);
	// 	var counterInput = document.querySelector("#" + targetID);
	// 	console.log(counterInput);
	// 	counterInput.value = Number(counterInput.value) - 1;
	// }