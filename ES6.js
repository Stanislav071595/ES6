

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



