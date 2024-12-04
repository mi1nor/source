const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");
// Функция для открытия/закрытия шторки
function toggleSidebar() {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Закрыть шторку
        overlay.style.display = 'none'; // Скрыть оверлей
    } else {
        sidebar.style.left = '0px'; // Открыть шторку
        overlay.style.display = 'block'; // Показать оверлей
    }
}
function updateSliderValue() {
    // Обновление значения над ползунком
    sliderValue.innerText = `$${slider.value}`;
    // Позиционирование значения по горизонтали над ползунком
    const percentage = (slider.value - slider.min) / (slider.max - slider.min);
    const offset = percentage * slider.offsetWidth;
    sliderValue.style.left = `${offset}px`;
}

// Инициализация и обновление значения при изменении
slider.addEventListener("input", updateSliderValue);
updateSliderValue(); // Установка начального положения
// Обработчик события для кнопки бургер-меню
menuBtn.addEventListener('click', toggleSidebar);

// Обработчик события для оверлея
overlay.addEventListener('click', toggleSidebar);