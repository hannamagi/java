const firstname = 'Hanna'
const surname = 'Mägi'
const email = 'hanna.magi.001@khk.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li><b>Name:</b> ' + firstname + '</li>' +
    '<li><b>Surname:</b> ' + surname + '</li>' +
    '<li><b>Email:</b> ' + email + '</li>' +
    '<li><b>Department:</b> ' + department + '</li>' +
    '</ul>'

result = `
    <ul>
        <li><b>Name: </b>${firstname}</li>
        <li><b>Surname: </b>${surname}</li>
        <li><b>Email: </b>${email}</li>
        <li><b>Department: </b>${department}</li>
    </ul>`

console.log(result)
document.body.innerHTML = result