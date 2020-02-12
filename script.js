
// API stuff
let apiKey = "4e033b3f0bf4413196c595a89671e437";
let cityInput = "Seattle"
let cityName = cityInput.toLowerCase();
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

console.log(queryURL);

//get api info
function getWeatherData( cityName ){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
          console.log(response);

          let city = response.name;
          let description = response.weather[0].description;
          let temp = Math.floor((response.main.temp) - 273.15);
          let humidity = response.main.humidity;
          let windSpeed = response.wind.speed;
          let uvLon = "";

          document.getElementById('cityName').innerText = city;
          document.getElementById('weatherDescription').innerText = description;
          document.getElementById('temperature').innerText = "Temperature: " + temp + " degrees";
          document.getElementById('humidity').innerText = "Humidiy: " + humidity + " %";
          document.getElementById('windSpeed').innerText = "Wind Speed: " + windSpeed + " km/h";
      }); 
}

getWeatherData();

// Search 

let searchCities = ["london", "seattle"];

document.getElementById('searchBtn').addEventListener('click', searchBar);

function searchBar(){
    let search = document.getElementById('searchInput').value;
    console.log(` search input: ${search}`)
    searchCities.unshift(search);
    console.log(`added to array: ${searchCities}`)
    document.getElementById('searchResult').innerText = search;
};

// render search button list

function renderSearchList(){
    for(city in searchCities){
        document.getElementById('list-group').innerText = city;
    }


};

// UV Index







    
    




