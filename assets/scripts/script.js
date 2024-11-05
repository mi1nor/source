function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('show');
}

let lastScrollTop = 0;
const scrollHideThreshold = 50; // Порог для скрытия заголовка при прокрутке вниз

window.addEventListener('scroll', function () {
    const mainTitle = document.querySelector('.main > h1'); // Находим основной заголовок
    const logoText = document.querySelector('.logo'); // Находим текст "The Coding Revolution" в хедере
    const mainContent = document.querySelector('.main-content'); // Находим блок main-content
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Логика для скрытия заголовка только на мобильных устройствах
    if (window.innerWidth < 768) {
        if (currentScroll > lastScrollTop && currentScroll > scrollHideThreshold) {
            mainTitle.classList.add('hidden'); // Скрываем заголовок при прокрутке вниз
        } else if (currentScroll < lastScrollTop) {
            mainTitle.classList.remove('hidden'); // Показываем заголовок при прокрутке вверх
        }

        // Логика для скрытия текста "The Coding Revolution" при приближении к блоку main-content
        // const mainContentPosition = mainContent.getBoundingClientRect().top;

        // if (mainContentPosition < window.innerHeight / 2) {
        //     logoText.style.opacity = '0'; // Скрываем текст в хедере
        // } else {
        //     logoText.style.opacity = '1'; // Показываем текст в хедере
        // }
    }

    // Обновляем последнее положение прокрутки
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
