var weatherObject = new XMLHttpRequest
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4695066&appid=1b85c554f737909311537328716a5d15&units=imperial', true);

//Franklin VA  4759986

weatherObject.send();

weatherObject.onload = function () {



    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('highTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;



    var iconcode = weatherInfo.weather[0].icon;

    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;


}

//forecast
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', '//api.openweathermap.org/data/2.5/forecast?id=4695066&appid=1b85c554f737909311537328716a5d15&units=imperial', true);


weatherForecast.send();

weatherForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    document.getElementById('dayonetemp').innerHTML = weatherInfo.list[1].main.temp_max;
    document.getElementById('daytwotemp').innerHTML = weatherInfo.list[2].main.temp_max;
    document.getElementById('daythreetemp').innerHTML = weatherInfo.list[3].main.temp_max;
    document.getElementById('dayfourtemp').innerHTML = weatherInfo.list[4].main.temp_max;
    document.getElementById('dayfivetemp').innerHTML = weatherInfo.list[5].main.temp_max;


    document.getElementById('dayonetemp1').innerHTML = weatherInfo.list[1].main.temp_min;
    document.getElementById('daytwotemp2').innerHTML = weatherInfo.list[2].main.temp_min;
    document.getElementById('daythreetemp3').innerHTML = weatherInfo.list[3].main.temp_min;
    document.getElementById('dayfourtemp4').innerHTML = weatherInfo.list[4].main.temp_min;
    document.getElementById('dayfivetemp5').innerHTML = weatherInfo.list[5].main.temp_min;
    //icons

    var iconcode = weatherInfo.list[1].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconone').src = icon_path;

    var iconcode = weatherInfo.list[2].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icontwo').src = icon_path;

    var iconcode = weatherInfo.list[3].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconthree').src = icon_path;

    var iconcode = weatherInfo.list[4].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconfour').src = icon_path;

    var iconcode = weatherInfo.list[5].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconfive').src = icon_path;
}
//end of the function
