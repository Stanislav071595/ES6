

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

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
______________________________________

function removeFirstTwo(list) {
  // Only change code below this line
 const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
______________________________________

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => {
  return (max + min) / 2.0;
}; 
// Only change code above this line
______________________________________

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return ({ name, age, gender });

  var zodiac = createPerson("Zodiac Hasbro", 56, "male");
  // Only change code above this line
};
______________________________________

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
______________________________________



