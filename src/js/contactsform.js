(function contForm() {

        const contForm = document.getElementById('js-contact-form');
        const inputName = document.getElementById('js-input-name');
        const inputAdres = document.getElementById('js-input-adress');
        const inputBudget = document.getElementById('js-input-budget');
        const inputDescr = document.getElementById('js-input-descr');

        const inputAll = document.querySelectorAll('.contactme__input');
        const labelEl = document.querySelectorAll('.contactme__lbl');

        const modalBlock = document.querySelector('.contactme__modal');
        const modalText = document.querySelector('.contactme__modal-txt');
        const modalBtn = document.querySelector('.contactme__modal-btn');

        let errorEl = document.createElement('span');
        //    let errorElClass = errorEl.classList.add('input-error');

        //    div.className = "alert";
        //div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

        //    цикл для проверки заполненности полей

        contForm.addEventListener('submit', function (e) {
                e.preventDefault();
               
                inputAll.forEach(function (elem) {
                    console.log(elem.value);
                    if (!elem.value) {
                      

                        errorEl.className = 'input-error';
                        errorEl.innerHTML = 'Пожалуйста, заполните это поле';
                        elem.parentElement.appendChild(errorEl)
                    } else {
                        console.log('full');
                       
                    }
                });
              
            }    

());
