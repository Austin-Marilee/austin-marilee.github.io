//CURRENT WEATHER CONDITIONS
// Open Weather IDs, Franklin: 4759986, Greenville: 4695066, Springfield: 4409896

var weatherObject = new XMLHttpRequest()

weatherObject.open('GET','https://api.openweathermap.org/data/2.5/weather?id=4759986&APPID=2cfc9683fd95c1403584cfef0b9d6573&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
var weatherInfo = JSON.parse(weatherObject.responseText);
console.log(weatherInfo);

document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;

    var iconcode = weatherInfo.weather["0"].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weatherIcon').innerHTML = icon_path;

document.getElementById('currentConditions').innerHTML = weatherInfo.weather[0].main;
document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
document.getElementById('windChill').innerHTML = weatherInfo.wind.deg;

}//end of onload


//WEATHER FORECAST
var weatherForecast = new XMLHttpRequest()

weatherObject.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=4759986&APPID=2cfc9683fd95c1403584cfef0b9d6573&units=imperial',true);

weatherForecast.send();

weatherForecast.onload = function() {
    var weatherNew = JSON.parse(weatherForecast.responseText);
    console.log(weatherNew);

    document.getElementById('tempLow').innerHTML = weatherNew.list.main.temp_min;
    document.getElementById('tempHigh').innerHTML = weatherNew.list.main.temp_max;

}//end of onload



//10 DAY FORECAST
var weatherObject10 = new XMLHttpRequest()

weatherObject10.open('GET','https://api.wunderground.com/api/5cc13ffc94a61b9c/forecast10day/q/MN/Franklin.json', true);

weatherObject10.send();

weatherObject10.onload = function() {
    var weatherTenday = JSON.parse(weatherObject10.responseText);
    console.log(weatherTenday);

//day0
    document.getElementById('day0High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    document.getElementById('day0Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    document.getElementById('day0icon').src = weatherTenday.forecast.simpleforecast.forecastday[0].icon_url;

 //day1
    document.getElementById('day1High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[1].high.fahrenheit;
    document.getElementById('day1Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[1].low.fahrenheit;
    document.getElementById('day1icon').src = weatherTenday.forecast.simpleforecast.forecastday[1].icon_url;

//day2
    document.getElementById('day2High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[2].high.fahrenheit;
    document.getElementById('day2Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[2].low.fahrenheit;
    document.getElementById('day2icon').src = weatherTenday.forecast.simpleforecast.forecastday[2].icon_url;

 //day3
    document.getElementById('day3High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[3].high.fahrenheit;
    document.getElementById('day3Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[3].low.fahrenheit;
    document.getElementById('day3icon').src = weatherTenday.forecast.simpleforecast.forecastday[3].icon_url;

//day4
    document.getElementById('day4High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[4].high.fahrenheit;
    document.getElementById('day4Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[4].low.fahrenheit;
    document.getElementById('day4icon').src = weatherTenday.forecast.simpleforecast.forecastday[4].icon_url;

//day5
    document.getElementById('day5High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[5].high.fahrenheit;
    document.getElementById('day5Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[5].low.fahrenheit;
    document.getElementById('day5icon').src = weatherTenday.forecast.simpleforecast.forecastday[5].icon_url;


}//end of onload
