document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const headerList = document.querySelector('.header__list');
    
    mobileMenuButton.addEventListener('click', function() {
        headerList.classList.toggle('active');
        

        const icon = this.querySelector('i');
        if (headerList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
 
    const headerLinks = document.querySelectorAll('.header__link');
    headerLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (headerList.classList.contains('active')) {
                headerList.classList.remove('active');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});