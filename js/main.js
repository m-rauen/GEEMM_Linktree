function click_animation(chosenOption) {
    const otherOptionId = chosenOption === 'link1' ? 'link2' :'link1';
    const otherOption = document.getElementById(otherOptionId);
    
    otherOption.classList.add('hide');
    
    setTimeout(function() {
    }, 1000); 
}

function scale_animation() {
    const option_btn = document.querySelector('.button');
    option_btn.classList.add('hover'); 
    option_btn.addEventListener('mouseleave', function() {
        option_btn.classList.remove('hover'); 
    });
}
