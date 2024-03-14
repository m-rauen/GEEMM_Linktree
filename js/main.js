import {links} from './links.js'

function scale_animation() {
    const option_btn = document.querySelector('.button');
    option_btn.classList.add('hover'); 
    option_btn.addEventListener('mouseleave', function() {
        option_btn.classList.remove('hover'); 
    });
}

function add_links(links_array) {
    links_array.forEach(button => {
        const buttonElement = document.getElementById(button.name); 
        if (buttonElement) {
            buttonElement.addEventListener('click', () => {
                window.location.href = button.link;
            });
        } else {
            console.error(`element '${button.name}' bugado`)
        }
    });
}