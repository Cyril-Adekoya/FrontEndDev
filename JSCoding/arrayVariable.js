/* An array is a special variable which can store more than one value. An array provides a solution when
many values are stored and can be access by referring to an index of such value in the array. Better to create
an array literal than decalring an array object using the new keyword */

//Example 1,declare array using [ ] and with values indicating 3 types of cars. Create variable cars
// and store the array.
const cars=["Saab","Volvo","Honda"];

// Example 2, create an array as empty,store in variable and then provide the elements i.e instantiate after.
const autoCars=[ ];
// Instantiate with values/elements
autoCars[0]="Saab";
autoCars[1]="Volvo";
autoCars[2]="Honda";

// Access any type of car in the array using the index of your choice car.
function getCarType(x){

    var myChoiceCar=autoCars[x];
    console.log(myChoiceCar);

}
getCarType(2);

// Example 3, Note you can have objects stored in array, function stored in array and also array in array.
// Create an epmty array [ ] my Array. Instantiate by making objec,function and array as element.


//const cart=[ "Saab","Volvo","Honda"];
// Instantiate with values/elements
//autoCars[0]="Saab";
//autoCars[1]="Volvo";
//autoCars[2]="Honda";

// Access any type of car in the array using the index of your choice car.


function implementExample3(){
    function getCarType(){
        const cart=["Saab","Volvo","Honda"];
        var myChoiceCar=cart;
        console.log(myChoiceCar);
    }
    const myArray=[ ];
    myArray[0]="cart";// this is array
    myArray[1]="getCarType"; // this is a function
    myArray[2]=Date.now; // this is an object
    
    // Get a car type from the array of car and enter the date you made your choice
    let myResult1=myArray[0];
    let myResult2=myArray[1];
    let myResult3=myArray[2];
    console.log(myResult1 + myResult2 + myResult3);
}

implementExample3();

