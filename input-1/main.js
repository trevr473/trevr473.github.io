

window.onload = function () {

	// select the thing we wanna drag 
	var objects = document.getElementById('image');

	//listen to the touchmove event, every time it fires, grab the location of the touch 
	//then assign it to collection 1 

	objects.addEventListener('touchmove', function(ev){

		//grab the location of the touch 
		var touchLocation = ev.targetTouches[0];

	    //assign collection1 new coordinates based on the touch 
	    objects.style.left = touchLocation.pageX + 'px'; 
	    objects.style.top = touchLocation.pageY + 'px';
        })
}