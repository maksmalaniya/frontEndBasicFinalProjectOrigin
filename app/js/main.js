(function() {
    const headerBurgerOpen = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__nav');
    const headerBurgerCLose = document.querySelector('.header__nav-close');

    headerBurgerOpen.addEventListener('click', event => {
        headerNavigation.classList.add('active')
    });

    headerBurgerCLose.addEventListener('click', event => {
        headerNavigation.classList.remove('active')
    });
})();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });