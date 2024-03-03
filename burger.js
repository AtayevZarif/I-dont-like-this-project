const navSlide = () => {
    const burger = document.querySelector('.lines');
    const nav = document.querySelector('.nav__links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show__links');
    });
}

navSlide();