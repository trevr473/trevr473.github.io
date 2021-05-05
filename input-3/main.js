  let allitems = document.querySelectorAll(".image");
  allitems.forEach(function(item) {
   	item.addEventListener('touchmove', function(ev){
		//grab the location of the touch
		var touchLocation = ev.targetTouches[0];
	    //assign collection1 new coordinates based on the touch
	    item.style.left = touchLocation.pageX + 'px';
	    item.style.top = touchLocation.pageY + 'px';
    })
  });

  

//Allow right column to scroll till end of content, and then remain fixed
function scrollRightColumn(){
//manipulate, or get info from, an Id in my document
	let textElementRight = document.getElementById("right");
	//make the sroll function automatic 
	let scrollTopRight = textElementRight.scrollTop;
	//Have the right bar (.right) scroll with the rest of the page (as it does with the plain html and css above) until the end of .right is reached
	if (scrollTopRight < (textElementRight.scrollHeight - textElementRight.offsetHeight)) {
    setTimeout(function(){ 
    	//check if the scoll top right column div is automoatically scrolling up 
      console.log('scroll right div up');
      //scrollTop value is a measurement of the distance from the element's top to its topmost visible content
      //The height of the viewing window
      //The height to which the window is scrolled
      //The height of the right bar
      //the math would be window_height + scroll_height == right_bar_height
      scrollTopRight = scrollTopRight + 100;
      console.log(scrollTopRight);
      // Get the number of pixels scrolled.
      textElementRight.scrollTop = scrollTopRight;
      scrollRightColumn();
    }, 1000); //not sure - the width 
	}	
	else {
		scrollTopRight = 0; //scroll back to top when text reaches to the end
	}
}
scrollRightColumn();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}