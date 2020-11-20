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



  function calculate(operation) {
    const enteredNum = getUserNumberInput();

    if (userInput.value == '') {
      console.log(' Empty text Field!!! ');
      alert('insert value :)');
      return;
    }
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
      operator ="+";
      currentResult += +enteredNum;
      // retreived from Vendor.js file
      // createandWriteOutput(' + ', initialResult, enteredNum);

      // // function include the Object and the array to avoid repetation
      // logEntryFunction(' ADD  ', initialResult, enteredNum, currentResult);
    } else if (operation === 'SUBTRACT') {
      operator ="-"
      currentResult -= +enteredNum;

    
    } else if (operation === 'MULTIPLY') {
      operator ="*";
      currentResult *= +enteredNum;
    
    } else if (operation === 'DIVIDE') {
      operator = "/";
      currentResult /= +enteredNum;
    
    }

      createandWriteOutput(operator, initialResult, enteredNum);

      logEntryFunction(operation, initialResult, enteredNum, currentResult);
  


  createandWriteOutput(' / ', initialResult, enteredNum);

  logEntryFunction(' DEVISION ', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this,"ADD"));

subtractBtn.addEventListener('click',  calculate.bind(this,"SUBTRACT"));

multiplyBtn.addEventListener('click',  calculate.bind(this,"MULTIPLY"));

divideBtn.addEventListener('click',  calculate.bind(this,"DIVIDE"));
