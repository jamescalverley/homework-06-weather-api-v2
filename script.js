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
// **COMPLETE  clear search input form
// add function to not add search item to list if input value is null
// add dates to forecast cards


// search
let apiKey = "4e033b3f0bf4413196c595a89671e437";
let searchCities = ["london", "seattle"];
let city = "";

document.getElementById('searchBtn').addEventListener('click', searchBar);

// needs something to put city value into the api call
document.getElementById('list-group').addEventListener('click', getWeatherData);

function searchBar(){
    city = document.getElementById('searchInput').value;
    document.getElementById('searchInput').value = "";
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
    getForecastData(city);
};

// current weather
function getWeatherData( city ){
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
          document.getElementById('temperature').innerText = "Temperature: " + temp + String.fromCharCode(176) + "C";
          document.getElementById('humidity').innerText = "Humidiy: " + humidity + " %";
          document.getElementById('windSpeed').innerText = "Wind Speed: " + windSpeed + " km/h";
      }); 
}

// 5 day forecast
function getForecastData(city){
    
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`; 
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }). then(function(response){
        console.log(response);

        let foreTemp1 = Math.floor((response.list[3].main.temp) - 273.15);
        let foreHumidity1 = response.list[3].main.humidity;
        let foreTemp2 = Math.floor((response.list[11].main.temp) - 273.15);
        let foreHumidity2 = response.list[11].main.humidity;
        let foreTemp3 = Math.floor((response.list[19].main.temp) - 273.15);
        let foreHumidity3 = response.list[19].main.humidity;
        let foreTemp4 = Math.floor((response.list[27].main.temp) - 273.15);
        let foreHumidity4 = response.list[27].main.humidity;
        let foreTemp5 = Math.floor((response.list[35].main.temp) - 273.15);
        let foreHumidity5 = response.list[35].main.humidity;

        document.getElementById('foreTemp1').innerText = foreTemp1 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity1').innerText = "Humidity: " + foreHumidity1 + "%";
        document.getElementById('foreTemp2').innerText = foreTemp2 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity2').innerText = "Humidity: " + foreHumidity2 + "%";
        document.getElementById('foreTemp3').innerText = foreTemp3 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity3').innerText = "Humidity: " + foreHumidity3 + "%";
        document.getElementById('foreTemp4').innerText = foreTemp4 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity4').innerText = "Humidity: " + foreHumidity4 + "%";
        document.getElementById('foreTemp5').innerText = foreTemp5 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity5').innerText = "Humidity: " + foreHumidity5 + "%";

    });



}

getForecastData();





// UV Index







    
    




