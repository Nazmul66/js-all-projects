
const tooltips = document.querySelectorAll(".tooltips");

tooltips.forEach((items) =>{
    let tooltip = items.querySelector("h1");
    window.addEventListener("mousemove", function(e){
        let x = e.clientX;
        let y = e.clientY;
        
        tooltip.style.left = (x + 20) + "px";
        tooltip.style.top = (y + 20) + "px";
    })
})