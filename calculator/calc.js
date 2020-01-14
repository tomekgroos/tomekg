const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;

    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '%': (firstOperand, secondOperand) => firstOperand % secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand
};

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

// wprowadzanie wartości z klawiatury

window.addEventListener("keydown", checkPressedKey);

function checkPressedKey(key){

// wprowadzanie cyfr

    if (key.keyCode == "48" || key.keyCode == "96"){

        inputDigit(key.value = "0");
    }

    if (key.keyCode == "49" || key.keyCode == "97"){

        inputDigit(key.value = "1");
    }

    if (key.keyCode == "50" || key.keyCode == "98"){

        inputDigit(key.value = "2");
    }

    if (key.keyCode == "51" || key.keyCode == "99"){

        inputDigit(key.value = "3");
    }

    if (key.keyCode == "52" || key.keyCode == "100"){

        inputDigit(key.value = "4");
    }

    if (key.keyCode == "53" || key.keyCode == "101"){

        inputDigit(key.value = "5");
    }

    if (key.keyCode == "54" || key.keyCode == "102"){

        inputDigit(key.value = "6");
    }

    if (key.keyCode == "55" || key.keyCode == "103"){

        inputDigit(key.value = "7");
    }

    if (key.keyCode == "56" || key.keyCode == "104"){

        inputDigit(key.value = "8");
    }

    if (key.keyCode == "57" || key.keyCode == "105"){

        inputDigit(key.value = "9");
    }

// wprowadzanie operatorów

if (key.keyCode == "187" || key.keyCode == "107"){

    handleOperator(key.value = "+");
}

if (key.keyCode == "189" || key.keyCode == "109"){

    handleOperator(key.value = "-");
}

if (key.keyCode == "106"){

    handleOperator(key.value = "*");
}

if (key.keyCode == "191" || key.keyCode == "111"){

    handleOperator(key.value = "/");
}

// znak modulo pod przyciskiem 'm'

if (key.keyCode == "77"){

    handleOperator(key.value = "%")
}

// znak rownosci po enter

if (key.keyCode == "13"){

    handleOperator(key.value = "=");
}

// wprowadzanie przecinka

if (key.keyCode == "190" || key.keyCode == "110" ){

    inputDecimal(key.value = ".");
}

// czyszczenie ekranu pod delete

if (key.keyCode == "46"){

    resetCalculator();
}

    updateDisplay();
}