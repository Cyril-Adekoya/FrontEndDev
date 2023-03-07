let a =20
console.log(a);

let carModel="Salon";
carName="Volvo";
  var carName="Saab";
console.log(carName + " " + carModel);
///////////Example-001-Variable Declaration with const////////////////
// Declaring variables with const keyword.
// This variable const cannot be redeclared,reassingned and have a block scope. It
// must be assigned value when declared.
// Always declare a variable with const when you know that the value should not be changed. Especially
// for: a new array, new object,new function and new RegExp.
const P=3.5;
//P= 3.5;
console.log(P);
//////////////Example-002-JS function//////////////////////////////.
//1. function parameters are listed inside the parenthesis() in the function definition
// 2. function arguments are the values received by the function when invoked.
 function myfunction1(p1,p2){
    return p1 * p2;
   
 }
 console.log(myfunction1(7,8));

 function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);

 }
console.log(toCelsius(77));

function greet(i ){

    function myresponse(){
        //var i="No";
        var answer="Good moring sir";
        if(i =answer){
            console.log(answer);
        }else{
            console.log(i);
        }
        
    }
    return myresponse();
}
greet("Good atfernoon");