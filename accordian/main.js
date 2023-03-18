// #### 1st method to solve this accordion


// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item, index) =>{
//      let title = item.querySelector(".title");
//      title.addEventListener("click", function(){
//         item.classList.toggle("open");

//         let pageTitle = item.querySelector(".page-title");
//         if(item.classList.contains("open")){
//             pageTitle.style.height = `${pageTitle.scrollHeight}px`;
//             item.querySelector("i").classList.replace("fa-plus","fa-minus");
//         }
//         else{
//             pageTitle.style.height = `0px`;
//             item.querySelector("i").classList.replace("fa-minus","fa-plus");
//         }

//         accordionContent.forEach((item2, index2) =>{
//             if(index != index2){
//              item2.classList.remove("open");
     
//              let pageTitle2 = item2.querySelector(".page-title");
//              pageTitle2.style.height = "0px";
//              item2.querySelector("i").classList.replace("fa-minus","fa-plus");
//             }
//          })

//      })
// }) 



// #### 2nd method to solve this accordion

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) =>{
     let title = item.querySelector(".title");
     title.addEventListener("click", function(){
        item.classList.toggle("open");

        let pageTitle = item.querySelector(".page-title");
        if(item.classList.contains("open")){
            pageTitle.style.height = `${pageTitle.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }
        else{
            pageTitle.style.height = `0px`;
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
        removeOpen(index);
     })
}) 


const removeOpen = (index1) =>{
    accordionContent.forEach((item2, index2) =>{
       if(index1 != index2){
        item2.classList.remove("open");

        let pageTitle2 = item2.querySelector(".page-title");
        pageTitle2.style.height = "0px";
        item2.querySelector("i").classList.replace("fa-minus","fa-plus");
       }
    })
}