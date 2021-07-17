const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Window: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Window()
        );
    },
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.list__li-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuDone = menuArrows[index];
            menuDone.addEventListener('click', function (e) {
                menuDone.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

// Бургер

const iconMenu = document.querySelector('.header__wrapper-icon');
const menuBody = document.querySelector('.header__wrapper-menu-body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_activeIcon');
        menuBody.classList.toggle('_activeBody');
    });
}

// Прокрутка при клике

const menuLink = document.querySelectorAll('a[data-goto]');

if (menuLink.length > 0) {
    menuLink.forEach((elem) => {
        elem.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(elem) {
        const ops = elem.target;
        if (ops.dataset.goto && document.querySelector(ops.dataset.goto)) {
            const gotoBlock = document.querySelector(ops.dataset.goto);
            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top +
                pageYOffset -
                document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_activeIcon')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_activeIcon');
                menuBody.classList.remove('_activeBody');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });
            elem.preventDefault();
        }
    }
}
