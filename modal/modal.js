function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger);
    modal = document.querySelector(modal);
    close = document.querySelector(close);
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

bindModal('.button', '.wrapper', '.modal__close');
