function ScrollDiv(){
	console.log("working")
	let textElementLeft = document.getElementById("left");
	let scrollTopLeft = textElementLeft.scrollTop;
	if (scrollTopLeft < (textElementLeft.scrollHeight - textElementLeft.offsetHeight)) {
		scrollTopLeft = scrollTopLeft + 1 
	}	
	else {
		scrollTopLeft = 0;
	}


		//let textElementRight = document.getElementById("right");
		//let scrollTopRight = textElementRight.scrollTop;
		//if (scrollTopRight < (textElementRight.scrollHeight - textElementRight.offsetHeight)) {
			//scrollTopRight = scrollTopRight - 1 
	//}


	//else {
	//	scrollTopRight = 0;
	//}

}

setInterval(ScrollDiv,60)

