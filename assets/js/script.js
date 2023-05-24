const key = "161b51b7bfb7bc374ecd556438a97553";
var searchFormEl = document.getElementById('search-form');
var searchInputEl = document.getElementById('search-input');
var searchBtnEl = document.getElementById('search-button');
var searchedList = [];// empty array to store searched cities
var weatherDisplay = document.getElementById('weather-container');
var city = 'Toronto';



searchHandler();


function searchHandler() {

searchFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if(searchInputEl.value ==""){
        alert("Please enter a city");
    } else {
        city = `${searchInputEl.value}`;
        
        getForecast(city);
        getWeather(city);
        weatherDisplay.removeAttribute('class', 'hide');
   
    }  
})

};








function displayDates(date){
    day = date.split(" ")
    return day[0]
};

function getWeather(city) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(weatherURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        
        document.getElementById('current-date').innerHTML = dayjs().format('MMMM DD, YYYY');
        document.getElementById('current-city').innerHTML = data.name;
        document.getElementById('current-weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data.weather[0].icon + `@2x.png">`;
        document.getElementById('current-temp').innerHTML = data.main.temp + ' &#8451';
        document.getElementById('current-wind').innerHTML = data.wind.speed + ' km/h';
        document.getElementById('current-humid').innerHTML = data.main.humidity + ' %';
    })
      
};

function getForecast(city) {
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
  fetch(forecastURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var dayOne = data['list']['8']['dt_txt'];
    var dayTwo = data['list']['17']['dt_txt'];
    var dayThree = data['list']['25']['dt_txt'];
    var dayFour = data['list']['33']['dt_txt'];
    var dayFive = data['list']['39']['dt_txt'];

    document.getElementById('future-date-1').innerHTML = displayDates(dayOne);
    document.getElementById('future-temp-1').innerHTML = data['list']['8']['main']['temp'] + ' &#8451'
    document.getElementById('future-weather-icon-1').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data['list']['8']['weather']['0']['icon'] + `@2x.png">`;
    document.getElementById('future-wind-1').innerHTML = data['list']['8']['wind']['speed'] + ' km/h';
    document.getElementById('future-humid-1').innerHTML = data['list']['8']['main']['humidity'] + ' %';

    document.getElementById('future-date-2').innerHTML = displayDates(dayTwo);
    document.getElementById('future-temp-2').innerHTML = data['list']['17']['main']['temp'] + ' &#8451'
    document.getElementById('future-weather-icon-2').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data['list']['17']['weather']['0']['icon'] + `@2x.png">`;
    document.getElementById('future-wind-2').innerHTML = data['list']['17']['wind']['speed'] + ' km/h';
    document.getElementById('future-humid-2').innerHTML = data['list']['17']['main']['humidity'] + ' %';

    document.getElementById('future-date-3').innerHTML = displayDates(dayThree);
    document.getElementById('future-temp-3').innerHTML = data['list']['25']['main']['temp'] + ' &#8451'
    document.getElementById('future-weather-icon-3').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data['list']['25']['weather']['0']['icon'] + `@2x.png">`;
    document.getElementById('future-wind-3').innerHTML = data['list']['25']['wind']['speed'] + ' km/h';
    document.getElementById('future-humid-3').innerHTML = data['list']['25']['main']['humidity'] + ' %';

    document.getElementById('future-date-4').innerHTML = displayDates(dayFour);
    document.getElementById('future-temp-4').innerHTML = data['list']['33']['main']['temp'] + ' &#8451'
    document.getElementById('future-weather-icon-4').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data['list']['33']['weather']['0']['icon'] + `@2x.png">`;
    document.getElementById('future-wind-4').innerHTML = data['list']['33']['wind']['speed'] + ' km/h';
    document.getElementById('future-humid-4').innerHTML = data['list']['33']['main']['humidity'] + ' %';

    document.getElementById('future-date-5').innerHTML = displayDates(dayFive);
    document.getElementById('future-temp-5').innerHTML = data['list']['39']['main']['temp'] + ' &#8451'
    document.getElementById('future-weather-icon-5').innerHTML = `<img src="https://openweathermap.org/img/wn/` + data['list']['39']['weather']['0']['icon'] + `@2x.png">`;
    document.getElementById('future-wind-5').innerHTML = data['list']['39']['wind']['speed'] + ' km/h';
    document.getElementById('future-humid-5').innerHTML = data['list']['39']['main']['humidity'] + ' %';
  
  
       });   
};






      











