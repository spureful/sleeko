(function mobileMenu() {

    const menuBtn = document.querySelector('.nav-btn');
    const menuModal = document.querySelector('.nav');
    const menuItem = document.querySelectorAll('.nav__item');
    
    console.log(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        console.log('btn');
        menuModal.classList.add('active');
        console.log('btgn');
    });
}());