var key = "1afe52a96aafad62ee177005ae870f46";
var city;
//var forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key key + '&units=metric';

function currentWeather( city ) {
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric'
    fetch(queryURL)
    .then(function(response) { return response.json() })
    .then(function(data) {
        displayWeather(data);
    })
    .catch(function() {

    });  
}
function displayWeather(data) {
   
    document.getElementById('current-city').innerHTML = data.name;
    document.getElementById('current-date').innerHTML = dayjs().format('MMMM D, YYYY')
    document.getElementById('current-weather-icon').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png"/>';
    document.getElementById('current-temp').innerHTML = data.main.temp + ' &deg;';
    document.getElementById('current-wind').innerHTML = data.wind.speed + " km/h";
    document.getElementById('current-humid').innerHTML = data.main.humidity + ' %';


}


window.onload = function() {
    currentWeather('Toronto')

}