document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item')
        .classList.toggle('faq-accordion__item--active')
    }
});

document.querySelector('.btn-burger').addEventListener('click', (event) => {
    document.querySelector('.section-header').classList.toggle('section-header--active-nav')
    // console.log('fgf')
});


// document.querySelector
// btn-burger