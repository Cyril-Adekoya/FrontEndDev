let x="We are the so-called 'Vikings' from the north";
let y="We are the so-called \"Yoruba\" from the south-West";
stringLength= x.length, stringLength2=y.length;
console.log(stringLength);
console.log(stringLength2);
// string can be stored as variable but can also be defined as object with the keyword new
// warning, do not create string object, this can bring wrong result.
let z= new String("We are the so-called 'Vikings' from the north");
console.log(z.length);