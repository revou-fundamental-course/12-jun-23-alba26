function convert() {
    //1. ambil angka dari input
    const celsius = parseInt(document.getElementById("InputField").value);
    console.log(typeof value);
    //2. rubah ke fahrenheit
    const fahrenheit = (celsius*9/5) + 32;
    //3. display hasil perhitungan
    document.getElementById("InputField2").value = fahrenheit;
    console.log(fahrenheit);
}

function reset() {
    const celsius = document.getElementById("InputField");
    const fahrenheit = document.getElementById("InputField2");

  // Clear the input and output fields
  celsius.value = "";
  fahrenheit.value = "";
}




