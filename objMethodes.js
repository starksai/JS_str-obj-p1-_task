// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.

var person = {
    firstName : "sai kumar",
    lastName : "pyatlo",
    age : 22,
}
console.log(person.firstName);
person.city="New York";
console.log(person);


// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.

var properties = {
    name : "sai kumar",
    price : 350,
    inStock : false,
}
properties.price = 530;
delete properties.inStock;
console.log(properties);

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

let library = {
    fantasy: {
        books: ["The Hobbit", "Harry Potter and the Sorcerer's Stone"]
    },
    mystery: {
        books: ["The Da Vinci Code", "Gone Girl"]
    },
    romance: {
        books: ["Pride and Prejudice", "The Notebook"]
    }
};

library.scienceFiction = {
    books: ["Dune", "Neuromancer"]
};
console.log("First book in fantasy genre:", library.fantasy.books[0]);
delete library.mystery;
console.log("Updated library:", library);


// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

var user = {
    username : "sai kumar",
    email : "sai@gmail.com",
    address : {
        city : "hyderabad",
        state : "Telangana",
        zip : 500007,
    }
}
Object.freeze(user);

if(Object.isFrozen(user)==true){
    console.log("user object is freezed");
}
else{
    user.email = "s@gmail.com";
    user.phone = 987654321;
}
console.log(user);

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()


var car = {
    make : "BMW",
    model : "2001",
    price : "15L"
}

Object.seal(car);
delete car.make;
if(Object.isSealed(car)==true){
    console.log("user object is sealed");
}
else{
    console.log("user object is not sealed");
}
car.price = "20L";

if(Object.isExtensible(car)==true){
    console.log("car object is extensible");
}
else{
    console.log("car object is not extensible")
}
console.log(car);