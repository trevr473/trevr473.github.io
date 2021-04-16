
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
scrollRightColumn();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}