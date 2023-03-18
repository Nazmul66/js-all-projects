
const icons = document.getElementById('icon');

icons.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
     if(document.body.classList.contains("dark-theme")){
        icons.classList.replace("fa-sun", "fa-moon")
     }
     else{
        icons.classList.replace("fa-moon", "fa-sun")
     }
})

