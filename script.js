const numberRegex = /^[0-9]+$/;
const inputField = document.getElementById("inputField")
const result = document.getElementById("result")

inputField.addEventListener('keypress', function(event){
    if (!numberRegex.test(event.key)) {
        result.style.display = "none"
        event.preventDefault()
    } else {
        result.textContent = event.key
        result.style.display = "inline"
    } 

})