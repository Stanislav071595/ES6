/* ES6 */
______________________________________

function checkScope() {
  let i = 'function scope';
  if (false) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
______________________________________

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
______________________________________

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
______________________________________

const magic = () => new Date();
______________________________________

const myConcat = (arr1, arr2) => arr1.concat(arr2)


console.log(myConcat([1, 2], [3, 4, 5]));
______________________________________

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
______________________________________

const sum = (...args) => {

  return args.reduce((a, b) => a + b, 0);
}
______________________________________

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
______________________________________

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line
______________________________________

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
______________________________________

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday}} = LOCAL_FORECAST; 
const { today: { high: highToday}} = LOCAL_FORECAST;



// Only change code above this line
______________________________________


