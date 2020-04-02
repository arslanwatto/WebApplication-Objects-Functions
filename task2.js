"use strict"

let book={

    Author:"Enric",
    pages:340,

};
// copying object    shellow copy
//let book3=Object.assign({},book);

console.log('Author'in book);

//constructor function
function Car(make,model,year)
{
    this.make=make;
    this.model=model;
    this.year=year;
}
let mycar=new Car("suzuki","ali",1993);
//  1 classic funtion
function square(x){
    let y=x*x;
    return y;
}
// 2 function expression 2
let cube =function c(x){

    let y=square(x)*x;
    return y;
}

// 3Arrow Function

const fourth =(x)=>{ return square(x)*square(x);
    
}
let n=fourth(4);

console.log(n);