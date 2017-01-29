$(document).ready(function () {

  function getElm(id){
  return document.getElementById(id); }

buttonsubmit.addEventListener("click", update);

 $('#yourName').on('blur', validateName);

  function validateName(){
    var errorMsg=[];
    var yourName=getElm("yourName");
    if (yourName.value === "") {
      errorMsg.push("Name is required")
      yourName.classList.add(".error");
    }else {

    (yourName.classList.remove(".error"))
  }

})
