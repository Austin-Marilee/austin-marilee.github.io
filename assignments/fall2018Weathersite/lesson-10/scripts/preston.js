//PRESTON IDAHO 5604473

//WEATHER SUMMARY
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1b85c554f737909311537328716a5d15&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    var windChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChill;
}

//FORECAST
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1b85c554f737909311537328716a5d15&units=imperial', true);
weatherForecast.send();
weatherForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date1 = new Date(weatherInfo.list[3].dt * 1000);
    var m1 = month[date1.getMonth()];

    var date2 = new Date(weatherInfo.list[11].dt * 1000);
    var m2 = month[date2.getMonth()];

    var date3 = new Date(weatherInfo.list[19].dt * 1000);
    var m3 = month[date3.getMonth()];

    var date4 = new Date(weatherInfo.list[27].dt * 1000);
    var m4 = month[date4.getMonth()];

    var date5 = new Date(weatherInfo.list[35].dt * 1000);
    var m5 = month[date5.getMonth()];

    document.getElementById('dayone').innerHTML = m1 + ' ' + date1.getDate();
    document.getElementById('daytwo').innerHTML = m2 + ' ' + date2.getDate();
    document.getElementById('daythree').innerHTML = m3 + ' ' + date3.getDate();
    document.getElementById('dayfour').innerHTML = m4 + ' ' + date4.getDate();
    document.getElementById('dayfive').innerHTML = m5 + ' ' + date5.getDate();


    var index, time, temp;
    for (index = 0; index < weatherInfo.list.length; ++index) {
        time = weatherInfo.list[index].dt_txt;
        if (time.includes("15:00:00")) {
            var temp = weatherInfo.list[index].main.temp_max;
            var listTemp = [temp];
            for (i = 1; i < listTemp.length; ++i) {
                listTemp.push(temp);
                break;
                }

        }
        continue;
    }

        document.getElementById("highTemp1").innerHTML = listTemp[0];
        document.getElementById("highTemp2").innerHTML = listTemp[1];
        document.getElementById("highTemp3").innerHTML = listTemp[2];
        document.getElementById("highTemp4").innerHTML = listTemp[3];
        document.getElementById("highTemp5").innerHTML = listTemp[4];



/*     function myFunction() {
        var list = document.getElementsByClassName("example")[0];
        list.getElementsByClassName("child")[0].innerHTML = "Milk";


            for (var i = 0; i < result.length; i++) {
                result[i].innerHTML = temp;



      } */


    /*     document.getElementById('dayonetemp').innerHTML = weatherInfo.list[3].main.temp_max;
        document.getElementById('daytwotemp').innerHTML = weatherInfo.list[11].main.temp_max;
        document.getElementById('daythreetemp').innerHTML = weatherInfo.list[19].main.temp_max;
        document.getElementById('dayfourtemp').innerHTML = weatherInfo.list[27].main.temp_max;
        document.getElementById('dayfivetemp').innerHTML = weatherInfo.list[35].main.temp_max; */

    //icons

    var iconcode = weatherInfo.list[6].weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconone').src = icon_path;

    var iconcode = weatherInfo.list[14].weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icontwo').src = icon_path;

    var iconcode = weatherInfo.list[22].weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconthree').src = icon_path;

    var iconcode = weatherInfo.list[30].weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconfour').src = icon_path;

    var iconcode = weatherInfo.list[37].weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_iconfive').src = icon_path;
}
//end of the function