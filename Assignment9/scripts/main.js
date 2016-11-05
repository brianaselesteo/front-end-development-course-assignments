function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

/**part one */
var name = 'Briana olson';
document.getElementById ('partOne').innerHTML = name;

/** part two*/
var foo = "I forgot to do this"
 var foo = 'This is not an integer';
document.getElementById ('partTwo').innerHTML = foo;

/**part three */

var partThree = 5; 
partThree *= 14;
partThree += 10;
partThree -= 25;
document.getElementById ('partThree').innerHTML = partThree;

/** part four */
var fullName = 'fname' + ' ' + 'lname';
document.getElementById('partFour').innerHTML = fullName;


/**part five */

var myHtml = '';
myHtml = '<h2> Title </h2>'
myHtml += '<p> Lorem ipsum dolor </p>'
myHtml += '<h3>Pellentesque habitant morbi </h3>'
myHtml += '<p> Morbi in sem quis dui placerat ornare </p>'
document.getElementById ('partFive') .innerHTML = myHtml;

/** part six */

var part6Number = getRandomNumber ()
var part6Result
if (part6Number > 50) {document.getElementById('part6Result').innerHTML = 'Above 50'
}  else if ( part6Number <= 50){ document.getElementById('part6Result').innerHTML = 'Below or equal to 50'
} 
document.getElementById('part6Number').innerHTML = part6Number;



/**
 *      Part 7
 */
var part7Number = getRandomNumber();
var part7Result 
if (part7Result < 25) {document.getElementById('part7Result').innerHTML = 'Below 25'}
else if (part7Number >=25 && part7Number <50 ) {document.getElementById('part7Result').innerHTML = 'Between 25 and 50'}
else if ( part7Number >= 50 && part7Number < 75 ) {document.getElementById('part7Result').innerHTML = 'Between 50 and 75'}
else {document.getElementById('part7Number').innerHTML = 'Above 75'}





////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
