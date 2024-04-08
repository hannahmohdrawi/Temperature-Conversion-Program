
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(toFahrenheit.checked){
        //result.textContent = "You selected to Fahrenheit" to check buttons working
        temp = Number(textBox.value)
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; //Give 1 digit past the decimal place
    }
    else if(toCelsius.checked){
        //result.textContent = "You selected to Celsius"
        temp = Number(textBox.value)
        temp = (temp -32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"; //Give 1 digit past the decimal place

    }
    else{
        result.textContent = "Select a unit";
    }
}