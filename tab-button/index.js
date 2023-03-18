
const tabs = document.querySelectorAll(".tabs h3");
const tabContent = document.querySelectorAll(".part-content");

tabs.forEach((tab, index) =>{
    tab.addEventListener("click", () =>{
        tabContent.forEach(content =>{
            content.classList.remove("active");
        })
        tabs.forEach(tabBtn =>{
            tabBtn.classList.remove("active");
        })
        tabContent[index].classList.add("active");
        tabs[index].classList.add("active");
    })
})