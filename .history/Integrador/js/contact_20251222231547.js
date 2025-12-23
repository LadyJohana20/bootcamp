document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    function validateEmail(email) {
        // aceptar sólo dominios gmail.com o hotmail.com
        return /^[^\s@]+@(gmail|hotmail)\.com$/i.test(email);
    }

    function showError(el, msg) {
        const error = el.parentElement.querySelector('.error');
        if (error) error.textContent = msg;
        el.classList.add('invalid');
    }

    function clearError(el) {
        const error = el.parentElement.querySelector('.error');
        if (error) error.textContent = '';
        el.classList.remove('invalid');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        formMessage.textContent = '';
        formMessage.className = '';

        const name = nameEl.value.trim();
        if (name.length < 2) {
            showError(nameEl, 'Por favor ingresa tu nombre (mínimo 2 caracteres).');
            valid = false;
        } else clearError(nameEl);

        const email = emailEl.value.trim();
        if (!validateEmail(email)) {
            showError(emailEl, 'Ingresa un correo válido (gmail.com o hotmail.com).');
            valid = false;
        } else clearError(emailEl);

        const msg = messageEl.value.trim();
        if (msg.length < 10) {
            showError(messageEl, 'El mensaje debe tener al menos 10 caracteres.');
            valid = false;
        } else clearError(messageEl);

        if (!valid) {
            formMessage.textContent = 'Hay errores en el formulario. Por favor corrige los campos marcados.';
            formMessage.classList.add('form-error');
            return;
        }

        // Simular envío exitoso (aquí se podría usar fetch para enviar a un endpoint)
        formMessage.textContent = 'Mensaje enviado correctamente. Nos comunicaremos pronto.';
        formMessage.classList.add('form-success');
        form.reset();
    });

    // Validación en tiempo real
    [nameEl, emailEl, messageEl].forEach(function (el) {
        el.addEventListener('input', function () {
            if (el === nameEl) {
                if (el.value.trim().length >= 2) clearError(el);
            } else if (el === emailEl) {
                if (validateEmail(el.value.trim())) clearError(el);
            } else if (el === messageEl) {
                if (el.value.trim().length >= 10) clearError(el);
            }
        });
    });

});