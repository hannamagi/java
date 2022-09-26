const person = {
    firstname: "Kadi",
    surname: "Tamm",
    age: 40,
    email: "kadi.tamm@gmail.com",
    hobbies: ["tennis", "korvpall"],
    address: {
        city: "Võru",
        cuontry: "Võrumaa"
    },
    getBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person
val = person.firsname
val = person["surname"]
val = person["hobbies"][1]
val = person.hobbies[1]
val = person.address.city
val = person.address["city"]
val = person.getBirthYear()
console.log(val)

/*for(let 1 = 0; 1 < person.hobbies.length; 1 ++){
    console.log(person.hobbies[1])
}*/
person.hobbies.forEach((hobbie, index) => {
    console.log(hobbie + " on element indeksiga " + index)
})
