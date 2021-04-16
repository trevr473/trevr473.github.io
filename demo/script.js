console.log("h3llo");

function putBubblesAllOverPage() {
   let bubbles = document.querySelectorAll(".bubble");
   bubbles.forEach(function(bubble) {

   	let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
   	let randomVertical = Math.floor(Math.random() * window.innerHeight);

   	bubble.style.top = randomVertical + "px";
   	bubble.style.left = randomHorizontal + "px";

   })

}




document.addEventListener('keydown', addBubble);

function addBubble(event) {
	if (event.key = "b") {
		let bubbleAdder = document.createElement("div");
		bubbleAdder.classList.add("bubble")
		console.log(bubbleAdder);
		document.body.appendChild(bubbleAdder);
		putBubblesAllOverPage();

	} else {

	}

}







putBubblesAllOverPage();