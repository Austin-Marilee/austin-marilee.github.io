let forecastRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7';
forecastRequest.open('GET', apiURLstring, true);
forecastRequest.send();
forecastRequest.onload =  function () {
    let weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);

    var tempforecast = [];
    var dayofWeek = [];
    var icon = [];
    var day = 1;


    for (var i = 0; i < weatherData.list.length; i++) {
        if (weatherData.list[i].dt_txt.includes('18:00:00')) {
            
            var date = new Date(weatherData.list[i].dt * 1000);
            var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var findDate = dayOfWeek[date.getDay()];
            dayofWeek.push(findDate);
            
            tempforecast[day] = weatherData.list[i].main.temp;
            day++;

            var iconcode = weatherData.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            icon.push(icon_path);
        }
    }
}
for (var i = 1; i <= 5; i++) {
    document.getElementById('temp' + i).innerHTML = tempforecast[i];
    document.getElementById('day' + i).innerHTML = dayofWeek[i - 1];
    document.getElementById('icon' + i).src = icon[i - 1];
}