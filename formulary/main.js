//llamar al form completo y hacer lo del array, en eso validar que todo se cumpla y si sí, habilitar el botón
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const form = document.getElementById('form');

email.addEventListener('input', validEmail);
password.addEventListener('input', validPassword);
checkbox.addEventListener('change', validCheckbox);
form.addEventListener('click', submitData);

function validEmail() {
    const messageEmail = document.getElementById('messageEmail');
    const validEmailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (validEmailRegex.test(this.value)) {
        messageEmail.classList.remove('d-block');
        messageEmail.classList.add('d-none');
    } else {
        messageEmail.classList.add('d-block');
        messageEmail.classList.remove('d-none');
    }  
}

function validPassword() {
    if(this.value.length < 6) {
        console.log('la contraseña debe ser mayor a 6 caracteres');
    } else {
        console.log('aprobada');
        
    }
}

function validCheckbox() {
    if(this.checked === false) {
        console.log('acpetar térmminos');
        
    }
}

function submitData(e) {
    e.preventDefault();
    // this.disabled = true;
    
}
