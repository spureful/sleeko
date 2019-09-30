(function contForm() {

    const contForm = document.getElementById('js-contact-form');
    const inputName = document.getElementById('js-input-name');
    const inputAddres = document.getElementById('js-input-adress');
    const inputBudget = document.getElementById('js-input-budget');
    const inputDescr = document.getElementById('js-input-descr');

    const inputAll = document.getElementsByClassName('contactme__input');
    const labelEl = document.querySelectorAll('.contactme__lbl');

    const modalBlock = document.querySelector('.contactme__modal');
    const modalText = document.querySelector('.contactme__modal-txt');
    const modalBtn = document.querySelector('.contactme__modal-btn');



    let isName = false;
    let isAddres = false;
    let isBudget = false;
    let isDescr = false;
    let isItem = false;

    contForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!inputName.value) {

            let errorElName = document.createElement('span');

            const delNamePar = inputName.parentNode;

            if (delNamePar.childNodes.length >= 3) {
                delNamePar.lastChild.remove();

            }


            errorElName.className = 'input-error';
            errorElName.innerText = 'Пожалуйста, заполните это поле';
            inputName.parentElement.appendChild(errorElName);



        } else {
            console.log(inputName.value);

            const delNamePar = inputName.parentNode;


            if (
                //                !delNamePar.lastChild.classList.contains('contactme__input')
                delNamePar.childNodes.length >= 3
            ) {
                delNamePar.lastChild.remove();
            }


        }

        if (!inputAddres.value) {
            let errorElAddres = document.createElement('span');

            const delAddresPar = inputAddres.parentNode;

            if (delAddresPar.childNodes.length >= 3) {
                delAddresPar.lastChild.remove();

            }


            errorElAddres.className = 'input-error';
            errorElAddres.innerHTML = 'Пожалуйста, заполните это поле';
            inputAddres.parentElement.appendChild(errorElAddres);



        } else {
            console.log(inputAddres.value);
            const delAddresPar = inputAddres.parentNode;
            if (
                //                !delAddresPar.lastChild.classList.contains('contactme__input')
                delAddresPar.childNodes.length >= 3
            ) {
                delAddresPar.lastChild.remove();
            }
            //                elem.parentElement.removeChild(errorEl);


            //            
        };

        if (!inputBudget.value) {
            let errorElBudget = document.createElement('span');

            const delBudgetPar = inputBudget.parentNode;
            if (delBudgetPar.childNodes.length >= 3) {
                delBudgetPar.lastChild.remove();

            }


            errorElBudget.className = 'input-error';
            errorElBudget.innerHTML = 'Пожалуйста, заполните это поле';
            inputBudget.parentElement.appendChild(errorElBudget);


        } else {
            console.log(inputBudget.value);
            const delBudgetPar = inputBudget.parentNode;
            if (
                //                !delBudgetPar.lastChild.classList.contains('contactme__input')
                delBudgetPar.childNodes.length >= 3
            ) {
                delBudgetPar.lastChild.remove();
            }

            //                elem.parentElement.removeChild(errorEl);


            //            
        };

        if (!inputDescr.value) {
            let errorElDescr = document.createElement('span');

            const delDescrPar = inputDescr.parentNode;
            if (delDescrPar.childNodes.length >= 3) {
                delDescrPar.lastChild.remove();

            }


            errorElDescr.className = 'input-error';
            errorElDescr.innerHTML = 'Пожалуйста, заполните это поле';
            inputDescr.parentElement.appendChild(errorElDescr);



        } else {
            console.log(inputDescr.value);
            const delDescrPar = inputDescr.parentNode;
            if (
                //                !delDescrPar.lastChild.classList.contains('contactme__input')

                delDescrPar.childNodes.length >= 3
            ) {
                delDescrPar.lastChild.remove();
            }

            //                elem.parentElement.removeChild(errorEl);


            //            
        };



        if (inputName.value && inputAddres.value && inputBudget.value && inputDescr.value) {

            sendForm();
        }

        function sendForm() {
//            const form = $(e.target),
//			data = form.serialize(),
//			type = form.attr('method'),
//			url = form.attr('action');
//
//		const request = $.ajax({
//			type: type,
//			url: url,
//			dataType: 'json',
//			data: data}
//		)
//				
//		 
//		
//
//		request.done(function (msg) {
//			
//
//			const mes = msg.mes,
//				status = msg.status;
//			
//			if (status == 'OK') {
//
//
//		
//				 modalBlock.style.display = 'block';
//                        modalText.innerHTML = 'Ваша заявка принята';
//
//			} else {
//
//				 modalBlock.style.display = 'block';
//                        modalText.innerHTML = 'На сервере произошла ошибка';
//
//			}
//
//			
//
//		}).fail(function(jqXHR, textStatus) {
//        alert("Request failed: " + textStatus);})
		

            let formData = new FormData(contForm);
//           formData.append( inputName, inputName.value);
//           formData.append(inputName,inputBudget.value);

            fetch('./plugins/server.php', {
                    method: 'POST',
                  body: formData
                }).then(function (res) {

                    if (res.status == 200) {
                        modalBlock.style.display = 'block';
                        modalText.innerHTML = 'Ваша заявка принята';
//                        console.log(formData);
                    } else {
                        modalBlock.style.display = 'block';
                        modalText.innerHTML = 'На сервере произошла ошибка';
//                         console.log(formData);/
                    }
                })
                .catch(function (res) {


                    modalBlock.style.display = 'block';
                    modalText.innerHTML = res.statusText;
                })



            modalBtn.addEventListener('click', () => {
                modalBlock.style.display = 'none';
            })


        };

    });
}());
