const emptyFieldError = 'Пустое поле'
const characterCountError = 'Кол-во символов должно быть: '
const emailError = 'Email указан не верно'
const languageError = 'Написание на кирилице'
const err5 = 'Ошибка5' //резерв
const err6 = 'Ошибка6' //резерв



function validation(form) {

    function removeErr(input) {
        const parent = input.parentNode

        if (input.dataset.validCheckbox) {
            if (parent.classList.contains('error')) {
                parent.classList.remove('error')
                return
            }
        } 

        if (parent.classList.contains('error')) {
            parent.querySelector('.err-label').remove()
            parent.classList.remove('error')
        }

    }


    function createErr(input, textErr) {
        const parent = input.parentNode

        if (textErr) {
            const errLabel = document.createElement('label')

            errLabel.textContent = textErr

            parent.classList.add('error')
            errLabel.classList.add('err-label')

            parent.append(errLabel)
        }
    }



    function validateEmail(email) {
        let checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return checkMail.test(String(email).toLowerCase());
    }

    function validationLanguage(inpText) {
        let checkName = /^[А-Яа-яЁё]/
        return checkName.test(inpText)
    }

    function validationLen(inputLen, validLen) {
        let validFlag = true


        if (validLen >= inputLen) {
            validFlag = false
        }


        return validFlag
    }

    let result = true

    function validInp(input) {
        removeErr(input)
        if (input.dataset.validName == 'True') {
            removeErr(input)

            let nameCheck = validationLanguage(input.value)

            if (!nameCheck) {
                result = false
                removeErr(input)
                createErr(input, languageError)

            }
        }

        if (input.dataset.validEmail == 'True') {
            removeErr(input)

            if (!validateEmail(input.value)) {
                result = false
                removeErr(input)
                createErr(input, emailError)


            }
        }



        if (input.dataset.validCheckbox == 'True') {
            removeErr(input)

            if (!input.checked) {
                input.parentNode.classList.add('error')
            }
        }


        if (input.dataset.validLenMin != undefined) {

            const inpLen = input.value.length


            if (inpLen != null) {

                if (validationLen(input.dataset.validLenMin, inpLen)) {
                    result = false
                    removeErr(input)
                    createErr(input, `${characterCountError} ${input.dataset.validLenMin}`)
                }
            }
        }

        if (input.value == '') {
            result = false
            removeErr(input)
            createErr(input, emptyFieldError)

        }
    }

    //Валидация input
    form.querySelectorAll('input').forEach(input => {
        validInp(input)

    });

    form.querySelectorAll('textarea').forEach(textarea => {

        validInp(textarea)

    })

    return result
}


document.getElementById('about-form').addEventListener('submit', function (event) {
    event.preventDefault()


    validation(this)
})


