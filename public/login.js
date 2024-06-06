//logIn
const registro = document.getElementById('password')
const email = document.getElementById('email')
const form = document.getElementById('button');

// validar email
//(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)))

  form.addEventListener("click", (logIn) => {
    logIn.preventDefault()
    if (email.value == '' || email.value == null) {
        swal('Correo invalido', 'Inserte correctamente su correo', 'warning');
    }
    if (password.value.length <= 4) {
        swal('Contraseña muy corta', 'La contraseña debe tener al menos 6 carácteres. Todos los campos deben ser completados.', 'warning');
    }
    
})