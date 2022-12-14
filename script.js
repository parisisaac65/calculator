let displayValue = '';
let completeNum = '';
let currNum = ''; 
let firstCompleteNum = '';
let secondCompleteNum = ''; 
let operator = '';
let firstOperator = false;
let secondOperator = false;
let solution = '';
let decimalClicked = false; 

const display = document.querySelector('.display'); 

//Add functions for all the basic math operators 

const add = function(a,b){
    return a + b; 
};

const subtract = function(a,b){
    return a - b; 
};

const multiply = function(a,b){
    return a * b; 
};

const divide = function(a,b){
    return a / b; 
};

const operate = function(sign, a, b){
    if(sign == '+') return add(a,b); 
    if(sign == '-') return subtract(a,b); 
    if(sign == '*') return multiply(a,b);
    if(sign == '/') return divide(a,b);  
};


//Add event listeners to all digit buttons (including decimal button)

const zeroBtn = document.querySelector('.zero-btn');
zeroBtn.addEventListener('click', () => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 0;
    populateDisplay(displayValue); 
}); 

const oneBtn = document.querySelector('.one-btn');
oneBtn.addEventListener('click', () => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 1;
    populateDisplay(displayValue); 
}); 

const twoBtn = document.querySelector('.two-btn');
twoBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 2;
    populateDisplay(displayValue);
});

const threeBtn = document.querySelector('.three-btn');
threeBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 3;
    populateDisplay(displayValue);
});

const fourBtn = document.querySelector('.four-btn');
fourBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 4;
    populateDisplay(displayValue);
});

const fiveBtn = document.querySelector('.five-btn');
fiveBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 5;
    populateDisplay(displayValue);
});

const sixBtn = document.querySelector('.six-btn');
sixBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 6;
    populateDisplay(displayValue);
});

const sevenBtn = document.querySelector('.seven-btn');
sevenBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 7;
    populateDisplay(displayValue);
});

const eightBtn = document.querySelector('.eight-btn');
eightBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 8;
    populateDisplay(displayValue);
});

const nineBtn = document.querySelector('.nine-btn');
nineBtn.addEventListener('click',() => {
    if (firstOperator == true && secondOperator == true){
        clearDisplay();
    }
    displayValue = 9;
    populateDisplay(displayValue);
});

const decimalBtn = document.querySelector('.decimal-btn');
decimalBtn.addEventListener('click',() => {
    if (decimalClicked == false){
        displayValue = '.';
        populateDisplay(displayValue);
        decimalClicked = true;
    }
    else {
        return;
    }
});

// Add event listeners to all operator buttons 

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    // if the operator button is pressed for the first time, set the firstCompleteNum = completeNum
    if (!firstCompleteNum) {
        firstCompleteNum = completeNum;
        operator = '+';
        clearDisplay();
        firstOperator = true; 
    }
    // if the operator button is pressed for the second time, set the secondCompleteNum = completeNum, 
    // evaluate firstCompleteNum and secondCompleteNum, display the solution and then set firstCompleteNum = solution
    else if (firstCompleteNum){
        secondCompleteNum = completeNum;
        displaySolution();
        console.log(solution); 
        firstCompleteNum = solution;
        operator = '+'; 
        secondOperator = true; 
    }
});

const subtractBtn = document.querySelector('.subtract-btn');
subtractBtn.addEventListener('click', () => {
    if (!firstCompleteNum) {
        firstCompleteNum = completeNum;
        operator = '-';
        clearDisplay();
        firstOperator = true; 
    }
    else if (firstCompleteNum){
        secondCompleteNum = completeNum;
        displaySolution();
        firstCompleteNum = solution;
        console.log(solution); 
        operator = '-'; 
        secondOperator = true; 
    }
});

const multiplyBtn = document.querySelector('.multiply-btn');
multiplyBtn.addEventListener('click', () => {
    if (!firstCompleteNum) {
        firstCompleteNum = completeNum;
        operator = '*';
        clearDisplay();
        firstOperator = true; 
    }
    else if (firstCompleteNum){
        secondCompleteNum = completeNum;
        displaySolution();
        firstCompleteNum = solution;
        console.log(solution); 
        operator = '*'; 
        secondOperator = true; 
    }

});

const divideBtn = document.querySelector('.divide-btn');
divideBtn.addEventListener('click',() => {
    if (!firstCompleteNum) {
        firstCompleteNum = completeNum;
        operator = '/';
        clearDisplay();
        firstOperator = true; 
    }
    else if (firstCompleteNum){
        secondCompleteNum = completeNum;
        displaySolution();
        console.log(solution); 
        firstCompleteNum = solution;
        operator = '/'; 
        secondOperator = true; 
    }
});

// Add event listeners to clear, equal, negative, and percent buttons

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click',clearAll);

const equalBtn = document.querySelector('.equal-btn');
equalBtn.addEventListener('click', () => {
    if (!firstCompleteNum) {
        display.textContent = 'ERROR';
    }
    else {
        // secondCompleteNum = +completeNum; 
        secondCompleteNum = completeNum; 
        displaySolution();
    }
}); 

const negBtn = document.querySelector('.neg-btn');
negBtn.addEventListener('click',() => {
    completeNum = Math.abs(completeNum) * -1; 
    display.textContent = completeNum;
});

const percentBtn = document.querySelector('.percent-btn');
percentBtn.addEventListener('click',() => {
    completeNum = completeNum / 100;
    display.textContent = completeNum; 
});

//Add functions to display solution, populate display, get completeNum, clear display and clear everything

let solutionStr='';
let index =''; 
let decimalLength;

function displaySolution(){
    if (operator == '/' && +secondCompleteNum === 0){
        alert('NOPE'); 
        // display.textContent = 'NOPE'; 
        clearAll();
    }
    else { 
        solution = operate(operator,+firstCompleteNum,+secondCompleteNum);
        solutionStr = solution.toString(); 
        index = solutionStr.indexOf(".");
        decimalLength = solutionStr.length - index - 1;

        //if a decimal number has a decimal length greater than 7, round it to 7 
        if (solution % 1 !== 0 && decimalLength > 7) {
            solution = Number(solution).toFixed(7);
        } 
        display.textContent = Number(solution);
        // display.textContent = solution; 
        return solution; 
    }
}

function populateDisplay(displayValue){
    let txt = document.createTextNode(displayValue);
    currNum = txt.data; 
    display.appendChild(txt);
    getCompleteNum(); 
}

function getCompleteNum (){
    completeNum += `${currNum}`; 
    return completeNum; 
}

function clearDisplay(){
    while(display.hasChildNodes()){
        display.removeChild(display.firstChild); 
    }
    // let defaultValue = document.createTextNode('0');
    // display.appendChild(defaultValue);
    completeNum = '';
}

function clearAll(){
    while(display.hasChildNodes()){
        display.removeChild(display.firstChild); 
    }
    displayValue = '';
    completeNum = '';
    currNum = ''; 
    firstCompleteNum = '';
    secondCompleteNum = ''; 
    operator = '';
    firstOperator = false;
    secondOperator = false;
    solution = '';
    decimalClicked = false;
}
