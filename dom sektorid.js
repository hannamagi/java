let val;
val = document.getElementById('task-form')
val = document.getElementById('task-form').id
val = document.getElementById('task-form').className

const taskTitle = document
    .getElementById('task-form')
taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '15px'
taskTitle.textContent = 'Defined Tasks'
taskTitle.innerText = 'My Favorite Task'
taskTitle.innerHTML = '<b style="color: red">My Task</b>'
val = document.querySelector('#task-title')
val = document.querySelector('.card-title')
val = document.querySelector('ul')

val = document.querySelector('li:last-child')
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'

// multiply elements

val = document.querySelectorAll('li')
oddLi = document.querySelectorAll('li:nth-child(odd)')

oddLi.forEach((li) => {
    li.style.background = '#ddd'
})

console.log(taskTitle)