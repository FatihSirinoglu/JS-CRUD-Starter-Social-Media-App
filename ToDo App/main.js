let formEl = document.getElementById("form")
let textInputEl = document.getElementById("textInput")
let msgEl = document.getElementById("msg")
let dateInputEl = document.getElementById("dateInput")
let textAreaEl = document.getElementById("textArea")
let tasksEl = document.getElementById("tasks")

formEl.addEventListener("submit", (e)=>{
    e.preventDefault()
    formValidation();
})

let formValidation=()=>{
    if (textInputEl.value === "") {
        console.log("failed")
        msgEl.innerHTML = "This area cannot be empty!"
    } else {
        console.log("success")
        msgEl.innerHTML = ""
        acceptData();
    }   
}

let data = {}
 
let acceptData = () => {
    data["text"] = textInputEl.value
    data["date"] = dateInputEl.value
    data["desc"] = textAreaEl.value
    // we need to awoke this function only formValidation is true situation.
    console.log(data)
    createTasks();
}

let createTasks = () => {
    // tasksEl.innerHTML is not gonna replace, it ll be added to list, so we use +=
    tasksEl.innerHTML += 
    `
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.desc}</p>
    <span class="options">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
    </span>
    </div>

    `
    resetForm();
}

// we need to reset the form after new task saved. We need a reset function

let resetForm = () => {
    textInputEl.value = ""
    dateInputEl.value = ""
    textAreaEl.value = ""
}