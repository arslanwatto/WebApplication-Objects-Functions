"usee strict"

let book={
    author:"Ali",
    Title:"Learning js2",
    for:"Students",
    pages:340,
    "Chapter pages":[90,100,40,50]
};

let person=book.author;
let name=book["author"];
let numPages=book["Chapter pages"];
book.Title="Advance Js";
book["pages"]=340;

//if we delete the object property
delete book.author;

//if a object person and we add a property telephone we can assign a value like this.

person.telephone="0333 45767672"
//Iterating over properties
for (const prop in book)
{
console.log('${prop}=${book[prop]}');
}



console.log(book);
console.log(person);
console.log(name);
//console.log(book.Title);
console.log(numPages);