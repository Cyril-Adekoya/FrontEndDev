// Variable subsistution, template literals allow variable in string
let firstName="John";
let lastName="Doe";
let text3=`Welcome ${firstName},${lastName} !`;
function xgh(a,b){
    console.log(text3);
    var result= a * b;
    console.log(result);
}
xgh(5,6);