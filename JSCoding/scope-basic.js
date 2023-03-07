let a='first';

function scopeTest(){
    console.log(a);

    if(a!=''){
        console.log(a);

        let c='third';
    }
    //console.log(c);
}
scopeTest();