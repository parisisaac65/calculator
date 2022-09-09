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

console.log(operate('+',6, 2));
console.log(operate('-',6, 2));
console.log(operate('*',6, 2));
console.log(operate('/',6, 2)); 