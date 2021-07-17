function tabsBoy(tabs, tabsContent, tabsParent) {
    tabs = document.querySelectorAll(tabs);
    tabsContent = document.querySelectorAll(tabsContent);
    tabsParent = document.querySelector(tabsParent);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none'
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }
    hideTabContent();
    
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'grid';
        tabs[i].classList.add('active');
    }
    showTabContent();
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
    
        if (target) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

tabsBoy('.tabs__header-item', '.tabs__content-item', '.tabs__header');