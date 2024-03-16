import page_links from './links';

function scale_animation() {
    const option_btn = document.querySelector('.button');
    option_btn.classList.add('hover'); 
    option_btn.addEventListener('mouseleave', function() {
        option_btn.classList.remove('hover'); 
    });
}

function add_links() {
    const a = document.getElementById('a-github');
    a.href = 'http://github.com'

    // a = document.getElementById('a-github')
    // a.href = 'http://github.com';

    // page_links.forEach(link => {
    //     const anchor = document.getElementById(link.name)
    //     if (anchor && anchor.tagName.toLowerCase() === 'a') {
    //         anchor.href = 'http://github.com';
    //     }
    // });

    // const page_button = document.getElementById('button')
    // if (button && links.name === button.id) {
    //     window.location= links.link;
    // }
}

// function add_links() {
//     if (links.name) === (document.getElementById(button.name)) {
//         window.location = links.link;
//     };
// };
//     links.forEach(button => {
//         const buttonElement = document.getElementById(button.name);
//         if (buttonElement) {
//             buttonElement.addEventListener('click', () => {
//                 window.open(button.link, '_blank');
//             });
//             buttonElement.style.cursor = 'pointer';
//         } else {
//             console.error(`Element with id '${button.name}' not found.`);
//         }
//     });
// }
