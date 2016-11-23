function getElm(id){
return document.getElementById(id); }

document.getElementById('btnSubmit').addEventListener('click', submit);

function getValue(id) {
    return getElm(id).value;
}
///////////
var firstName = getValue("firstName");
var lastName = getElm("lastName");
var Email = getElm("Email");
var how = getElm("how");
var why = getElm("why");
var terms = getElm("terms");

console.log(terms.checked);

function submit() {

var errorMsg=[];

  var firstName=getElm("firstName");
  if (firstName.value === "") {
    errorMsg.push("First name is required")
    firstName.classList.add("errorClass");
  }
  else if (firstName.classList.remove("errorClass")) {
  };

if (lastName.value === ""){
  errorMsg.push("Last name is required")
  lastName.classList.add("errorClass");
} else if (lastName.classList.remove("errorClass")) {
}



if (Email.value === "") {
  errorMsg.push("Email is required");
  Email.classList.add("errorClass");
}else if(Email.value.indexOf("@")== -1 || Email.value.indexOf(".com") == -1){
errorMsg.push("Valid Email is required")
Email.classList.add("errorClass")
} else {
  Email.classList.remove("errorClass")
}

if (how.value==="1"){errorMsg.push("How did you find out about us?")
how.classList.add("errorClass")
}else if(how.classList.remove("errorClass")) {

}

if (why.value===""){errorMsg.push("Tell us why you need this blender")
why.classList.add("errorClass")
}else if (why.classList.remove("errorClass")) {

}

if (terms.checked == false ) {errorMsg.push("Terms and conditions is required")
terms.classList.add("errorClass");
}



console.log(errorMsg);

var html= "<ul><li>";
if (errorMsg.length >0){
    html += errorMsg.join("</li><li>") + "</li></ul>";
  } else {
    html = "Thank you for your submission";
  }


getElm("error").innerHTML = html;

}







/*  */
