const inputField = document.getElementById('inputField');
const outputLabel = document.getElementById('result');
const convertButton = document.getElementById('buttonConvert')

inputField.addEventListener('keypress', function(event) {
    const key = event.key;
    const numberRegex = /^[0-9]$/;
  
    if (!numberRegex.test(key)) {
      event.preventDefault();
    }
  });


convertButton.addEventListener('click', function(){
    outputLabel.textContent = "hello"
    outputLabel.style.display = 'inline'
})