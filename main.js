let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');

document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    if(
        firstName.querySelector('input').value == '' || 
        lastName.querySelector('input').value == '' || 
        email.querySelector('input').value == '' || 
        password.querySelector('input').value == ''  
    ) {
        if(firstName.querySelector('input').value == '') {
            firstName.querySelector('.error-message').classList.add('activate');
            firstName.querySelector('.error-icon').classList.add('activate');
        }
        if(lastName.querySelector('input').value == '') {
            lastName.querySelector('.error-message').classList.add('activate');
            lastName.querySelector('.error-icon').classList.add('activate');
        }
        if(email.querySelector('input').value == '') {
            email.querySelector('.error-message').classList.add('activate');
            email.querySelector('.error-icon').classList.add('activate');
        }
        if(password.querySelector('input').value == '') {
            password.querySelector('.error-message').classList.add('activate');
            password.querySelector('.error-icon').classList.add('activate');
        }
    } else { //all inputs are not empty, so we check the email
        let pattern = new RegExp(/\w+@\w.\w/, 'i');
        if(!pattern.test(email.querySelector('input').value)) {
            email.querySelectorAll('.error-message')[1].classList.add('activate');
            email.querySelector('.error-icon').classList.add('activate');
        } else {
            email.querySelectorAll('.error-message')[1].classList.remove('activate');
            email.querySelector('.error-icon').classList.remove('activate');
            this.submit();
        }
    }
}

let input_groups = document.querySelectorAll('.input-group');
for(let i =0; i < input_groups.length; i++) {
    input_groups[i].querySelector('input').onkeyup = function() {
        if(this.value !==''){
            input_groups[i].querySelectorAll('.error-message')[0].classList.remove('activate');
            input_groups[i].querySelector('.error-icon').classList.remove('activate');
        } else {
            input_groups[i].querySelectorAll('.error-message')[0].classList.add('activate');
            input_groups[i].querySelector('.error-icon').classList.add('activate');
        }
    }
}

