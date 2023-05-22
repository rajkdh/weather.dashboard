const key = "161b51b7bfb7bc374ecd556438a97553";
var city;
var searchHistory=[];

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;

function getWeather(city) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(weatherURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById('current-city').innerHTML = data.name;
        document.getElementById('current-weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data.weather[0].icon + `@2x.png">`;
        document.getElementById('current-temp').innerHTML = data.main.temp + ' &#8451';
        document.getElementById('current-wind').innerHTML = data.wind.speed + ' km/h';
        document.getElementById('current-humid').innerHTML = data.main.humidity + ' %';
    })
      
};




getWeather('Toronto');









// function displayWeather(d){
//          document.getElementById('current-city').innerHTML = d.name; 
// };
window.onload = function(){
    getWeather('Toronto');
//     getWeather('Toronto');
//     displayWeather()
//     displayWeather();
}
