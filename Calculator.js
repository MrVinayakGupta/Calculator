const inputElement = document.getElementById("result");
console.log(inputElement.value);

// Adding event listeners to calculator buttons 

let clear = document.getElementById("c");
 clear.addEventListener("click", function() {
    console.log("Clear button clicked");
    clearAll();
 });
let ce = document.getElementById("ce");
 ce.addEventListener("click", function() {
    console.log("Clear button clicked");
    del();
 });

let plus = document.getElementById("+");
 plus.addEventListener("click", function() {
    console.log("Sum button clicked");
    inputElement.value= inputElement.value + "+";
 });
let minus = document.getElementById("-");
 minus.addEventListener("click", function() {
    console.log("Minus button clicked");
    inputElement.value= inputElement.value + "-";
 });
let multiply = document.getElementById("*");
 multiply.addEventListener("click", function() {
    console.log("Multiply button clicked");
    inputElement.value= inputElement.value + "*";
 });
let division = document.getElementById("/");
 division.addEventListener("click", function() {
    console.log("Division button clicked");
    inputElement.value= inputElement.value + "/";
 });
let equall = document.getElementById("=");
 equall.addEventListener("click", function() {
    console.log("Equall button clicked");
    console.log(inputElement.value, "=" );
      equallTo();
 });
let module = document.getElementById("%");
 module.addEventListener("click", function() {
    console.log("Module button clicked");
    inputElement.value= inputElement.value + "%";
 });

let one = document.getElementById("1");
 one.addEventListener("click", function() {
    console.log("1 button clicked");
    inputElement.value=inputElement.value + "1";
 });
let two = document.getElementById("2");
 two.addEventListener("click", function() {
    console.log("2 button clicked");
    inputElement.value=inputElement.value + "2";
 });
let three = document.getElementById("3");
 three.addEventListener("click", function() {
    console.log("3 button clicked");
    inputElement.value=inputElement.value + "3";
 });
let four = document.getElementById("4");
 four.addEventListener("click", function() {
    console.log("4 button clicked");
    inputElement.value=inputElement.value + "4";
 });
let five = document.getElementById("5");
 five.addEventListener("click", function() {
    console.log("5 button clicked");
    inputElement.value=inputElement.value + "5";
 });
let six = document.getElementById("6");
 six.addEventListener("click", function() {
    console.log("6 button clicked");
    inputElement.value=inputElement.value + "6";
 });
let seven = document.getElementById("7");
 seven.addEventListener("click", function() {
    console.log("7 button clicked");
    inputElement.value=inputElement.value + "7";
 });
let eight = document.getElementById("8");
 eight.addEventListener("click", function() {
    console.log("8 button clicked");
    inputElement.value=inputElement.value + "8";
 });
let nine = document.getElementById("9");
 nine.addEventListener("click", function() {
    console.log("9 button clicked");
    inputElement.value=inputElement.value + "9";
 });
let zero = document.getElementById("0");
 zero.addEventListener("click", function() {
    console.log("0 button clicked");
    inputElement.value=inputElement.value + "0";
 });
let dot = document.getElementById(".");
 dot.addEventListener("click", function() {
    console.log("dot button clicked");
    inputElement.value=inputElement.value + ".";
 });


// Functions for calculator operations


function sum (){
   value= inputElement.value; ;
   console.log(value + inputElement.value);
}
 
function sub (){
    
}

function mult (){
    
}

function mod (){
    inputElement.value= inputElement.value /100 ;
    console.log(inputElement.value);
}

function del(){
   let str= inputElement.value;
   inputElement.value= str.slice(str.lenght, -1);
}

function equallTo(){
   try{
      inputElement.value= eval(inputElement.value);
   }
   catch(err){
      inputElement.value= "Error";
   }
}

function clearAll(){
  inputElement.value= "";
}


