const body = document.querySelector("body"); 
const li = document.querySelectorAll("li"); 

li.forEach(el => {
   el.addEventListener("mouseover", () => {
   	let dt = el.getAttribute("data-dt");
     console.log(dt);
   	 document.body.style.background = `url(imgs/${dt})no-repeat center`;
    });
}); 






	