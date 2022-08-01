 //TOPIC 1. Use Destructuring Assignment to
 // Extract Values from Objects

/* Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:*/

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

/*name would have a value of the string John Doe, 
and age would have the number 34.

Here's an equivalent assignment statement using the 
ES6 destructuring syntax:*/

//const { name, age } = user;

/*Again, name would have a value of the string John Doe, 
and age would have the number 34.

Here, the name and age variables will be created and
 assigned the values of their respective values from 
 the user object. You can see how much cleaner this is.

You can extract as many or few values from the object 
as you want.*/

//EXAMPLE OF OBJECT DESTRUCTURING
const HIGH_TEMPERATURE = {
  yesterday: 75,
  monday: 77,
  tuesday: 80
};

// Only change code below this line

// const monday = HIGH_TEMPERATURE.monday;
// const tuesday = HIGH_TEMPERATURE.tuesday;

// DESTRUCTURE THIS ASSIGNMENT TO EXTRACT VALUES FROM
//OBJECT


  // Only change code below this line
  
  
  const {monday, tuesday} = HIGH_TEMPERATURE;
  
  // Only change code above this line






  //TOPIC 2. Use Destructuring Assignment to 
  //Assign Variables from Objects

/*  Destructuring allows you to assign a new variable 
name when extracting values. You can do this by putting 
the new name after a colon when assigning the value.

Using the same object from the last example:

PRACTICE*/

const data = { name: 'John Doe', age: 34 };

/*Here's how you can give new variable names in the assignment:*/

const { name: dataName, age: dataAge } = data;

/*You may read it as "get the value of data.name and assign 
it to a new variable named dataName" and so on. 
The value of dataName would be the string John Doe, 
and the value of dataAge would be the number 34.*/




//EXERCISE

const HIGH_TEMP = {
    yesterday: 75,
    saturday: 77,
    sunday: 80
  };
  
  // Only change code below this line
    
//   const highSaturday = HIGH_TEMP.saturday;
//   const highSunday = HIGH_TEMP.sunday; 
  
  // Only change code above this line


//QUESTION
/*Replace the two assignments with an equivalent destructuring
 assignment. It should still assign the variables highToday 
 and highTomorrow the values of today and tomorrow from 
 the HIGH_TEMPERATURES object.*/



 // DESTRUCTURING VARIABLES

 const { saturday: highSaturday, sunday: highSunday} = HIGH_TEMP;





 //TOPIC 3. Use Destructuring Assignment to Assign 
 //Variables from Nested Objects

/*You can use the same principles from the previous 
two lessons to destructure values from nested objects.

Using an object similar to previous examples:*/

const id = {
  johnID: { 
    years: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
/*
Here's how to extract the values of object properties 
and assign them to variables with the same name:*/

const { johnID: { years, email }} = id;

/*
And here's how you can assign an object properties'
 values to variables with different names:*/

const { johnID: { years: userYears, email: userEmail }} = id;


//QUESTION

/*Replace the two assignments with an equivalent destructuring
 assignment. To assign an object properties'
 values to variables with different names
 
 It should still assign the variables lowWedsnesday and
  highWednesday the values of today.low and today.high from the 
  LOCAL_FORECAST object.*/

  //PRACTICE OTHERS


//SOLUTION
 const LOCAL_FORECAST = {
    tuesday: { low: 61, high: 75 },
    wednesday: { low: 64, high: 77 },
    thursday: { low: 68, high: 80 }
  };
  
  // Destructure the object to get variable
    
    const {wednesday: {low: lowWednesday, high: highWednesday }} = LOCAL_FORECAST;
  
  
  // Only change code above this line

  //DESTRUCTURE tuesday to assign variables of different names.
  //lowYesterday and highYesterday

  const { tuesday: {low: lowTuesday, high: highTuesday}} = LOCAL_FORECAST;

  //DESTRUCTURE thursday to assign variables of different names.
  //lowThursday and highThursday

  const { thursday: {low: lowThursday, high: highThursday}} = LOCAL_FORECAST;







  //TOPIC 4. Use Destructuring Assignment to Assign
  // Variables from Arrays

/* ES6 makes destructuring arrays as easy as destructuring
 objects.

One key difference between the spread operator and array destructuring 
is that 

1. the spread operator unpacks all contents of an array 
into a comma-separated list. 

2. Making it hard, you cannot pick or choose which elements 
you want to assign to variables.

//BUT 
Destructuring an array lets us do exactly that:*/

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//The console will display the values of a and b as 1, 2.

/*
The variable a is assigned the first value of the array, 
and b is assigned the second value of the array. 

//IMPORTANT

We can also access the value at any index in an array 
with destructuring by using commas to reach the desired index:*/

const [c, d,,, h] = [1, 2, 3, 4, 5, 6];
console.log(c, d, h);

/*
The console will display the values of c, d, 
and h as 1, 2, 5.

//EXEERCISE
Use destructuring assignment to swap the values 
of e and f so that 

e receives the value stored in f, 
and f receives the value stored in e.

*/

//SOLUTION

let e = 8, f = 6;
// Only change code below this line

[e, f] = [f, e];
console.log(e, f);






//TOPIC 5. Use Destructuring Assignment with 
//the Rest Parameter to Reassign Array Elements

/*
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.


//EXERCISE

Use destructuring assignment with the rest parameter to
 perform an effective Array.prototype.slice() so that arr 
 is a sub-array of the original array source with the first
  two elements omitted.*/


  //SOLUTION


  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
  }
  const arr = removeFirstTwo(source);
  console.log(arr); // [3,4,5,6,7,8,9,10]
  console.log(source);



//Problem Explanation
/*
Remember that the rest parameter allows for 
variable numbers of arguments. In this challenge, 
you have to get rid of the first two elements of an array.

Hints
Hint 1
Assign the first two elements to two random variables.

Hint 2
Set the remaining part of the array to ...arr.

Hint 3
Use destructuring to create the arr variable:

function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [arr] = list; // change this
  // change code above this line
  return arr;
}
Hint 4:
Spread the list parameter values into arr.

function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [...arr] = list; // change this
  // change code above this line
  return arr;
}
You can use random variables to omit the first two values:

Solutions
Solution 1 (Click to Show/Hide)

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];*/




//TOPIC 6. Use Destructuring Assignment to 
//Pass an Object as a Function's Parameters

/*
In some cases, you can destructure the object in a 
function argument itself.

Consider the code below:*/

//const profileUpdate = (profileData) => {
  //const { name, age, nationality, location } = profileData;

//}

/*
This effectively destructures the object sent into the function*/ 
//This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {

}
/*When profileData is passed to the above function, 
the values are destructured from the function parameter 
for use within the function.

Use destructuring assignment within the argument 
to the function half to send only max and min inside the*/



//EXERCISE


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  //const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Only change code above this line

//DESTRUCTURING 

const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line

 console.log(half(stats)) // 28.015

