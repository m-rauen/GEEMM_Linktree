function scale_animation() {
    const option_btn = document.querySelector('.button');
    option_btn.classList.add('hover'); 
    option_btn.addEventListener('mouseleave', function() {
        option_btn.classList.remove('hover'); 
    });
}

function click_transition() {}
