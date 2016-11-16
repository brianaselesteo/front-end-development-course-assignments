var array = [];
function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
document.getElementById('p1_fullName').innerHTML = firstName + ' ' + lastName
var isValidname = true;
var notValidname = false;
if (firstName == "" || lastName == "") {getElm("p1_valid").innerHTML= notValidname
} else {getElm ("p1_valid").innerHTML= isValidname}
var namelength = (firstName+lastName).length;
getElm("p1_fullNameLength").innerHTML = namelength

/* Dans way---

var isFnameValid = firstName.length > 0;
var isLnameValid = lastName.length >0;
var isFullValid = (isFnameValid === true && is LnameValid true);
var fullname = firstname + " " + lastName;
var firstNameInput = getElm ('firstName');
 
 if (isFnameValid === false){firstNameInput.classList.add ('invalid');} else {
     firstNameInput.classlist.remove('invalid');
 }
*/
    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    getElm("p2_email").innerHTML = emailAddress

    var isValidEmail = (emailAddress.indexOf('@') > -1);
    getElm("p2_valid").innerHTML = isValidEmail;

var emaillength = (emailAddress).length;
getElm("p2_emailLength").innerHTML = emaillength

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
getElm("p3_number").innerHTML = randomNumber;
    
var parsedNum = parseInt(randomNumber);

var isValidNumber;
    if(parsedNum > 0){
        isValidNumber = false;
    } else{
        isValidNumber = true;
    }
 getElm("p3_valid").innerHTML = isValidNumber;
    console.log(randomNumber);


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    array.push(arrayInput);
    getElm("p4_arraylength").innerHTML = array.length;
    
    getElm("p4_valid").innerHTML = array;
    
    












    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}