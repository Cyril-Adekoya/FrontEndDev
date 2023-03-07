function sayHello(){
    console.log("Good Moring");
    console.log("Good Afternoon");
    console.log("Good evening");
}
//sayHello();
// We can create a varaiable example a and store the function we created intpo the 
//varaible then invoke the function using the varaible name //
let a =sayHello
a();
 // we can create a new version of the function and pass a paramater as follows

 function sayHelloWithParam(name){

    console.log(name);
 }
 sayHelloWithParam("Mrs Adekoya");

 function returnValueForTax(amount){

    let taxAmount=amount * 0.025;
    return taxAmount;
 }
  let taxDue=returnValueForTax(1000);
  console.log(taxDue);


