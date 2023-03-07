/* Objects are variables too and can contain many values */
// Use const keyword to declare object and the values are written as name:value
// object can have methods/action that can be performed on the object,methods are stored in the
// properties as definition
const car={
    type:"Fiat",
    model:"500",
    color:"White",
    carSelection: function(){
        return car.type + " " + car.model + " " + car.color;
    }
};
console.log(car.carSelection());
