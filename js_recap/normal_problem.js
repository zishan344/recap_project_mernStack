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
    // console.log(largestNumberFinder(300, 400, 75)); //solved by larger number

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

{
  // find tallest number and lowest number of array elements,
  const array = [20, 80, 70, 50, 30, 90, 80, 5, 400];
  function tallestNumber(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
      if (result < number[i]) {
        result = number[i];
      }
    }
    // console.log(result);
  }
  // tallestNumber(tallestArray);
  // find smaller number and lowest number of array elements
  function smallerNumber(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
      // console.log(i);
      if (result === 0) {
        result = number[i];
      } else if (number[i] < result) {
        result = number[i];
      }
    }
    console.log(result);
  }

  // smallerNumber(array);

  /* reverse string
   */
  function reverseString(str) {
    const reverseStrArr = str.split("");
    const fullStrArr = [];
    for (let i = reverseStrArr.length - 1; i >= 0; i--) {
      const value = reverseStrArr[i];
      fullStrArr.push(value);
    }
    return fullStrArr.join(" ");
  }
  function reverseWord(str) {
    const reverseStrArr = str.split(" ");
    const fullStrArr = [];
    for (let i = reverseStrArr.length - 1; i >= 0; i--) {
      const value = reverseStrArr[i];
      fullStrArr.push(value);
    }
    return fullStrArr.join(" ");
  }
  const string = "I am a string";
  // console.log(reverseString(string));
  // console.log(reverseWord(string));

  // Fibonacci
  function fibNumber(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib);
  }
}
// fibNumber(15);
// duplicate chacker
const arr = [1, 2, 56, 30, 60, 2, 8, 1, 5, 3, 1];
function duplicateChacker(number) {
  const pure = [];
  for (let i = 0; i < number.length; i++) {
    if (!pure.includes(number[i])) {
      pure.push(number[i]);
    }
  }

  console.log(pure);
}

// duplicateChacker(arr);

//  foo bar

function fooBar(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "foobar";
  } else if (num % 3 == 0) {
    return "foo";
  } else if (num % 5 == 0) {
    return "bar";
  } else {
    return "can't manage this number";
  }
}
// console.log(fooBar(12));
