

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });



import { smoothScrollComponent } from './/smoothScroll.js'
import { headerNavComponent } from './headerNav.js'
// import { landingPageComponent } from "./landingPage.js"


headerNavComponent()
// landingPageComponent()
smoothScrollComponent()
