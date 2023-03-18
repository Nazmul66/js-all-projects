
const inputBox = document.getElementById("textBox");
const character = document.getElementById("charecter");

inputBox.addEventListener("input", () =>{
    let inputBoxValue = (inputBox.value).length;
    character.innerText = `Total characters : ${inputBoxValue}`; 
})