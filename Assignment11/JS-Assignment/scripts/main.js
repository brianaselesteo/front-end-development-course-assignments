function update() {
var firstName = getValue("firstName");
console.log(firstName)
var lastName = getValue("lastName");
console.log(lastName)
var emailAddress = getValue("emailAddress");
console.log(emailAddress)


var msg = [];


if (firstName == ""){msg.push("First Name is required");}
if (lastName == ""){msg.push("Last name is required");}
if (emailAddress == ""){msg.push("Email is required");}
console.log(msg)



var errElm = getElm("error-list");

for(var i = 0; i < msg.length; i++){
    errElm.innerHTML += msg[i] + "<br/>";
}
    


var user = {
    first: firstName,
    last: lastName,
    email: emailAddress, 
           }

user.fullname = function(){
    return this.first + " " + this.last;
};
    
 if(msg.length === 0){
        alert("submitted")
        console.log("submitted");
 }













};
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
