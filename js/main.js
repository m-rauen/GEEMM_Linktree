import links from './links';

function scale_animation() {
    const option_btn = document.querySelector('.button');
    option_btn.classList.add('hover'); 
    option_btn.addEventListener('mouseleave', function() {
        option_btn.classList.remove('hover'); 
    });
}

function add_links() {
    links.forEach(button => {
        const buttonElement = document.getElementById(button.name);
        if (buttonElement) {
            buttonElement.addEventListener('click', () => {
                window.open(button.link, '_blank');
            });
            buttonElement.style.cursor = 'pointer';
        } else {
            console.error(`Element with id '${button.name}' not found.`);
        }
    });
}

add_links()