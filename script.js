// function displayWeather(lat, lon) {
//     var apiKey = 'YOUR_WEATHER_API_KEY';
//     var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById('weather-info').innerHTML = `
//           <h3>Weather in ${data.name}</h3>
//           <p>Temperature: ${data.main.temp} K</p>
//           <p>Weather: ${data.weather[0].description}</p>
//         `;
//     //   });
//   }

//   // Call displayWeather with appropriate latitude and longitude

const apiKey = "5e7303cf22364925abf65100d0c98a38";
const city = "";
const apiUrl =
  "https//:api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}";

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    document.getElementById("weather").innerText =
      "Failed to fetch weather data.";
  }
}

function displayWeather(data) {
  const weather = data.data[0];
  const weatherInfo = `
                  <h2>Weather in ${weather.city_name}</h2>
                  <p>Temperature: ${weather.temp} °C</p>
                  <p>Weather: ${weather.weather.description}</p>
                  <p>Humidity: ${weather.rh}%</p>
              `;
  document.getElementById("weather").innerHTML = weatherInfo;
}

fetchWeather();




function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 0, lng: 0 },
  });

  var geocoder = new google.maps.Geocoder();

  document.getElementById("search").addEventListener("click", function () {
    var address = document.getElementById("location").value;
    geocodeAddress(geocoder, map, address);
  });
}

function geocodeAddress(geocoder, map, address) {
  geocoder.geocode({ address: address }, function (results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

window.onload = initMap;


let light = document.getElementsByClassName('meet').addEventListener('click', clickme())

function clickme(){
  if
}