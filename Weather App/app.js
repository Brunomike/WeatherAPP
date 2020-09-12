"use strict";
//Checking if service worker is availabe in the browser
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw_cached_pages.js")
      .then((reg) => console.log("Service Worker Registered"))
      .catch((err) => console.log(`Service Worker:Error: ${err}`));
  });
}
let button = document.querySelector(".fa-search");
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let temp = document.querySelector(".temp");
let mintemp = document.querySelector(".mintemp");
let maxtemp = document.querySelector(".maxtemp");
let _pressure = document.querySelector(".pressure");
let _humidity = document.querySelector(".humidity");
let icon = document.querySelector(".icons");
let icons = new Skycons({ color: "white" });

let search = document.querySelector("[data-city-search]");
search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputValue.value +
        ",{APIId}"
    )
      .then((response) => response.json())
      //.then(data => console.log(data))
      .then((data) => {
        let nameValue = data["name"];
        let tempValue = data["main"]["temp"];
        let descValue = data["weather"][0]["description"];
        let tempMaximum = data["main"]["temp_max"];
        let tempMinimum = data["main"]["temp_min"];
        let humidity = data["main"]["humidity"];
        let pressure = data["main"]["pressure"];
        let longitude = data["coord"]["lon"];
        let latitude = data["coord"]["lat"];

        let myObj = {
          locationName: nameValue,
          temperature: tempValue,
          descriptionText: descValue,
          maximumTemp: tempMaximum,
          minimumTemp: tempMinimum,
          pressureValue: pressure,
          humidityValue: humidity,
          longitudeValue: longitude,
          latitudeValue: latitude,
        };

        let myObj_serialized = JSON.stringify(myObj);
        localStorage.setItem("myObj", myObj_serialized);
        let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

        name.innerHTML = nameValue;
        temp.innerHTML = Math.round(tempValue - 273.15);
        description.innerHTML = descValue;
        maxtemp.innerHTML =
          "High " + Math.round(tempMaximum - 273.15) + "&#176C";
        mintemp.innerHTML =
          "Low " + Math.round(tempMinimum - 273.15) + "&#176C";
        _pressure.innerHTML = "Pressure " + pressure + " hPa";
        _humidity.innerHTML = "Humidity " + humidity + "% ";

        switch (descValue) {
          case "scattered clouds":
            icons.set("icon", Skycons.PARTLY_CLOUDY_DAY);
            icons.play();
            break;
          case "clear sky":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
          case "few clouds":
            icons.set("icon", Skycons.CLOUDY);
            icons.play();
            break;
          case "broken clouds":
            icons.set("icon", Skycons.PARTLY_CLOUDY_DAY);
            icons.play();
            break;
          case "overcast clouds":
            icons.set("icon", Skycons.CLOUDY);
            icons.play();
            break;
          case "shower rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;

          case "snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "mist":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
          case "thunderstorm with light rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "thunderstorm with rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "thunderstorm with heavy rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "light thunderstorm ":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "thunderstorm ":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "heavy thunderstorm ":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "ragged thunderstorm ":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "thunderstorm with light drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "thunderstorm with drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "thunderstorm with heavy drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "light intensity drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "heavy intensity drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "light intensity drizzle rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "drizzle rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "heavy intensity drizzle rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "shower rain and drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "heavy shower rain and drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "shower drizzle":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "light rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "moderate rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "heavy intensity rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "very heavy rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "extreme rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "freezing rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "light intensity shower rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "shower rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "heavy intensity shower rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "ragged shower rain":
            icons.set("icon", Skycons.RAIN);
            icons.play();
            break;
          case "light snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "heavy snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Sleet":
            icons.set("icon", Skycons.SLEET);
            icons.play();
            break;
          case "Light shower sleet":
            icons.set("icon", Skycons.SLEET);
            icons.play();
            break;
          case "Shower sleet":
            icons.set("icon", Skycons.SLEET);
            icons.play();
            break;
          case "Light rain and snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Rain and snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Light shower snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Shower snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Heavy shower snow":
            icons.set("icon", Skycons.SNOW);
            icons.play();
            break;
          case "Smoke":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
          case "Haze":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
          case "fog":
            icons.set("icon", Skycons.FOG);
            icons.play();
            break;
          case "dust":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
          case "volcanic ash":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
          case "squalls":
            icons.set("icon", Skycons.CLEAR_DAY);
            icons.play();
            break;
        }
      })
      .catch((err) => alert("Wrong City name!"));
  }
});

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      ",&appid=23d7b663275688cfca4066a206d8884b"
  )
    .then((response) => response.json())
    //.then(data => console.log(data))
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];
      let tempMaximum = data["main"]["temp_max"];
      let tempMinimum = data["main"]["temp_min"];
      let humidity = data["main"]["humidity"];
      let pressure = data["main"]["pressure"];
      let longitude = data["coord"]["lon"];
      let latitude = data["coord"]["lat"];

      name.innerHTML = nameValue;
      temp.innerHTML = Math.round(tempValue - 273.15);
      description.innerHTML = descValue;
      maxtemp.innerHTML = "High " + Math.round(tempMaximum - 273.15) + "&#176C";
      mintemp.innerHTML = "Low " + Math.round(tempMinimum - 273.15) + "&#176C";
      _pressure.innerHTML = "Pressure " + pressure + " hPa";
      _humidity.innerHTML = "Humidity " + humidity + "% ";
    })
    .catch((err) => alert("Wrong City name!"));
});

//Accessing API response saved in the localStorage
var data = JSON.parse(localStorage.getItem("myObj"));
//console.log(data)
// console.log(localStorage)
//console.log(data.locationName)

//Setting default data
name.innerHTML = data.locationName;
temp.innerHTML = Math.round(data.temperature - 273.15);
description.innerHTML = data.descriptionText;
maxtemp.innerHTML = "High " + Math.round(data.maximumTemp - 273.15) + "&#176C";
mintemp.innerHTML = "Low " + Math.round(data.minimumTemp - 273.15) + "&#176C";
_pressure.innerHTML = "Pressure " + data.pressureValue + " hPa";
_humidity.innerHTML = "Humidity " + data.humidityValue + " %";

switch (data.descriptionText) {
  case "scattered clouds":
    icons.set("icon", Skycons.PARTLY_CLOUDY_DAY);
    icons.play();
    break;
  case "clear sky":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
  case "few clouds":
    icons.set("icon", Skycons.CLOUDY);
    icons.play();
    break;
  case "broken clouds":
    icons.set("icon", Skycons.PARTLY_CLOUDY_DAY);
    icons.play();
    break;
  case "overcast clouds":
    icons.set("icon", Skycons.CLOUDY);
    icons.play();
    break;
  case "shower rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "mist":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
  case "thunderstorm with light rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm with rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm with heavy rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "light thunderstorm ":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm ":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "heavy thunderstorm ":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "ragged thunderstorm ":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm with light drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm with drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "thunderstorm with heavy drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "light intensity drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "heavy intensity drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "light intensity drizzle rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "drizzle rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "heavy intensity drizzle rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "shower rain and drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "heavy shower rain and drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "shower drizzle":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "light rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "moderate rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "heavy intensity rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "very heavy rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "extreme rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "freezing rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "light intensity shower rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "shower rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "heavy intensity shower rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "ragged shower rain":
    icons.set("icon", Skycons.RAIN);
    icons.play();
    break;
  case "light snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "heavy snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Sleet":
    icons.set("icon", Skycons.SLEET);
    icons.play();
    break;
  case "Light shower sleet":
    icons.set("icon", Skycons.SLEET);
    icons.play();
    break;
  case "Shower sleet":
    icons.set("icon", Skycons.SLEET);
    icons.play();
    break;
  case "Light rain and snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Rain and snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Light shower snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Shower snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Heavy shower snow":
    icons.set("icon", Skycons.SNOW);
    icons.play();
    break;
  case "Smoke":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
  case "Haze":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
  case "fog":
    icons.set("icon", Skycons.FOG);
    icons.play();
    break;
  case "dust":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
  case "volcanic ash":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
  case "squalls":
    icons.set("icon", Skycons.CLEAR_DAY);
    icons.play();
    break;
}
