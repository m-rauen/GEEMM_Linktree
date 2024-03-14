import {links} from './links.js'

function scale_animation() {
    const option_btn = document.querySelector('.button');
    option_btn.classList.add('hover'); // Add the 'hover' class on hover
    option_btn.addEventListener('mouseleave', function() {
        option_btn.classList.remove('hover'); // Remove the 'hover' class when mouse leaves
    });
}

// const linkContainer = document.getElementById('links-option_btn')

// function generateLink(name, link) {
//     return 
// }