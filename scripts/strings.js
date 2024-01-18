var output = document.querySelector("p");
output.textContent = 10;
/* STEP 1: Creating Strings */
var string1 = "Hello! How are you?";
output.textContent = string1;

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
var string2 = 'It\'s cold in here';
var string2 = "It's cold in here";
output.textContent = string2;

/* STEP 3: Concatenation */
output.textContent = string1 + " " + string2 + 50;
output.textContent = 50 + 50 + "hello";
output.textContent = "hello" + 50 + 50 + 1 + 2 + 3;

/* STEP 4: Numbers and Strings */

// numbers can be converted to strings
output.textContent = "50" + 50;

// strings can be converted to numbers, too
var final = "50";
output.textContent = 50 + Number(final);

// and back again, if we want
var final = 50;
output.textContent = final.toString() + String(final);