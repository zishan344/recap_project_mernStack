// basic problem
// problem 1
function market(money) {
  const apple = 150;
  const mango = 150;
  const totalPrice = apple + mango;
  const remainingPrice = money - totalPrice;
  return remainingPrice;
  // solved
}

// console.log(market(1000));

// problem 2

function avarageNumberWithTwoDecimals(a, b, c, d, e) {
  const avarageSubjectNumber = (a + b + c + d + e) / 5;
  const decimal = avarageSubjectNumber.toFixed(2);
  return parseFloat(decimal);
  // solved
}
// console.log(avarageNumberWithTwoDecimals(75.25, 65, 80, 35.45, 99.5));

// problem 3
function concat(a, b) {
  return a + " " + b;
  // solved
}
// console.log(concat("I am", "web developer"));

// problem 4
function remainder(a) {
  const number = a % 5;
  return number;
  // solved
}
// console.log(remainder(119));

{
  // array and if else statement using solve problem
  {
    // problem 1
    //  2 sub problem
    // 1 finding specific value index number
    const fruits = ["Apple", "Banana", "Orange"];
    // console.log(fruits.indexOf("Banana")); solved
    // 2 remove one value and add another value
    fruits.pop();
    fruits.push("Watermelon");
    // console.log(fruits); solved
  }
  {
    // problem 2 grading system
    /* 
grading condition
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
*/
    function gradeCondition(marks) {
      if (marks > 100) {
        return "maximum limit 100 please type correctly";
      }
      if (marks >= 80) {
        return "A grade";
      } else if (marks >= 60) {
        return "B grade";
      } else if (marks >= 50) {
        return "C grade";
      } else if (marks >= 40) {
        return "D grade";
      } else {
        return "F grade";
      }
    }

    // console.log(gradeCondition(2)); solved
  }
  {
    // problem 3
    // sub problem 2
    // 1 take 3 number and finding one largest number
    function largestNumberFinder(a, b, c) {
      // const largerNumber = Math.max(a, b, c);
      if (a > b) {
        if (a > c) {
          return a;
        } else {
          return c;
        }
      } else {
        if (b > c) {
          return b;
        } else {
          return c;
        }
      }
    }
    console.log(largestNumberFinder(300, 400, 75)); //solved by larger number

    // sub 2 matching triangle slide
    function solveTriangleSlide(a, b, c) {
      if (a == b || c == b || a == c) {
        return "two sides are equal";
      } else {
        return "not equal";
      }
    }
    // console.log(solveTriangleSlide(9, 8, 1)); solved triangle
  }
}
