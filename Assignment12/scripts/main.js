var submit=function()var messages=[];
var inputs = ["firstName, lastName, email, password, confrimPassword"];
                /*var firstName = getElm('firstName');
                 if(firstName.value ===''){
               messages.push('first name is required');
                        }
                    var lastName=getElm('lastName');
if(lastName ===''){
    messages.push('last name is required');
} */




 }
var email = getElm("email");
if (email.value.indexOf("@") >-1 {
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



var buttonsubmit= getElm("buttonsubmit");
buttonsubmit.addEventListener('click', submit);
    
var buttonreset= getElm("buttonreset");
buttonreset.addEventListener('click', reset);
    

    
    
    
    function getElm(id){
        return document.getElementById(id);
    }