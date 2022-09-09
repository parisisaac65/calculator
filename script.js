let displayValue = 0;

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
//Add event listeners to all misc buttons 
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click',clear);

const equalBtn = document.querySelector('.equal-btn');
// equalBtn.addEventListener('click',operate()); 

//Add event listeners to all digit buttons 
const zeroBtn = document.querySelector('.zero-btn');
zeroBtn.addEventListener('click', () => {
    displayValue = 0;
    populateDisplay(displayValue); 
}); 

const oneBtn = document.querySelector('.one-btn');
oneBtn.addEventListener('click', () => {
    displayValue = 1;
    populateDisplay(displayValue); 
}); 

const twoBtn = document.querySelector('.two-btn');
twoBtn.addEventListener('click',() => {
    displayValue = 2;
    populateDisplay(displayValue);
});

const threeBtn = document.querySelector('.three-btn');
threeBtn.addEventListener('click',() => {
    displayValue = 3;
    populateDisplay(displayValue);
});

const fourBtn = document.querySelector('.four-btn');
fourBtn.addEventListener('click',() => {
    displayValue = 4;
    populateDisplay(displayValue);
});

const fiveBtn = document.querySelector('.five-btn');
fiveBtn.addEventListener('click',() => {
    displayValue = 5;
    populateDisplay(displayValue);
});

const sixBtn = document.querySelector('.six-btn');
sixBtn.addEventListener('click',() => {
    displayValue = 6;
    populateDisplay(displayValue);
});

const sevenBtn = document.querySelector('.seven-btn');
sevenBtn.addEventListener('click',() => {
    displayValue = 7;
    populateDisplay(displayValue);
});

const eightBtn = document.querySelector('.eight-btn');
eightBtn.addEventListener('click',() => {
    displayValue = 8;
    populateDisplay(displayValue);
});

const nineBtn = document.querySelector('.nine-btn');
nineBtn.addEventListener('click',() => {
    displayValue = 9;
    populateDisplay(displayValue);
});

// Add event listeners to all operator buttons 



const display = document.querySelector('.display'); 
function populateDisplay(displayValue){
    // let txt = document.createTextNode(`${displayValue}`);
    let txt = document.createTextNode(displayValue);
    display.appendChild(txt);
}

function clear(){
    while(display.hasChildNodes()){
        display.removeChild(display.firstChild); 
    }
    let defaultValue = document.createTextNode('0');
    display.appendChild(defaultValue);
}
