//There are 3 methods for extracting a part of a string. This method takes 2 parameters
// slice(start,end)
//substring(start,end)
//substr(start,length)
let text="Apple,Banana,Kiwi";
let part=text.slice(7,13);
console.log(part);
//replace() method can be used to replace a letter match in a string. You can use a regular expression
// with the /g flag set to replace all matches

let text2="Please visit your mom when you travelled home";
console.log(text2);
let result2= text2.replace("mom","dad");
console.log(result2);