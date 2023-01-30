_________________________________

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


