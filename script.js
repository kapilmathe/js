var date = new Date();
document.body.innerHTML = "<h1>Today : " + date + "</h1>";

var a = 4
var b = "4"
var sum = a+b

c = 9 // this has global scop if not defined by var keyword

if (a===b) {
  sum = true
} else {
  sum = false
}

var pens;
pens = ["red", "blue", "green"];
pens2 = new Array("red", "green", false, 23);

console.log(pens)
console.log(pens2)
console.log(pens[2])
var result = pens.indexOf("green", 0)
console.log(result)
// methods and properties of Array
console.log(pens.reverse());
console.log(pens.shift());
pens.pop()
console.log(pens)
pens.splice(0,1)
console.log(pens)

var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
// console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
// pens.reverse();

// Remove the first value of the array:
// pens.shift();

// Add comma-separated list of values to the front of the array:
// pens.unshift("purple", "black");

// Remove the last value of the array:
// pens.pop();

// Add comma-separated list of values to the end of the array:
// pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.

// console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
// var newPens = pens.slice();
// console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = pens.indexOf(search, index);
// console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
// console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())


function findBiggestFraction(a,b) {
  a>b?console.log("a: ", a):console.log("b: ", b) ;
}
var a = 3/4
var b= 5/7

findBiggestFraction(b,a)
//Anonymous function
var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9,13/25));
// invoke Immediately
var theBiggest2 = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(7/8, 12/25)
console.log(theBiggest2);


// Const and Let

const MYCONSTANT = 433
console.log(MYCONSTANT);
// MYCONSTANT = 3

// Let block scop variable
function logScope() {
  var localVar = 2
  if (localVar) {
    let localVar = "I am different"
    console.log("nestted localVar :", localVar);
  }
  console.log("locScope localvar: ",localVar);
}
logScope()



var course = new Object();
course.title = "Java script essential  training"
course.instructor = 'Kapil Mathe'
course.level = 1
course.published = true
course.view = 0

var course = {
  title: "the title",
  instructor: "Kapil Mathe",
  level: 1,
  published: true,
  views: 0,
  updateView: function() {
    return ++course.views
  }
}
console.log(course);
course.updateView()


function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateView = function() {
    return ++course.views
  };
}

var course02 = new Course("JS", "KM", 2, false);
//Closure

function doSomeMath() {
  var x= 4
  var y =23
  function multiply() {
    var result = x*y
    return result
  }
  return multiply
}

var resultddd = doSomeMath()

console.log("The result = :", resultddd(0));
