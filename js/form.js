/* referencia de elementos formulario */
window.addEventListener('load', () => {
    const form = document.querySelector('#formulario');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    /* const telefono = document.getElementById('telefono'); */
    const comentarios = document.getElementById('comentarios');

    /* establece el evento submit */
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    })

    /* captura valores ingresados en formulario */
    const validaCampos = () => {
        const nombreValor = nombre.value.trim();
        const apellidoValor = apellido.value.trim();
        const emailValor = email.value.trim();
        /* const telefonoValor = telefono.value.trim(); */
        const comentariosValor = comentarios.value.trim();

        /* valida nombre vacio */
        (!nombreValor) ? validaError(nombre, 'Campo vacio') : validaOk(nombre);

        /* valida apellido vacio */
        (!apellidoValor) ? validaError(apellido, 'Campo vacio') : validaOk(apellido);

        /* valida email vacio y formato valido */
        (!emailValor) ? validaError(email, 'Campo vacio') : (!validaEmail(emailValor)) ? validaError(nombre, 'El email no es válido') : validaOk(email);

        /* valida telefono vacio */
/*         (!telefonoValor) ? validaError(telefono, 'Campo vacio') : (!validaTelefono(telefonoValor)) ? validaError(telefono, 'El teléfono no es válido') : validaOk(telefono); */

        /* valida largo comentario */
        (!comentariosValor) ? validaError(comentarios, 'Campo vacio') : (!validaComentarios(comentariosValor)) ? validaError(comentarios, 'El comentario es demasiado largo') : validaOk(comentarios);
    }

    /* funciones que validan campos vacios */
    const validaError = (input, msje) => {
        const formControl = input.parentElement;
        const valida = formControl.querySelector('p');
        valida.className = 'error-msgs';
        valida.innerText = msje;

        input.className = 'form-element form-error';
    }

    const validaOk = (input) => {
        const formControl = input.parentElement;
        const valida = formControl.querySelector('p');
        valida.className = '';

        input.className = 'form-element form-ok'
    }

    /* funcion que valida el email */
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    /* funcion que valida el telefono */
/*     const validaTelefono = (telefono) => {
        return /^[0-9]$/.test(telefono);
    } */

    /* funcione que valida el largo de comentarios */
    const validaComentarios = (comentarios) => {
        return /^[\s\S]{0,5000}$/.test(comentarios);
    }
});