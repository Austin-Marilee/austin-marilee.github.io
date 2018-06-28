var weatherObject = new XMLHttpRequest()

weatherObject.open('GET','https://api.wunderground.com/api/5cc13ffc94a61b9c/conditions/q/OR/Springfield.json',true);

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

    document.getElementById('humidity').innerHTML = weatherInfo.current_observation.relative_humidity;

}//end of onload

var weatherForecast = new XMLHttpRequest()

weatherForecast.open('GET','https://api.wunderground.com/api/5cc13ffc94a61b9c/forecast/q/OR/Springfield.json', true);

weatherForecast.send();

weatherForecast.onload = function() {
    var weatherNew = JSON.parse(weatherForecast.responseText);
    console.log(weatherNew);

    document.getElementById('foreCast').innerHTML = weatherNew.forecast.txt_forecast.forecastday["0"].fcttext;

}

//10 DAY FORECAST
var weatherObject10 = new XMLHttpRequest()

weatherObject10.open('GET','https://api.wunderground.com/api/5cc13ffc94a61b9c/forecast10day/q/OR/Springfield.json', true);

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

    //day6
    document.getElementById('day6High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[6].high.fahrenheit;
    document.getElementById('day6Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[6].low.fahrenheit;
    document.getElementById('day6icon').src = weatherTenday.forecast.simpleforecast.forecastday[6].icon_url;

    //day7
    document.getElementById('day7High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[7].high.fahrenheit;
    document.getElementById('day7Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[7].low.fahrenheit;
    document.getElementById('day7icon').src = weatherTenday.forecast.simpleforecast.forecastday[7].icon_url;

    //day8
    document.getElementById('day8High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[8].high.fahrenheit;
    document.getElementById('day8Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[8].low.fahrenheit;
    document.getElementById('day8icon').src = weatherTenday.forecast.simpleforecast.forecastday[8].icon_url;

    //day9
    document.getElementById('day9High').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[9].high.fahrenheit;
    document.getElementById('day9Low').innerHTML = weatherTenday.forecast.simpleforecast.forecastday[9].low.fahrenheit;
    document.getElementById('day9icon').src = weatherTenday.forecast.simpleforecast.forecastday[9].icon_url;

}//end of onload
