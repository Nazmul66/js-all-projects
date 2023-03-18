// Two way define the page-scroll

// const progress = document.getElementById("progress");
// const scrollHeight = document.body.scrollHeight;
// const innerHeights = window.innerHeight;
// const totalHeight = scrollHeight - innerHeights;

// window.addEventListener("scroll", function(){
//     const pageYoffset = window.pageYOffset;
//     const progressStyle = Math.round((pageYoffset / totalHeight) * 100);

//     progress.style.height = progressStyle + "%";
// })



window.addEventListener("scroll", function(){
    const progress = document.getElementById("progress");

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const totalHeight = scrollHeight - clientHeight;

    const progressStyle = Math.round((scrollTop / totalHeight) * 100);
    
    //two way used
    progress.style.height = progressStyle + "%";
    // progress.style.height = `${progressStyle}%`;
})