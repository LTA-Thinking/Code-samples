/*
 * This exercise is to show more examples of JavaScript basics.
 * Assignment: fill in the function at the end of each section and get the tests to pass.
 */

var display = document.getElementById("display");
function appendLine(text)
{
    display.innerHTML += text;
    display.innerHTML += "<br/><br/>";
}

/*************************** Conditionals *************************/

var data = Math.floor(Math.random()*10);

if ( data >= 5 )
{
    appendLine("Big half");
}
else
{
    appendLine("Small half");
}

var data2 = Math.floor(Math.random()*10);

if ( data >= 5 && data2 >= 5 )
{
    appendLine("Both big");
}
else if ( data >= 5 || data2 >= 5 )
{
    appendLine("One big");
}
else
{
    appendLine("Both small");
}

if ( data === 3)
{
    appendLine("Equals 3");
}

if ( data !== 7)
{
    appendLine("Not 7");
}

if ( data === 3 || (data <= 2 && data2 <= 2))
{
    appendLine("Special!");
}

if ( data > data2)
{

}

var test;

test = 5;
test = test * 2;

appendLine("TEST")

var outside = 5;
while(outside < 40)
{
    var inside = 5;
    inside = inside*2;
    outside = outside*2;
    appendLine("Inside: " + inside);
    appendLine("Outsite: " + outside);
}





// Takes in three values and returns the maximum value
// Example: maxOfThree(3, 6, 4) -> returns 4
//          maxOfThree(9, 2, 5) -> returns 9
function maxOfThree(param1, param2, param3)
{
}

/******************************* Loops *****************************/

appendLine("Loops");

for ( var index = 0; index < 10; index++ )
{
    appendLine(index);
}

for ( var index = 10; index > 0; index-- )
{
    appendLine(index);
}

appendLine("Fibonacci");
var fib1 = 1;
var fib2 = 1;
while (fib1 < 100)
{
    var nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
    appendLine(fib1);
}

while (true)
{
    break;
}

// Takes in one value and returns how many times it can be divided by 2 until the value is less than 1
// Example: binaryMagnitute(10) -> returns 4 (10 -> 5 -> 2.5 -> 1.25 -> 0.625)
//          binaryMagnitute(24) -> returns 5 (24 -> 12 -> 6 -> 3 -> 1.5 -> 0.75)
//          binaryMagnitute(16) -> returns 5 (16 -> 8 -> 4 -> 2 -> 1 -> 0.5)
function binaryMagnitute(param)
{
}

/******************************* Arrays *****************************/

appendLine("Arrays");

var list = [2, 4, 6, 8, 11];

appendLine("Length: " + list.length);
appendLine("Index 2: " + list[2]);

var nested = [list, ["hi", "bye"]];
appendList("Nested: " + nested[0][3]);


// Takes in an array and returns the value in the middle of the array, rounded down.
// Hint: Math.floor(value) will round a number down.
// Example: middle([1, 3, 5]) -> returns 3
//          middle([6, "hi", 2, "bye"]) -> returns "hi"
function middle(array)
{
}

/****************************** Objects *****************************/

var fruit = {
    name: "orange",
    type: "citris",
    color: "orange",
    daysUntilExpire: 7
};

appendLine(fruit.name);
appendLine(fruit["name"]);

var shelf = {
    item: fruit,
    location: "living room",
    width: 3,
    unit: "feet"
};

appendLine(shelf.item.color);

// Takes in an object with the properties of an address and returns a string with the properties formated into a single value.
// The input object will have the properties name, street, state, and zipcode.
// Example: formatAddress({name: "Smith", street: "104 Elm", state: "WY", zipcode: "12345"}) -> returns "Smith, 104 Elm, WY, 12345"
//          formatAddress({name: "Jones", street: "56 State", state: "HI", zipcode: "67890"}) -> returns "Jones, 56 State, HI, 67890"
function formatAddress(address)
{
}

