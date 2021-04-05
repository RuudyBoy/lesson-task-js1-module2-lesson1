// Question 1

function receivingFunction (argument) {

console.log( "the type is a " + typeof argument);

if (typeof argument === "function") {
    argument ();

}
else {
    console.log("not a function");
}

}


const myFunction = function() {
    console.log("i am in the function");
}

receivingFunction(myFunction);


function callbackFunction () {
    console.log("i am a callbackFunction");
}

receivingFunction(callbackFunction);


// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(prize, index) {

    console.log(`Prize ${index + 1}: ${prize}`);

});


// Question 3

setTimeout(function() {

    console.log("I waited 5 seconds before executing");

}, 5000);


// Question 4

const interval = 1500;
let count = 0;
const limit = 4;

function logNumber() {
    // increase count's value by 1
    count++;

    // log count's current value
    console.log(count);

    // check whether to clear the setInterval
    if (count === limit) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(logNumber, interval);

