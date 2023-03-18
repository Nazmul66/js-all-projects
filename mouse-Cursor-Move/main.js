

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
 
document.addEventListener("mousemove", function(e){
     let x = e.clientX;
     let y = e.clientY;

     cursor.style.top = y + "px";
     cursor.style.left = x + "px";

     cursor2.style.top = y + "px";
     cursor2.style.left = x + "px";
})
