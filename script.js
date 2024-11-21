

window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-top-head-inside');
    if (window.scrollY > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});