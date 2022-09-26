const firsname = "Hanna"
const surname = "Mägi"
let val = firsname + " " + surname
val = "Hanna"
val += surname

val = firsname.toUpperCase()
val = surname.toLowerCase()
val = surname[0]
val = surname.indexOf("a")
val = surname.lastIndexOf("a")

val = surname.charAt(2)
val = surname.charAt(surname.length -1)
val = surname.substring(0, 4)
val = surname.slice(0, 4)
console.log(val)

const tags = "JS, HTML, CSS"
val = tags.split(",")

console.log(val[1].trim())