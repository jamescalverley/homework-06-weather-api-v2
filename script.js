// -------remaining items-------
// add 5 day forecast
// add search list functionality (add eventlistener to search button)
// add search button functionality to list items 
// localStorage / JSON / parse
// add icons to current and forecast weather
// add eventlistener on enter key
// finishing all styling
// make responsive
// add limit to number of buttons in search list


// search
let searchCities = ["london", "seattle"];
let city = "";

document.getElementById('searchBtn').addEventListener('click', searchBar);

function searchBar(){
    city = document.getElementById('searchInput').value;
    console.log(` search input: ${city}`)
    searchCities.unshift(city);
    console.log(`added to array: ${searchCities}`)
    
    // add search result to list
    let node = document.createElement('BUTTON');
    node.classList.add("list-group-item");
    node.classList.add("list-group-item-action");
    let textNode = document.createTextNode(city);node.appendChild(textNode);
    document.getElementById('list-group').appendChild(node);
    
    // run current weather function
    getWeatherData(city);
};


function getWeatherData( city ){
    let apiKey = "4e033b3f0bf4413196c595a89671e437";
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(queryURL);
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





// UV Index







    
    




