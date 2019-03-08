//PRESTON IDAHO 5604473

//WEATHER SUMMARY
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1b85c554f737909311537328716a5d15&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].description;
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

    //find date, temp and weather icon for 15:00:00 each day
    //adds each item to a separate array to use for display

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var listDate = [];
    var listDay = []
    var listMonth = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("15:00:00")) {
            //date
            var date = new Date(weatherInfo.list[i].dt * 1000);
            var findMonth = month[date.getMonth()];
            var findDay = weekday[date.getDay()];
            listDate.push(date);
            listDay.push(findDay);
            listMonth.push(findMonth);
            //temp
            var temp = weatherInfo.list[i].main.temp_max;
            listTemp.push(temp);
            //icon
            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }

    //Display forecast date
    document.getElementById('day1').innerHTML = listDay[0] + ',<br>' + listMonth[0] + ' ' + listDate[0].getDate();
    document.getElementById('day2').innerHTML = listDay[1] + ',<br>' + listMonth[1] + ' ' + listDate[1].getDate();
    document.getElementById('day3').innerHTML = listDay[2] + ',<br>' + listMonth[2] + ' ' + listDate[2].getDate();
    document.getElementById('day4').innerHTML = listDay[3] + ',<br>' + listMonth[3] + ' ' + listDate[3].getDate();
    document.getElementById('day5').innerHTML = listDay[4] + ',<br>' + listMonth[4] + ' ' + listDate[4].getDate();
    //Display corresponding weather icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    //Display forecasted temperature
    document.getElementById("highTemp1").innerHTML = listTemp[0];
    document.getElementById("highTemp2").innerHTML = listTemp[1];
    document.getElementById("highTemp3").innerHTML = listTemp[2];
    document.getElementById("highTemp4").innerHTML = listTemp[3];
    document.getElementById("highTemp5").innerHTML = listTemp[4];

}