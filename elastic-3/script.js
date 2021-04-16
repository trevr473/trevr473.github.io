function scrollLeftColumn(){
	let textElementLeft = document.getElementById("left");
	let scrollTopLeft = textElementLeft.scrollTop;
	if (scrollTopLeft < (textElementLeft.scrollHeight - textElementLeft.offsetHeight)) {
    setTimeout(function(){ 
      //console.log('scroll left div up');
      scrollTopLeft = scrollTopLeft + 100;
      //console.log(scrollTopLeft);
      textElementLeft.scrollTop = scrollTopLeft;
      scrollLeftColumn();
    }, 1000);
	}	
	else {
		scrollTopLeft = 0;
	}
}
let newValue = -600; 
function scrollRightColumn(){
console.log(newValue);
	if (newValue < document.getElementById("right").offsetHeight) {
    setTimeout(function(){ 
      newValue = newValue + 100;
      $("#right").css({"-webkit-transform":"translate(0px, " + newValue + "px)"});
      //console.log('scroll right div up');
 
      //console.log(scrollTopRight);
      //textElementRight.scrollTop = scrollTopRight;
      scrollRightColumn();
    }, 1000);
	}	
	else {
		newValue = 0;
	}
}
scrollLeftColumn();
scrollRightColumn();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
	