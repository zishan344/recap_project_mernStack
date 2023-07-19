const computer = {
  name: "Lenovo",
  hdd: "1 TB",
  ssd: " 256GB",
  processor: "core i5",
};

let keys = Object.keys(computer);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  const value = computer[keys[i]];
  // console.log(keys[i], value);
}

// for in loop
for (keys in computer) {
  const value = computer[keys];
  // console.log(keys, value);
}

// trying some proble in js
// leap year

function testLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return `leap year ${year}`;
  } else {
    return `Not leap year ${year}`;
  }
}
// console.log(testLeapYear(1942));

// factorial
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(7));
