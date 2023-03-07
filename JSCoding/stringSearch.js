// Search methods-String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
//String startsWith()
//String endsWith()

let str="Please locate where nigeria president name 'Tinubu' of Lagos nigeria occurs";

function xyz(){
    console.log(str.indexOf("Tinubu"));
    console.log(str.lastIndexOf("nigeria"));
    // these 2 methods accept a second parameter 
    console.log(str.indexOf("Lagos", 15));
}
xyz();