const $form = document.getElementById('formulario');
const $submitButton = document.getElementById('submit-btn');

let timeout = null;

let errors = {
    nombre: true,
    apellido: true,
    email: true,
    telefono: true,
    comentarios: true
};

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;
const telefonoformatRegex = /^[0-9-]+$/;

document.querySelectorAll('.form-group').forEach((box) => {
    const boxInput = box.querySelector('input, textarea');
    if (boxInput) {
        boxInput.addEventListener('keydown', (event) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                validation(box, boxInput);
            }, 300);
        });
    }
});

validation = (box, boxInput) => {
    if (boxInput.value == '') {
        showError(true, box, boxInput);
    } else {
        showError(false, box, boxInput);
    }

    if (boxInput.name == 'email') {
        if (!boxInput.value.match(mailformatRegex)) {
            showError(true, box, boxInput);
        } else {
            showError(false, box, boxInput);
        }
    }

    if (boxInput.name == 'telefono') {
        if (!boxInput.value.match(telefonoformatRegex)) {
            showError(true, box, boxInput);
        } else {
            showError(false, box, boxInput);
        }
    }
    submitController();
};

showError = (check, box, boxInput) => {
    if (check) {
        box.classList.remove('form-success');
        box.classList.add('form-error');
        errors[boxInput.name] = true;
    } else {
        box.classList.remove('form-error');
        box.classList.add('form-success');
        errors[boxInput.name] = false;
    }
};

submitController = () => {
    if (errors.nombre || errors.apellido || errors.email || errors.telefono || errors.comentarios) {
        $submitButton.toggleAttribute('disabled', true);
    } else {
        $submitButton.toggleAttribute('disabled', false);
    }
};

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        this.reset();
        $submitButton.toggleAttribute('disabled', true);

        Swal.fire({
            icon: 'success',
            title: 'Muchas Gracias',
            text: 'Pronto nos contáctaremos para ayudarte',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
    }
}