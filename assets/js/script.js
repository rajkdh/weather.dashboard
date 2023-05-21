var key = "161b51b7bfb7bc374ecd556438a97553";
var city;
var searchHistory=[];

function getWeather(city) {
var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    fetch(forecastURL).then((resp) => { return resp.json()}).then(function(data){
        console.log(data);
    })
    fetch(weatherURL).then((resp) => {return resp.json()});

}

getWeather('Toronto');