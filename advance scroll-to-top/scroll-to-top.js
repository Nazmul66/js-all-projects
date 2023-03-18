// YOu can do anything you want just change css property and js


window.addEventListener("scroll", function(){
    const scroller = document.getElementById("scrolling");
    const percentage = this.document.getElementById("percentage")

    const scrolling = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const totalHeight = scrollHeight - clientHeight;

    let calcHeight = Math.round((scrolling / totalHeight ) * 100);
    if(scrolling > 100){
        // scroller.style.display = "flex";
        scroller.classList.add("activeNess");
    }
    else{
        // scroller.style.display = "none";
        scroller.classList.remove("activeNess");
    }

    scroller.addEventListener("click", function(){
        document.documentElement.scrollTop = 0;
    })
    scroller.style.background = `conic-gradient(#03cc65 ${calcHeight}%, #d7d7d7 ${calcHeight}%)`;
    percentage.innerText = calcHeight;
})