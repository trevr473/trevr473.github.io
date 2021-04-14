function ScrollDiv(){
	let textElementLeft = document.getElementById('left');
	let scrollTopLeft = textElement.scrollTop;
	if (scrollTopLeft < (textElementLeft.scrollHeight - textElementLeft.offsetHeight)) {
		scrollTopLeft = scrollTopLeft + 1 
}

else {
	scrollTopLeft = 0;
}


	let textElementRight = document.getElementById('right');
	let scrollTopRight = textElement.scrollTop;
	if (scrollTopRight < (textElementRight.scrollHeight - textElementRight.offsetHeight)) {
		scrollTopRight = scrollTopRight - 1 
}


else {
	scrollTopRight = 0;
}


}