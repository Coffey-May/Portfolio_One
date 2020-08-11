

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// let weatherArray = [];

// export const useWeatherArray = () => weatherArray;

// export const getWatherArray = () => {
//     return fetch(
//         "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW"
//     )
//         .then(response => response.json())
//         .then(parsedData => {
//             weatherArray = parsedData;
//         });
// };
// javascript, coffeescript, jquery...

function fetchData() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=adced04f1649ca9bd53f6267f3bd4317`).then(response => {
        return response.json()

    }).then(data => {
        console.log(data)
        document.getElementById('weather_card').innerHTML = `<h4>${data.name}</h4>
        
        <h6>TN</h6>
        <h5>icon${data.weather[0].icon}</h5>
        <h6>97 °F ${data.main.temp}</h6>
        <label for="city-select">Choose City:</label>

        <select style="background-color: transparent;" name="cars" id="cars">
            <option style="background-color: transparent;" value="London">London</option>
            <option style="background-color: transparent;" value="New York">New York</option>
            <option style="background-color: transparent;" value="Los Angeles">Los Angeles</option>
            <option style="background-color: transparent;" value="Dallas">Dallas</option>
        </select>`
    })
}
fetchData()


// let weather = []

// export const useWeather = () => {
//     return weather.slice()
// }
// export const getWeather = (cityName) => {
//     return fetch(`http://api.openweathermap.org/data/2.5/weather?q   &appid=adced04f1649ca9bd53f6267f3bd4317`)
//         .then(response => response.json())
//         .then(data => console.log(data))

// };

// console.log(getWeather("Nashville"))
// console.log(getWeather("New York"))
// console.log(getWeather("Phoenix"))


import { smoothScrollComponent } from './/smoothScroll.js'
// import { headerNavComponent } from './headerNav.js'
// import { landingPageComponent } from "./landingPage.js"


// headerNavComponent()
// landingPageComponent()
smoothScrollComponent()
