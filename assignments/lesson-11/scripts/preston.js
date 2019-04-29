//PRESTON IDAHO 5604473

//WEATHER SUMMARY
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1b85c554f737909311537328716a5d15&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    //description, temp, humidity, windspeed
    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    //wind direction
    var degree = weatherInfo.wind.deg; //wind direction
    var compass = Math.round((degree - 11.25) / 22.5); //compass value
    // array of abbreviated (compass) names
    var windNames = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    var direction = windNames[compass]; // convert degrees and find wind direction name
    document.getElementById('windDegree').innerHTML = Math.round(degree) + '&deg;' + " ";
    document.getElementById('windDir').innerHTML = direction;

    //windchill
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

    //find date, temp and weather icon for 18:00:00 each day
    //adds each item to a separate array to use for display
    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            //date
            var date = new Date(weatherInfo.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);

            //temp
            var temp = weatherInfo.list[i].main.temp;
            var temp = Math.round(temp);
            listTemp.push(temp);

            //icon
            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
    }
    for (var i = 1; i <= 5; i++) {
        document.getElementById("highTemp" + i).innerHTML = listTemp[i -1];
        document.getElementById("weather_icon" + i).src = listIconCode[i -1];
        document.getElementById("day" + i).innerHTML = listDate[i -1];
    }
}

//EVENTS FOR PRESTON
var aside = document.querySelector('aside');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];
    for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Preston")) == false) {
            continue;
        }
        var myDiv = document.createElement('div');
        var myList = document.createElement('ul');
        var townEvents = data[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }
        myDiv.appendChild(myList);
        aside.appendChild(myDiv);
    }
}

//PRESTON IDAHO MAP
mapboxgl.accessToken = 'pk.eyJ1IjoibXBhdXN0aW4iLCJhIjoiY2pzNmNxa3d4MGFscDQ5bXYzZ3d0bDB4OSJ9.T4H6-wayVCA2MN73PmF8aQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-111.8766, 42.0963], // starting position
zoom: 9
});