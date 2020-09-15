const defaultResult = 0;

let currentResult = defaultResult;
function getUserNumberInput() {
  return parseInt(userInput.value);
}
// Generate and writes calculation log
function createandWriteOutput(operator, resultBeforecalc, calcNumber) {
  const calcDesecription = `${resultBeforecalc} ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDesecription);
}

function addNumber() {
  const enteredNum = getUserNumberInput();

/* gets inputs from input feild and parse it to integer  */
  currentResult = +currentResult + +enteredNum;
  const initialResult = currentResult;

  // retreived from Vendor.js file
  createandWriteOutput(" + ", initialResult, enteredNum);
}

function subtractNumber() {
  const enteredNum = getUserNumberInput();

  const initialResult = currentResult;

  currentResult = +currentResult - +enteredNum;

  createandWriteOutput(" - ", initialResult, enteredNum);
}

function multiplyNumber() {
  const enteredNum = getUserNumberInput();

  const initialResult = currentResult;

  currentResult = +currentResult * +enteredNum;
  createandWriteOutput(" * ", initialResult, enteredNum);
}

function devidedNumber() {
  const enteredNum = getUserNumberInput();

  const initialResult = currentResult;

  currentResult = +currentResult / +enteredNum;

  createandWriteOutput(" / ", initialResult, enteredNum);
}

addBtn.addEventListener("click", addNumber);

subtractBtn.addEventListener("click", subtractNumber);

multiplyBtn.addEventListener("click", multiplyNumber);

divideBtn.addEventListener("click", devidedNumber);
