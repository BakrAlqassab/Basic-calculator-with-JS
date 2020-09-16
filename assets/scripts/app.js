const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = [];
function getUserNumberInput() {
  return parseInt(userInput.value);
}


// Generate and writes calculation log
function createandWriteOutput(operator, resultBeforecalc, calcNumber) {
  const calcDesecription = `${resultBeforecalc} ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDesecription);
}

function logEntryFunction(
  operationIdentifier,
  calculatedResult,
  declaredNumber,
  operatedResult,
) {
  // create  object to collect the data
  const logEntry = {
    operation: operationIdentifier,
    previousResult: calculatedResult,
    insertedNumber: declaredNumber,
    result: operatedResult,
  };

  // Array to store the object in
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function addNumber() {
  const enteredNum = getUserNumberInput();

  if (userInput.value == '') {
    console.log(' Empty text Field!!! ');
    alert('Please insert value!');
    return;
  }

  const initialResult = currentResult;
  /* gets inputs from input feild and parse it to integer  */
  currentResult += +enteredNum;
  // retreived from Vendor.js file
  createandWriteOutput(' + ', initialResult, enteredNum);

  // function include the Object and the array to avoid repetation
  logEntryFunction(' ADD  ', initialResult, enteredNum, currentResult);
}

function subtractNumber() {
  const enteredNum = getUserNumberInput();

  if (userInput.value == '') {
    console.log(' Empty text Field!!! ');
    alert('insert value :)');
    return;
  }
  const initialResult = currentResult;

  currentResult -= +enteredNum;

  createandWriteOutput(' - ', initialResult, enteredNum);

  logEntryFunction(' SUBTRACT ', initialResult, enteredNum, currentResult);
}

function multiplyNumber() {
  const enteredNum = getUserNumberInput();
  if (userInput.value == '') {
    console.log(' Empty text Field!!! ');
    alert('insert value :)');
    return;
  }

  const initialResult = currentResult;

  currentResult *= +enteredNum;
  createandWriteOutput(' * ', initialResult, enteredNum);

  logEntryFunction(' MULTIPLY ', initialResult, enteredNum, currentResult);
}

function devidedNumber() {
  const enteredNum = getUserNumberInput();
  if (userInput.value == '') {
    console.log(' Empty text Field!!! ');
    alert('insert value :)');
    return;
  }

  const initialResult = currentResult;

  currentResult /= +enteredNum;

  createandWriteOutput(' / ', initialResult, enteredNum);

  logEntryFunction(' DEVISION ', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', addNumber);

subtractBtn.addEventListener('click', subtractNumber);

multiplyBtn.addEventListener('click', multiplyNumber);

divideBtn.addEventListener('click', devidedNumber);
