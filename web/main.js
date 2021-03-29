const body = document.querySelector("body"); 
const li = document.querySelector("li"); 


li.forEach(el => {
   el.addEventListener("mouseover", () => {
   	let dt = el.getAttribute("data-dt");
   	body.style.background = 'url(${dt})no-repeat center/cover';
    });
}); 



 



	