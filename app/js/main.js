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

(function() {
    const languageItem = document.querySelectorAll('.header__lang-item');

    languageItem.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            languageItem.addEventListener('click', event => {
                languageItem.classList.remove('active')
            });

            languageItem[index].classList.add('active');
        })
    })
    
})();

(function() {
    const tabItems = document.querySelectorAll('.experience__tab-link');
    const tabContent = document.querySelectorAll('.experience__content-item');

    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            tabContent.forEach(content => {
                content.classList.remove('active');
            });

            tabItems.forEach(tab => {
                tab.classList.remove('active');
            });

            tabContent[index].classList.add('active');
            tabItems[index].classList.add('active')
        })
    })   
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