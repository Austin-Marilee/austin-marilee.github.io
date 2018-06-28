var weatherObject = new XMLHttpRequest()

weatherObject.open('GET','https://api.openweathermap.org/data/2.5/weather?id=5236279&APPID=2cfc9683fd95c1403584cfef0b9d6573&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentCond').innerHTML = weatherInfo.weather[0].main;


    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather-icon').innerHTML = icon_path;





}//end of onload


