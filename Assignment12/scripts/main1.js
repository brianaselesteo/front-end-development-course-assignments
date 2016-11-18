function getElm(id){
return document.getElementById(id); }

var buttonsubmit= getElm("buttonsubmit");

buttonsubmit.addEventListener('click', update);
//////////
function update(){
  var errorMsg=[];
  var firstName=getElm("firstName");
  if (firstName.value === "") {
    errorMsg.push("First name is required")
    firstName.classList.add("errorClass");
  }else if (firstName.classList.remove("errorClass")) {

  }
  var lastName=getElm("lastName");
  if (lastName.value === "") {
    errorMsg.push("Last name is required")
    lastName.classList.add("errorClass");
  } else if (lastName.classList.remove("errorClass")) {

  }
  var Email=getElm("Email");
  if (Email.value === "") {
    errorMsg.push("Email name is required");
    Email.classList.add("errorClass");
  }else if(Email.value.indexOf("@")== -1 || Email.value.indexOf(".com") == -1){
  errorMsg.push("Valid Email is required")
  Email.classList.add("errorClass")
}

var password =getElm("password");
if (password.value === "") {
  errorMsg.push("Password is required")
  password.classList.add("errorClass");
}else if (password.classList.remove("errorClass")) {

}

var confirmPassword=getElm("confirmPassword");
if (confirmPassword.value === ""){
  errorMsg.push("Confirm password is required");
  confirmPassword.classList.add("errorClass");
}else if (confirmPassword.classList.remove("errorClass")) {

}

if(password.value !== ""
&& confirmPassword.value !== ""
&& password.value !== confirmPassword.value) {
  errorMsg.push("Passwords must match");
};


if (errorMsg.length >0){
  var html= "";
  for (var i = 0; i < errorMsg.length; i++) {
    html += errorMsg[i] + "<br/>";
  }

getElm("message").innerHTML = html;

};

console.log(errorMsg);
}

/////
var resetBtn = getElm("buttonreset");
resetBtn.addEventListener("click", reset);

function reset(){
var inputs = ["firstName", "lastName", "Email", "password", "confirmPassword"];

for(var i = 0; i < inputs.length; i++){
  getElm(inputs[i]).value= "";
  }

if (errorMsg.length < 0){alert ("page has been submitted")}

}




//var submit=function()var messages=[];
//
                /*var firstName = getElm('firstName');
                 if(firstName.value ===''){
               messages.push('first name is required');
                        }
                    var lastName=getElm('lastName');
if(lastName ===''){
    messages.push('last name is required');
} */


/*
var email = getElm("Email");
if (Email.value.indexOf("@") >-1 {
    mesages.push("A valid email is required");
email.classList.add(invalid);

var confirmPassword = getElm("confirmPassword");
var password = getElm("password");

if pasword.value !== confirmPassword.value {messages.push("Passwords do not match");}
    }
var reset= function(){console.log('reset');
                    }

for (var i = 0; i < inputs.length; i++){
    var elm= getElm(inputs[i]);
    if (elm.value==="")}{
    messages.push(elm.placeholder+ "is required");
    eml.classList.add(invalid);}
 else{
    elm.classlist.remove(invalid);
     }




*/
