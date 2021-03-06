// -------remaining items-------
// **COMPLETE  add 5 day forecast
// **COMPLETE add UV index (based on color) >>> use async function
// add search list functionality (add eventlistener to search button)
// localStorage / JSON / parse
// **COMPLETE add icons to current weather  
// ** COMPLETE add icons to forecast weather
// **COMPLETE add eventlistener on enter key
// finishing all styling
// make responsive
// add limit to number of buttons in search list
// **COMPLETE  clear search input form
// add function to not add search item to list if input value is null >>> use if( !city){ alert(Please enter a city name!)}
// **COMPLETE add dates to forecast cards
// clean up all code
// look into github file tracking
// if city name entered is not a real city, add a message box
// add README file
// try setout to see how the timing of the functions works


// search
let apiKey = "4e033b3f0bf4413196c595a89671e437";
let searchCities = [];
let city = "";

init();

// current weather
async function getWeatherData(city){
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

          let city = response.name;
          let description = response.weather[0].description;
          let temp = Math.floor((response.main.temp) - 273.15);
          let humidity = response.main.humidity;
          let windSpeed = response.wind.speed;

          document.getElementById('cityName').innerText = city;
          document.getElementById('weatherDescription').innerText = description;
          document.getElementById('temperature').innerText = "Temperature: " + temp + String.fromCharCode(176) + "C";
          document.getElementById('humidity').innerText = "Humidiy: " + humidity + " %";
          document.getElementById('windSpeed').innerText = "Wind Speed: " + windSpeed + " km/h";

          let coordLAT =  response.coord.lat;
          let coordLON =  response.coord.lon;

        getUVIndex(coordLAT, coordLON);
        getForecastData(city);
      }); 
}
// uv index
async function getUVIndex(coordLAT, coordLON){
    let queryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${coordLAT}&lon=${coordLON}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        let uvIndex = response.value;

        document.getElementById('uvIndexValue').innerText = uvIndex;
        if(uvIndex <= 3){
            document.getElementById('uvIndexValue').className = "badge badge-success";
        }if(uvIndex > 3 && uvIndex <= 7){
            document.getElementById('uvIndexValue').className = "badge badge-warning";
        }if(uvIndex > 7){
            document.getElementById('uvIndexValue').className = "badge badge-danger";
        }
    });
}

// 5 day forecast
async function getForecastData(city){
    
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`; 
    $.ajax({
        url: queryURL,
        method: "GET"
    }). then(function(response){

        document.getElementById('foreCityName').innerText = "Five Day Forecast - " + city;

        let iconCode1 = response.list[2].weather[0].icon;
        let foreIcon1 = `https://openweathermap.org/img/wn/${iconCode1}@2x.png`
        let foreTemp1 = Math.floor((response.list[2].main.temp) - 273.15);
        let foreHumidity1 = response.list[2].main.humidity;
        let date1 = (`${moment(response.list[2].dt_txt).format('MMM-DD/YY')}`);

        let iconCode2 = response.list[10].weather[0].icon;
        let foreIcon2 = `https://openweathermap.org/img/wn/${iconCode2}@2x.png`
        let foreTemp2 = Math.floor((response.list[10].main.temp) - 273.15);
        let foreHumidity2 = response.list[10].main.humidity;
        let date2 = (`${moment(response.list[10].dt_txt).format('MMM-DD/YY')}`);

        let iconCode3 = response.list[18].weather[0].icon;
        let foreIcon3 = `https://openweathermap.org/img/wn/${iconCode3}@2x.png`
        let foreTemp3 = Math.floor((response.list[18].main.temp) - 273.15);
        let foreHumidity3 = response.list[18].main.humidity;
        let date3 = (`${moment(response.list[18].dt_txt).format('MMM-DD/YY')}`);

        let iconCode4 = response.list[26].weather[0].icon;
        let foreIcon4 = `https://openweathermap.org/img/wn/${iconCode4}@2x.png`
        let foreTemp4 = Math.floor((response.list[26].main.temp) - 273.15);
        let foreHumidity4 = response.list[26].main.humidity;
        let date4 = (`${moment(response.list[26].dt_txt).format('MMM-DD/YY')}`);

        let iconCode5 = response.list[34].weather[0].icon;
        let foreIcon5 = `https://openweathermap.org/img/wn/${iconCode5}@2x.png`
        let foreTemp5 = Math.floor((response.list[34].main.temp) - 273.15);
        let foreHumidity5 = response.list[34].main.humidity;
        let date5 = (`${moment(response.list[34].dt_txt).format('MMM-DD/YY')}`);

        document.getElementById('icon1').src = foreIcon1;
        document.getElementById('foreTemp1').innerText = foreTemp1 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity1').innerText = "Humidity: " + foreHumidity1 + "%";
        document.getElementById('date1').innerText = date1;

        document.getElementById('icon2').src = foreIcon2;
        document.getElementById('foreTemp2').innerText = foreTemp2 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity2').innerText = "Humidity: " + foreHumidity2 + "%";
        document.getElementById('date2').innerText = date2;

        document.getElementById('icon3').src = foreIcon3;
        document.getElementById('foreTemp3').innerText = foreTemp3 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity3').innerText = "Humidity: " + foreHumidity3 + "%";
        document.getElementById('date3').innerText = date3;

        document.getElementById('icon4').src = foreIcon4;
        document.getElementById('foreTemp4').innerText = foreTemp4 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity4').innerText = "Humidity: " + foreHumidity4 + "%";
        document.getElementById('date4').innerText = date4;

        document.getElementById('icon5').src = foreIcon5;
        document.getElementById('foreTemp5').innerText = foreTemp5 + String.fromCharCode(176) + "C";
        document.getElementById('foreHumidity5').innerText = "Humidity: " + foreHumidity5 + "%";
        document.getElementById('date5').innerText = date5;

    });
}

// search
document.getElementById('searchBtn').addEventListener('click', searchBar, renderCityList);
document.addEventListener('keydown', event => {
    if( event.keyCode === 13){
        searchBar();
    }
});
// document.querySelector(".list-group").addEventListener('click', buttonClick);

async function searchBar(){
    city = document.getElementById('searchInput').value;
    
    document.getElementById('searchInput').value = "";
    searchCities.unshift(city);
    console.log(searchCities);
  
    getWeatherData(city);
    getForecastData(city);
    renderCityList();
    storeCities();
};


function renderCityList(){
    let searchList = document.getElementById("list-group");
    searchList.innerHTML = "";

    for(let i=0; i < searchCities.length; i++){
        let cityItem = searchCities[i];

        let li = document.createElement("li");
        li.textContent = cityItem;
        li.className = "list-group-item";
        li.type = "button";        
        li.setAttribute("data-index", i);
        // onclick is running when the search button is clicked 
        // li.onclick = alert("clicked");
        searchList.appendChild(li);

    }
}

function storeCities(){
    localStorage.setItem("cities", JSON.stringify(searchCities));
}

function init(){
    let storedCities = JSON.parse(localStorage.getItem("cities"));

    if( storedCities !== null){
        searchCities = storedCities;
    }

    renderCityList();
}





    
    




 









    
    




