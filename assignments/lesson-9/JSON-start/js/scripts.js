var weatherObject = new XMLHttpRequest()

weatherObject.open('GET','http://api.wunderground.com/api/5cc13ffc94a61b9c/conditions/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;
}//end of onload
