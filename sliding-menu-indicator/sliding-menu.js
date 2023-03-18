

const indicator = document.getElementById("indicator");
const items = document.querySelectorAll(".menu ul li");

    items.forEach(item =>{
        item.addEventListener("mousemove",  function(e){
            e.preventDefault();
            indicator.style.width = e.target.offsetWidth + "px";
            indicator.style.left = e.target.offsetLeft + "px";
        })
    });
