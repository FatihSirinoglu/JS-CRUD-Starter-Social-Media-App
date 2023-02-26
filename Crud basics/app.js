let formEl = document.getElementById("form")
let inputEl = document.getElementById("input")
let msgEl = document.getElementById("msg")
let postEl = document.getElementById("posts")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked")
    // Every time clicked the post button , formValidation function should work.
    formValidation();
})

let formValidation = () => {
    if (inputEl.value === "") {
        console.log("failed")
        msgEl.innerHTML= "Text area can not be empty!"
    } else {
        console.log("success")
        msgEl.innerHTML=""
        // we can wake up collect data function only post isn't equal to empty situation.
        collectData()
    }
}
let data = {}
let collectData = ()=>{
   data["text"]=inputEl.value
   console.log(data)
   showCreatedPost();
}

let showCreatedPost = () => {
    postEl.innerHTML +=
    `
    <div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="updateData(this)" class="fa-sharp fa-regular fa-pen-to-square"></i>
        <i onClick="deleteData(this)" class="fa-solid fa-trash"></i>
        </span>
    </div>

    `
    // After we showed the created element we need to clean text area up;
    inputEl.value=""
}
// We need two more functions; delete and update. After create those functions we need to send them into icons div to use with onclick situation. We need to careful about sending this functions as they are. We have to give them 'this' situation otherwise when we clicked one of them ,it will delete or update all data.

let deleteData = (e) => {
    e.parentElement.parentElement.remove()

}
let updateData = (e) => {
    inputEl.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}

 