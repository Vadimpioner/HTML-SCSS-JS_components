let animate = document.querySelectorAll('._animations');
if (animate.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animate.length; index++) {
            const elements = animate[index];
            const elementsHeight = elements.offsetHeight;
            const elementsOffset = offset(elements).top;
            const elementsStart = 4;

            let elementsPoint = window.innerHeight - elementsHeight / elementsStart;

            if (elementsHeight > window.innerHeight) {
                elementsPoint = window.innerHeight - window.innerHeight / elementsStart;
            }

            if (
                pageYOffset > elementsOffset - elementsPoint &&
                pageYOffset < elementsOffset + elementsHeight
            ) {
                elements.classList.add('_active');
            } else {
                if (!elements.classList.contains('_animations-no-hide'))
                    // если такой класс имеется при скроле вверх анимации не будет
                    elements.classList.remove('_active');
            }
        }
    }
    function offset(e) {
        const rect = e.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
