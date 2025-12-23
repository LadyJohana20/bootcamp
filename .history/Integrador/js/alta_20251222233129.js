// Código sencillo y comentado, pensado para alguien que está aprendiendo
// Validaciones básicas con expresiones regulares y mensajes claros

document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del formulario
    var form = document.getElementById('productForm');
    var messageBox = document.getElementById('formProductMessage');
    var searchBtn = document.getElementById('searchBtn');
    var searchInput = document.getElementById('searchInput');

    if (!form) return; // si no existe el formulario, no seguimos

    // Reglas (expresiones regulares) simples
    var patterns = {
        nombre: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]{2,100}$/, // letras, números, espacios, guiones (2-100)
        precio: /^\d+(?:\.\d{1,2})?$/, // números, opcional decimal con 1 o 2 decimales
        stock: /^\d+$/, // solo dígitos
        marca: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]{2,50}$/, // 2-50
        descCorta: /^.{10,150}$/, // cualquier carácter (10-150)
        descLargaMin: 20, // mínima longitud para descripción larga
        fotoExt: /\.(jpe?g|png|gif|webp|avif)$/i // extensiones permitidas
    };

    // Funciones helpers muy simples
    function setError(element, text) {
        // muestra el mensaje de error junto al campo y marca el campo
        var err = element.parentElement.querySelector('.error');
        if (err) err.textContent = text;
        element.classList.add('invalid');
    }

    function clearError(element) {
        var err = element.parentElement.querySelector('.error');
        if (err) err.textContent = '';
        element.classList.remove('invalid');
    }

    // Validar todo el formulario
    function validateForm() {
        var isValid = true;
        // limpiar mensaje general
        messageBox.textContent = '';
        messageBox.className = '';

        // traer cada campo
        var nombre = document.getElementById('nombre');
        var precio = document.getElementById('precio');
        var stock = document.getElementById('stock');
        var marca = document.getElementById('marca');
        var categoria = document.getElementById('categoria');
        var descCorta = document.getElementById('descCorta');
        var descLarga = document.getElementById('descLarga');
        var edadDesde = document.getElementById('edadDesde');
        var edadHasta = document.getElementById('edadHasta');
        var foto = document.getElementById('foto');

        // validar nombre
        if (!patterns.nombre.test(nombre.value.trim())) {
            setError(nombre, 'Nombre inválido (2-100 caracteres).');
            isValid = false;
        } else {
            clearError(nombre);
        }

        // validar precio
        var precioVal = precio.value.trim();
        if (!patterns.precio.test(precioVal) || Number(precioVal) <= 0) {
            setError(precio, 'Precio inválido (número positivo, hasta 2 decimales).');
            isValid = false;
        } else {
            clearError(precio);
        }

        // validar stock
        var stockVal = stock.value;
        if (!patterns.stock.test(String(stockVal)) || Number(stockVal) < 0) {
            setError(stock, 'Stock inválido (entero >= 0).');
            isValid = false;
        } else {
            clearError(stock);
        }

        // validar marca
        if (!patterns.marca.test(marca.value.trim())) {
            setError(marca, 'Marca inválida (2-50 caracteres).');
            isValid = false;
        } else {
            clearError(marca);
        }

        // categoria obligatoria
        if (!categoria.value) {
            setError(categoria, 'Selecciona una categoría.');
            isValid = false;
        } else {
            clearError(categoria);
        }

        // descripción corta
        if (!patterns.descCorta.test(descCorta.value.trim())) {
            setError(descCorta, 'Descripción corta: 10-150 caracteres.');
            isValid = false;
        } else {
            clearError(descCorta);
        }

        // descripción larga: validar longitud mínima y máxima
        var dl = descLarga.value.trim();
        if (dl.length < patterns.descLargaMin || dl.length > 2000) {
            setError(descLarga, 'Descripción larga: 20-2000 caracteres.');
            isValid = false;
        } else {
            clearError(descLarga);
        }

        // edades (opcionales) validar rango si se completan
        var desde = edadDesde.value === '' ? null : Number(edadDesde.value);
        var hasta = edadHasta.value === '' ? null : Number(edadHasta.value);

        if (edadDesde.value !== '') {
            if (isNaN(desde) || desde < 0 || desde > 120) {
                setError(edadDesde, 'Edad desde inválida (0-120).');
                isValid = false;
            } else {
                clearError(edadDesde);
            }
        } else {
            clearError(edadDesde);
        }

        if (edadHasta.value !== '') {
            if (isNaN(hasta) || hasta < 0 || hasta > 120) {
                setError(edadHasta, 'Edad hasta inválida (0-120).');
                isValid = false;
            } else {
                clearError(edadHasta);
            }
        } else {
            clearError(edadHasta);
        }

        if (desde !== null && hasta !== null && desde > hasta) {
            setError(edadHasta, 'Edad hasta debe ser mayor o igual que edad desde.');
            isValid = false;
        }

        // foto (opcional) validar extensión y tamaño
        if (foto.files && foto.files.length > 0) {
            var f = foto.files[0];
            if (!patterns.fotoExt.test(f.name)) {
                setError(foto, 'Formato de foto no permitido. Usa jpg/png/gif/webp/avif.');
                isValid = false;
            } else if (f.size > 2 * 1024 * 1024) {
                setError(foto, 'La foto supera 2MB.');
                isValid = false;
            } else {
                clearError(foto);
            }
        } else {
            clearError(foto);
        }

        // mensaje general
        if (!isValid) {
            messageBox.textContent = 'Hay errores en el formulario. Revisa los campos marcados.';
            messageBox.className = 'form-error';
        } else {
            messageBox.textContent = 'Formulario validado correctamente (simulación).';
            messageBox.className = 'form-success';
        }

        return isValid;
    }

    // Cuando se envía el formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // parar el envío real
        messageBox.textContent = '';
        messageBox.className = '';

        if (validateForm()) {
            // aquí se podría enviar al servidor con fetch
            // por ahora solo mostramos éxito
            // form.reset();
            alert('Producto validado. (simulación de envío)');
        }
    });

    // Validación simple al escribir o cambiar campos
    form.addEventListener('input', function (e) {
        var t = e.target;
        if (!t) return;
        // sólo limpiamos el error si el campo cumple la regla ahora
        if (t.id === 'nombre') {
            if (patterns.nombre.test(t.value.trim())) clearError(t);
        }
        if (t.id === 'precio') {
            if (patterns.precio.test(t.value.trim()) && Number(t.value) > 0) clearError(t);
        }
        if (t.id === 'stock') {
            if (patterns.stock.test(String(t.value)) && Number(t.value) >= 0) clearError(t);
        }
        if (t.id === 'marca') {
            if (patterns.marca.test(t.value.trim())) clearError(t);
        }
        if (t.id === 'categoria') {
            if (t.value) clearError(t);
        }
        if (t.id === 'descCorta') {
            if (patterns.descCorta.test(t.value.trim())) clearError(t);
        }
        if (t.id === 'descLarga') {
            if (t.value.trim().length >= patterns.descLargaMin) clearError(t);
        }
        if (t.id === 'edadDesde' || t.id === 'edadHasta') {
            if (t.value === '' || (!isNaN(Number(t.value)) && Number(t.value) >= 0 && Number(t.value) <= 120)) clearError(t);
        }
        if (t.id === 'foto') {
            if (t.files && t.files.length > 0) {
                var f = t.files[0];
                if (patterns.fotoExt.test(f.name) && f.size <= 2 * 1024 * 1024) clearError(t);
            } else {
                clearError(t);
            }
        }
    });

    // Botón de búsqueda muy básico
    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            var q = searchInput.value.trim();
            if (!q) {
                alert('Ingresa algo para buscar.');
            } else {
                alert('Buscando: ' + q + ' (demo)');
            }
        });
    }
});