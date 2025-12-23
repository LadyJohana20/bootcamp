document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');
    const msgBox = document.getElementById('formProductMessage');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (!form) return;

    // Expresiones regulares para validación
    const regex = {
        nombre: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]{2,100}$/, // letras, números, espacios, guiones
        precio: /^\d+(?:\.\d{1,2})?$/, // número positivo con hasta 2 decimales
        stock: /^\d+$/, // entero >= 0
        marca: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]{2,50}$/, // similar a nombre
        descCorta: /^.{10,150}$/, // 10-150 caracteres
        descLarga: /^.{20,2000}$/s, // 20-2000 caracteres (s dotall si disponible)
        edad: /^\d{1,3}$/,
        fotoExt: /\.(jpe?g|png|gif|webp|avif)$/i
    };

    function showError(el, message) {
        const err = el.parentElement.querySelector('.error');
        if (err) err.textContent = message;
        el.classList.add('invalid');
    }

    function clearError(el) {
        const err = el.parentElement.querySelector('.error');
        if (err) err.textContent = '';
        el.classList.remove('invalid');
    }

    function validate() {
        let valid = true;
        msgBox.textContent = '';
        msgBox.className = '';
        const errors = [];

        const nombre = document.getElementById('nombre');
        const precio = document.getElementById('precio');
        const stock = document.getElementById('stock');
        const marca = document.getElementById('marca');
        const categoria = document.getElementById('categoria');
        const descCorta = document.getElementById('descCorta');
        const descLarga = document.getElementById('descLarga');
        const edadDesde = document.getElementById('edadDesde');
        const edadHasta = document.getElementById('edadHasta');
        const foto = document.getElementById('foto');

        // nombre
        if (!regex.nombre.test(nombre.value.trim())) {
            showError(nombre, 'Nombre inválido: 2-100 caracteres, letras/números/espacios.');
            errors.push('Nombre inválido.');
            valid = false;
        } else clearError(nombre);

        // precio
        if (!regex.precio.test(precio.value.trim()) || Number(precio.value) <= 0) {
            showError(precio, 'Precio inválido: número positivo, opcionalmente con hasta 2 decimales (ej: 1250 o 1250.50).');
            errors.push('Precio inválido.');
            valid = false;
        } else clearError(precio);

        // stock
        if (!regex.stock.test(String(stock.value)) || Number(stock.value) < 0) {
            showError(stock, 'Stock inválido: entero mayor o igual a 0.');
            errors.push('Stock inválido.');
            valid = false;
        } else clearError(stock);

        // marca
        if (!regex.marca.test(marca.value.trim())) {
            showError(marca, 'Marca inválida: 2-50 caracteres.');
            errors.push('Marca inválida.');
            valid = false;
        } else clearError(marca);

        // categoria
        if (!categoria.value) {
            showError(categoria, 'Selecciona una categoría.');
            errors.push('Categoría no seleccionada.');
            valid = false;
        } else clearError(categoria);

        // descripcion corta
        if (!regex.descCorta.test(descCorta.value.trim())) {
            showError(descCorta, 'Descripción corta: entre 10 y 150 caracteres.');
            errors.push('Descripción corta inválida.');
            valid = false;
        } else clearError(descCorta);

        // descripcion larga
        // Como JS en la mayoría de entornos no soporta el flag s en algunos motores, validamos por longitud aquí
        const dl = descLarga.value.trim();
        if (dl.length < 20 || dl.length > 2000) {
            showError(descLarga, 'Descripción larga: entre 20 y 2000 caracteres.');
            errors.push('Descripción larga inválida.');
            valid = false;
        } else clearError(descLarga);

        // edad desde / hasta (opcionales)
        const desdeVal = edadDesde.value === '' ? null : Number(edadDesde.value);
        const hastaVal = edadHasta.value === '' ? null : Number(edadHasta.value);
        if (edadDesde.value !== '') {
            if (!regex.edad.test(String(edadDesde.value)) || desdeVal < 0 || desdeVal > 120) {
                showError(edadDesde, 'Edad desde inválida (0-120).');
                errors.push('Edad desde inválida.');
                valid = false;
            } else clearError(edadDesde);
        } else clearError(edadDesde);

        if (edadHasta.value !== '') {
            if (!regex.edad.test(String(edadHasta.value)) || hastaVal < 0 || hastaVal > 120) {
                showError(edadHasta, 'Edad hasta inválida (0-120).');
                errors.push('Edad hasta inválida.');
                valid = false;
            } else clearError(edadHasta);
        } else clearError(edadHasta);

        if (desdeVal !== null && hastaVal !== null && desdeVal > hastaVal) {
            showError(edadHasta, 'Edad hasta debe ser mayor o igual que Edad desde.');
            errors.push('Edad rango inválido.');
            valid = false;
        }

        // foto: opcional, validar extensión y tamaño <= 2MB
        if (foto.files && foto.files.length > 0) {
            const f = foto.files[0];
            if (!regex.fotoExt.test(f.name)) {
                showError(foto, 'Formato de imagen no permitido. Usa jpg, png, gif, webp o avif.');
                errors.push('Formato de foto inválido.');
                valid = false;
            } else if (f.size > 2 * 1024 * 1024) {
                showError(foto, 'La imagen supera los 2MB.');
                errors.push('Foto demasiado grande.');
                valid = false;
            } else clearError(foto);
        } else clearError(foto);

        // resumen de errores
        if (!valid) {
            msgBox.textContent = 'Hay errores en el formulario: ' + errors.join(' ');
            msgBox.classList.add('form-error');
        } else {
            msgBox.textContent = 'Producto validado correctamente (simulación de guardado).';
            msgBox.classList.add('form-success');
        }

        return valid;
    }

    // Validación al enviar
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // limpiar mensajes previos
        msgBox.textContent = '';
        msgBox.className = '';

        if (validate()) {
            // aquí se podría realizar fetch para enviar los datos a un servidor
            // por ahora solo mostramos mensaje de éxito
            // form.reset();
            // Opcional: scroll hasta el mensaje
            msgBox.focus && msgBox.focus();
        }
    });

    // Validación en tiempo real (parcial)
    ['input', 'change'].forEach(evt => {
        form.addEventListener(evt, function (e) {
            const target = e.target;
            if (!target) return;
            // validar campos individuales cuando el usuario escribe
            switch (target.id) {
                case 'nombre':
                    if (regex.nombre.test(target.value.trim())) clearError(target);
                    break;
                case 'precio':
                    if (regex.precio.test(target.value.trim()) && Number(target.value) > 0) clearError(target);
                    break;
                case 'stock':
                    if (regex.stock.test(String(target.value)) && Number(target.value) >= 0) clearError(target);
                    break;
                case 'marca':
                    if (regex.marca.test(target.value.trim())) clearError(target);
                    break;
                case 'categoria':
                    if (target.value) clearError(target);
                    break;
                case 'descCorta':
                    if (regex.descCorta.test(target.value.trim())) clearError(target);
                    break;
                case 'descLarga':
                    if (target.value.trim().length >= 20) clearError(target);
                    break;
                case 'edadDesde':
                case 'edadHasta':
                    // sólo limpiar el campo si está en rango
                    if (target.value === '' || (regex.edad.test(String(target.value)) && Number(target.value) >= 0 && Number(target.value) <= 120)) clearError(target);
                    break;
                case 'foto':
                    if (target.files && target.files.length > 0) {
                        const f = target.files[0];
                        if (regex.fotoExt.test(f.name) && f.size <= 2 * 1024 * 1024) clearError(target);
                    } else clearError(target);
                    break;
                default:
                    break;
            }
        });
    });

    // Búsqueda: demostración simple (alerta con término buscado)
    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const q = searchInput.value.trim();
            if (!q) return alert('Ingresa un término para buscar');
            // aquí iría la lógica de búsqueda (filtro en tabla o petición al servidor)
            alert('Buscando productos con: "' + q + '" (funcionalidad demo)');
        });
    }

});