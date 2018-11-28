var weatherObject = new XMLHttpRequest;
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5585010&appid=1b85c554f737909311537328716a5d15&units=imperial', true);

//Fish Haven ID  5585010

weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    //Weather Icon
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    document.getElementsByClassName('weatherDesc').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('direction').innerHTML = weatherInfo.wind.deg;

    var windChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);

    windChill = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChill;

}

//forecast
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', '//api.openweathermap.org/data/2.5/forecast?id=5585010&appid=1b85c554f737909311537328716a5d15&units=imperial', true);

weatherForecast.send();
weatherForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var date1 = new Date(weatherInfo.list[4].dt * 1000);
    var m1 = month[date1.getMonth()];

    var date2 = new Date(weatherInfo.list[12].dt * 1000);
    var m2 = month[date2.getMonth()];

    var date3 = new Date(weatherInfo.list[20].dt * 1000);
    var m3 = month[date3.getMonth()];

    var date4 = new Date(weatherInfo.list[28].dt * 1000);
    var m4 = month[date4.getMonth()];

    var date5 = new Date(weatherInfo.list[36].dt * 1000);
    var m5 = month[date5.getMonth()];

    document.getElementById('dayone').innerHTML = m1 + ' ' + date1.getDate();
    document.getElementById('daytwo').innerHTML = m2 + ' ' + date2.getDate();
    document.getElementById('daythree').innerHTML = m3 + ' ' + date3.getDate();
    document.getElementById('dayfour').innerHTML = m4 + ' ' + date4.getDate();
    document.getElementById('dayfive').innerHTML = m5 + ' ' + date5.getDate();

    document.getElementById('dayonetemp').innerHTML = weatherInfo.list[4].main.temp_max;
    document.getElementById('daytwotemp').innerHTML = weatherInfo.list[12].main.temp_max;
    document.getElementById('daythreetemp').innerHTML = weatherInfo.list[20].main.temp_max;
    document.getElementById('dayfourtemp').innerHTML = weatherInfo.list[28].main.temp_max;
    document.getElementById('dayfivetemp').innerHTML = weatherInfo.list[36].main.temp_max;


    document.getElementById('dayonetemp1').innerHTML = weatherInfo.list[4].main.temp_min;
    document.getElementById('daytwotemp2').innerHTML = weatherInfo.list[12].main.temp_min;
    document.getElementById('daythreetemp3').innerHTML = weatherInfo.list[20].main.temp_min;
    document.getElementById('dayfourtemp4').innerHTML = weatherInfo.list[28].main.temp_min;
    document.getElementById('dayfivetemp5').innerHTML = weatherInfo.list[36].main.temp_min;
    //icons

    var iconcode = weatherInfo.list[4].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconone').src = icon_path;

    var iconcode = weatherInfo.list[12].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icontwo').src = icon_path;

    var iconcode = weatherInfo.list[20].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconthree').src = icon_path;

    var iconcode = weatherInfo.list[28].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconfour').src = icon_path;

    var iconcode = weatherInfo.list[36].weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconfive').src = icon_path;
}
//end of the function
