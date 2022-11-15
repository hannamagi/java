const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const tasksHeading = document.querySelector('#task-title')
// submit
form.addEventListener('submit', runEvent)

// keyboard
// taskInput.addEventListener('keydown', runEvent)
// taskInput.addEventListener('keyup', runEvent)
// taskInput.addEventListener('keypress', runEvent)

// keyboard
// taskInput.addEventListener('keydown', runEvent)
// taskInput.addEventListener('keyup', runEvent)
// taskInput.addEventListener('keypress', runEvent)

// inputs
taskInput.addEventListener('cut', runEvent)
taskInput.addEventListener('paste', runEvent)
taskInput.addEventListener('input', runEvent)


function runEvent(event){
    console.log(`Event type: ${event.type}`)
    tasksHeading.innerText = event.target.value
    event.preventDefault()
}