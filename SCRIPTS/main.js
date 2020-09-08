// import { dotenv } from "../node_modules/dotenv";

// console.log("secret message")
// process.env.API_KEY;

// require('dotenv').config();
// const api_key = process.env.API_KEY;


// const api_key = "adced04f1649ca9bd53f6267f3bd4317";


// function fetchData() {

//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${api_key}`).then(response => {
//         return response.json()

//     }).then(data => {
//         console.log(data)
//         document.getElementById('weather_card').innerHTML = `<h4>${data.name}</h4>

//         <h6>TN</h6>
//         <h5>icon${data.weather[0].icon}</h5>
//         <h6>${data.main.temp} °F</h6>
//         <label for="city-select">Choose City:</label>

//         <select style="background-color: transparent;" name="cars" id="cars">
//             <option style="background-color: transparent;" value="London">London</option>
//             <option style="background-color: transparent;" value="New York">New York</option>
//             <option style="background-color: transparent;" value="Los Angeles">Los Angeles</option>
//             <option style="background-color: transparent;" value="Dallas">Dallas</option>
//         </select>`
//     })
// }
// fetchData()




import { smoothScrollComponent } from './/smoothScroll.js'
// import { headerNavComponent } from './headerNav.js'
// import { landingPageComponent } from "./landingPage.js"

//Comment
// headerNavComponent()
// landingPageComponent()
smoothScrollComponent()
