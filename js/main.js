"use strict";
let nameCuntry = document.getElementById('inpLocation');
let apiMethod = 'current';
let finalData = [];
let forecast = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let btn = document.getElementById('btn');

// Api
async function getWeather(nameCuntry){
    let response= await fetch (`https://api.weatherapi.com/v1/forecast.json?key=adfa082887c44c24a7d161026220706&q=${nameCuntry}&aqi=no&days=3`);
    finalData = await response.json();
    forecast= finalData.forecast;
    display();
}
// Display Data In html
function display(){
    let temp = `<!-- div Wether Today -->
    <div class="col-md-4 bg-weather p-0">
      <div class="content-data">
        <!-- Day And Date -->
        <div class="date d-flex justify-content-between align-items-center px-4 py-2 text-muted ">
          <p>${days[date.getDay()]}</p>
          <p>${ date.getDate() +months[date.getMonth()]}</p>
        </div>
        <div class="weather-today px-4 py-5">
          <!-- Cuntrry Name -->
          <h6 class="text-muted">${finalData.location.name}</h6>
          <div class="row">
            <!-- Today's temperature -->
            <div class="col-md-9 text-center py-4">
              <h1 class="text-white fw-bolder pt-5">${finalData.current.temp_c}<sup>O</sup>C</h1>
            </div>
            <!-- Icon that expresses the state of the weather -->
            <div class="col-md-3 text-center py-5">
              <img src="https://${finalData.current.condition.icon}" class="w-100" alt="">
            </div>
            <!-- the state of the weather -->
            <p class="text-primary py-3 fw-bold fs-4 ">${finalData.current.condition.text}</p>
            <!-- Icons Default -->
            <div class="icons py-4 text-center">
              <img src="./images/icon-umberella@2x.png" class="icon" alt="umberell">
              <span class="text-muted">20%</span>
              <img src="./images/icon-wind@2x.png" class="icon" alt="">
              <span class="text-muted">18km/h</span>
              <img src="./images/icon-compass@2x.png" class="icon" alt="">
              <span class="text-muted">East</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Div Weather Tomorrow -->
    <div class="col-md-4 bg-weather-tomorrow p-0">
      <!-- Div Tomorrw Day -->
      <div class="date-tomorrow   text-center  py-2">
        <p class="text-muted">${days[date.getDay()+1]}</p>
      </div>
      <!-- Div Weather Tomorrow -->
      <div class="Tomorrow-data text-center py-5 my-5 px-4">
        <img src="https://${forecast.forecastday[1].day.condition.icon}" alt="">
        <h2 class="text-white h1">${forecast.forecastday[1].day.maxtemp_c} <sup>O</sup>C</h2>
        <p class= "text-muted fs-4">${forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
        <p class="text-primary fs-2 fw-bold">${forecast.forecastday[1].day.condition.text}</p>
      </div>

    </div>   
    <div class="col-md-4 bg-weather p-0 border-weather">
      <div class="date  border-top-right py-2 text-center">
        <p class="text-muted">${days[date.getDay()+2]}</p>
      </div>
      <!-- Div Weather After tomorrow -->
      <div class="Tomorrow-data text-center py-5 my-5 px-4">
        <img src="https://${forecast.forecastday[2].day.condition.icon}" alt="">
        <h2 class="text-white h1">${forecast.forecastday[2].day.maxtemp_c} <sup>O</sup>C</h2>
        <p class= "text-muted fs-4">${forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
        <p class="text-primary fs-2 fw-bold">${forecast.forecastday[2].day.condition.text}</p>
      </div>
    </div>   
    
    `
  document.getElementById('row').innerHTML = temp;
}
// default display 
getWeather('cairo')
// search by onclick
btn.addEventListener('click' , function (){
  let location = nameCuntry.value;
  getWeather(location)
})
// search by real time search 
function search (searchValue){
    searchValue =nameCuntry.value;
    getWeather(searchValue)
}
// focus button design
nameCuntry.style.cssText=`background-color: #1e202b !important; color:#fff`;