var key = "161b51b7bfb7bc374ecd556438a97553";
var city;
//var forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key key + '&units=metric';

function weather( city ) {
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric'
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&appid=" + key + '&units=metric'
    fetch(queryURL).then(function(response) { return response.json() });
    fetch(forecastURL).then(function(response) { return response.json() });

    displayWeather(data);  
};
function displayWeather(data) {
   
    document.getElementById('current-city').innerHTML = data.name;
    document.getElementById('current-date').innerHTML = dayjs().format('MMMM D, YYYY')
    document.getElementById('current-weather-icon').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png"/>';
    document.getElementById('current-temp').innerHTML = data.main.temp + ' &deg;' + 'C';
    document.getElementById('current-wind').innerHTML = data.wind.speed + " km/h";
    document.getElementById('current-humid').innerHTML = data.main.humidity + ' %';

}


window.onload = function() {
    weather('Toronto')

}