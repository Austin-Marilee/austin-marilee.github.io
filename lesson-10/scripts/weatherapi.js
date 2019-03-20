let weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
document.getElementById('cc-temp').innerHTML= weatherData.main.temp;

var span = document.getElementById("current");
    span.textContent = weatherData.weather[0].description;
    var span2 = document.getElementById("high");
    span2.textContent = weatherData.main.temp_max;
    var span3 = document.getElementById("humidity");
    span3.textContent = weatherData.main.humidity;
    var span4 = document.getElementById("wind");
    span4.textContent = weatherData.wind.speed;

    var temp = weatherData.main.temp;
    var speed = document.getElementById("wind").innerHTML;
    speed = parseFloat (speed);
    
        
    var result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
                 + 0.4275 * temp * Math.pow(speed, 0.16);
        
    document.getElementById('output').innerHTML = result.toFixed(1);

    console.log(weatherData);

}
