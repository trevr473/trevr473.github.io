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