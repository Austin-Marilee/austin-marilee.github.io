var weatherObject = new XMLHttpRequest()

weatherObject.open('GET','https://api.wunderground.com/api/5cc13ffc94a61b9c/conditions/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function() {
var weatherInfo = JSON.parse(weatherObject.responseText);
console.log(weatherInfo);

document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

document.getElementById('currentConditions').innerHTML = weatherInfo.current_observation.weather;

document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;

document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;

document.getElementById('precipToday').innerHTML = weatherInfo.current_observation.precip_today_metric;

document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_gust_mph;

document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;

}//end of onload

var weatherForecast = new XMLHttpRequest()

weatherForecast.open('GET','https://api.wunderground.com/api/5cc13ffc94a61b9c/forecast/q/MN/Franklin.json', true);

weatherForecast.send();

weatherForecast.onload = function() {
    var weatherNew = JSON.parse(weatherForecast.responseText);
    console.log(weatherNew);

    document.getElementById('foreCast').innerHTML = weatherNew.forecast.txt_forecast.forecastday["0"].fcttext;

}

