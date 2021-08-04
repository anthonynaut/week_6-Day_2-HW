//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function Parse(){
    let i = 0; i < Object.keys(person3).length; i++; {
        console.log(Object.keys(person3)[i], Object.values(person3)[i])
    }
}
console.log(person3)
 



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name,age){
        this.age = age
        this.name = name

    for(let i = 0; i < 3; age[i++]){
        console.log(age[i])
    }
}


let anthony = new Person('Anthony', 19);
let mikahDog = new Person('Mikahdog', 5)
console.log(anthony.printInfo())
console.log(mikahDog.printInfo())
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



//run separately






// class Person{
//     constructor(name,age){
//         this.age = age
//         this.name = name
//     }

//     printInfo(){
//         return `Name: ${this.name} \n Age: ${this.age}`
    
//     }
// }
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
var str = 'this is'

const stringChecker = (str) => {
    return new Promise( (resolve,reject) => {
        if(str < 10){
            resolve(true).then(console.log('Small Number.'))
        } else {
            reject(false).then(console.log('Big Word.'))
            
        }
    })
}

console.log(stringChecker())








// var str = 'This is'

// function stringChecker(str) {
//     for(let i = str.length; i < 10; i++){
//     if(str.length < 10 == True){
//     console.log('Small Number')

    
//         } else {
//         str.length < 10 == False; {
//             console.log('Big Number')
//         }
//         }

//         }
//      }  