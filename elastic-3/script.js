function scrollLeftColumn(){
	let textElementLeft = document.getElementById("left");
	let scrollTopLeft = textElementLeft.scrollTop;
	if (scrollTopLeft < (textElementLeft.scrollHeight - textElementLeft.offsetHeight)) {
    setTimeout(function(){ 
      console.log('scroll left div up');
      scrollTopLeft = scrollTopLeft + 100;
      console.log(scrollTopLeft);
      textElementLeft.scrollTop = scrollTopLeft;
      scrollLeftColumn();
    }, 1000);
	}	
	else {
		scrollTopLeft = 0;
	}
}
function scrollRightColumn(){
	let textElementRight = document.getElementById("right");
	let scrollTopRight = textElementRight.scrollTop;
	if (scrollTopRight < (textElementRight.scrollHeight - textElementRight.offsetHeight)) {
    setTimeout(function(){ 
      console.log('scroll right div up');
      scrollTopRight = scrollTopRight + 100;
      console.log(scrollTopRight);
      textElementRight.scrollTop = scrollTopRight;
      scrollRightColumn();
    }, 1000);
	}	
	else {
		scrollTopRight = 0;
	}
}
scrollLeftColumn();
scrollRightColumn();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
	