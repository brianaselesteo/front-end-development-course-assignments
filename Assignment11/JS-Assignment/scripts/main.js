function update() {
var firstName = getValue("firstName");
console.log(firstName)
var lastName = getValue("lastName");
console.log(lastName)
var emailAddress = getValue("emailAddress");
console.log(emailAddress)
var messages = [];


if (firstName == ""){messages.push("First Name is required");}
if (lastName == ""){messages.push("Last name is required");}
if (emailAddress == ""){messages.push("Email is required");}
console.log(messages)

var html = '<br>'
for(var i = 0; i < messages.length; i++){
    html= html + messages[i] + '<br>'
}

getElm("error-list").innerHTML = html

var user = {firstName: firstName ,
lastName: lastName ,
email: emailAddress ,
fullName return this.firstName + " " + this.lastName;}













}
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
