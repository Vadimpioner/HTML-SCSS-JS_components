function CheckPro() {
    let checkIt = true;
    let dots = document.querySelector('.dots');
    let more = document.querySelector('.more');

    let btn = document.querySelector('.btn');
    if (!more || more.textContent == '') {
        btn.style.display = 'none';
        dots.style.display = 'none';
    }
    btn.addEventListener('click', () => {
        if (checkIt) {
            more.style.display = 'inline';
            dots.style.display = 'none';
            btn.innerHTML = 'Скрыть';
            checkIt = false;
        } else {
            dots.style.display = 'inline';
            more.style.display = 'none';
            btn.innerHTML = 'Подробнее';
            checkIt = true;
        }
    });
}
CheckPro();
