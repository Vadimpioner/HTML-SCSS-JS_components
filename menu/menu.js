function menuAdaptive(hamburger, menu, menuClose, menuLink) {
    hamburger = document.querySelector(hamburger);
    menu = document.querySelector(menu);
    menuClose = document.querySelector(menuClose);
    menuLink = document.querySelectorAll(menuLink);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    menuLink.forEach((item) => {
        item.querySelector('a').addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', (e) => {
        // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

menuAdaptive('.hamburger', '.menu', '.menu__list-close', '.menu__list-items-li');
