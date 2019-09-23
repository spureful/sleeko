(function mobileMenu() {
        const promoSection = document.querySelector('.promo');
        const menuModal = promoSection.firstElementChild;
        const menuList = menuModal.firstElementChild;
        const menuItems = menuList.querySelectorAll('.nav__item');
        const promoBtn = document.querySelector('.promo__btn');
        const menuBtn = document.querySelector('.nav-btn');

   
      
        menuBtn.addEventListener('click', function () {

            if (menuModal.classList.contains('active')) {
                menuModal.classList.remove('active');
                menuBtn.classList.remove('nav-btn-active');
            } else {
                menuModal.classList.add('active');
                menuBtn.classList.add('nav-btn-active');
            }
        });


        for( let i = 0; i < menuItems.length; i++ ) {
            
          
            menuItems[i].addEventListener('click', function () {
               
                if (menuModal.classList.contains('active')) {
                    menuModal.classList.remove('active');
                    menuBtn.classList.remove('nav-btn-active');
                } else {
                    menuModal.classList.add('active');
                    menuBtn.classList.add('nav-btn-active');
                }
            });
        };




}());
