const boxContainer = document.querySelector(".boxcontainer");
const boxNumber = document.querySelectorAll(".box");
const boxValue = document.querySelector(".values");
console.log(boxValue);
const boxSolution = document.querySelector(".solution");
const multiply = document.querySelector(".boxx");
const divide = document.querySelector(".box÷");
const add = document.querySelector(".boxadd");
const substract = document.querySelector(".box-");
const operators = document.querySelectorAll(".operator");
const equalOperator = document.querySelector(".boxequal");
const boxC = document.querySelector(".boxC");

let clear = false;
let counter = 1;
let operatorCalc;
let number1,
  number2 = 0;

boxNumber.forEach((box) => {
  box.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.textContent);
    // console.log(boxValue.textContent)

    if (counter === 1) {
      number1 = boxValue.value += e.target.textContent;
    }
    if (clear) {
      boxValue.value = "";
      clear = false;
    }
    if (counter === 2) {
      number2 = boxValue.value += e.target.textContent;
    }
    console.log(boxValue.value);
    console.log(number1);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    // console.log(e.target.textContent)
    if (number2 !== 0) {
      calculator();
      boxValue.value = "";
      number1 = boxSolution.value;
      number2 = 0;
      counter = 2;
    }
    if (!number2) {
      clear = true;
      counter = 2;
      console.log(operatorCalc);
    }
    operatorCalc = e.target.textContent === "÷" ? "/" : e.target.textContent;
  });
});

// boxSolution.value = ''
const calculator = function () {
  // +number1 operatorCalc +number2
  if (operatorCalc === "+") {
    boxSolution.value = +number1 + +number2;
  }
  if (operatorCalc === "-") {
    boxSolution.value = +number1 - +number2;
  }
  if (operatorCalc === "/") {
    boxSolution.value = +number1 / +number2;
  }

  if (operatorCalc === "x") {
    boxSolution.value = +number1 * +number2;
  }
};

equalOperator.addEventListener("click", function () {
  calculator();
  boxValue.value = "";
  number1 = boxSolution.value;
  number2 = 0;
});
const clearField = function () {
  boxC.addEventListener("click", function () {
    boxValue.value = "";
    boxSolution.value = "";
    number2 = number1 = 0;
    counter = 1;
  });
};

clearField();
