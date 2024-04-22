// ini file JS

function convert() {
    var degreeInput = document.getElementById("degreeInput").value.trim();
    var conversionDescription = document.getElementById("conversionDescription");
    var inputCommand = document.getElementById("inputCommand");
    var resultOutputTextArea = document.getElementById("resultOutput").value;
    var warningInput = document.getElementById("warningInput");
    var conversionType = document.getElementById("conversionType").value;
        if (degreeInput === "") {
            warningInput.innerHTML = "Please Fill The Form!";
            warningInput.style.color="rgb(185, 0, 0)";
            return;  
        } else {
            warningInput.style.color="#371c8e";
        }

        if (isNaN(degreeInput)) {
            warningInput.innerHTML = "Please enter a valid number!";
            warningInput.style.color="rgb(185, 0, 0)";
            return;
        } else {
            warningInput.style.color="#371c8e";
        }

        var temperature = parseFloat(degreeInput);
        var result;

        if (conversionType === "celsiusToFahrenheit") {
            result = (temperature * 9/5) + 32;
            warningInput.innerHTML = " Cara Penyelesaian: " + temperature + "°C × 9/5 + 32 =" + result + "°F";
            resultOutput.value = temperature + "°C = " + result.toFixed(2) + "°F" ;
        } else if (conversionType === "celsiusToKelvin") {
            result = temperature + 273.15;
            warningInput.innerHTML = "Cara Penyelesaian :" + temperature + "°C + 273.15";
            resultOutput.value = temperature + "°C = " + result.toFixed(2) + " K";
        } else if (conversionType === "fahrenheitToCelsius") {
            result = (temperature - 32) * 5/9;
            warningInput.innerHTML = "Cara Penyelesaian :(" + temperature + "°F - 32) × 5/9";
            resultOutput.value = temperature + "°F = " + result.toFixed(2) + "°C";
        } else if (conversionType === "fahrenheitToKelvin") {
            result = (temperature + 459.67) * 5/9;
            warningInput.innerHTML = "Cara Penyelesaian :(" + temperature + "°F + 459.67) × 5/9";
            resultOutput.value = temperature + "°F = " + result.toFixed(2) + " K";
        } else if (conversionType === "kelvinToCelsius") {
            result = temperature - 273.15;
            warningInput.innerHTML = "Cara Penyelesaian :" + temperature + " K - 273.15";
            resultOutput.value = temperature + " K = " + result.toFixed(2) + "°C";
        } else if (conversionType === "kelvinToFahrenheit") {
            result = (temperature - 273.15) * 9/5 + 32;
            warningInput.innerHTML = "Cara Penyelesaian :(" + temperature + " K - 273.15) × 9/5 + 32";
            resultOutput.value = temperature + " K = " + result.toFixed(2) + "°F";
        } else if (conversionType === "none") {
            warningInput.innerHTML = "Please Choose The Conversion Type First!"
            warningInput.style.color="rgb(185, 0, 0)";
        }

};

function reset() {
    degreeInput.value = "";
    warningInput.innerHTML = "";
    resultOutput.value="";
    conversionType.value="none";
}