/////////////////// Traductor /////////////////////////////////////////////////////////////////

function getInput() {
    const $input = document.querySelector('#input').value;
    return $input;
}

function separarEnSilabas(palabra) {
    let palabraEnSilabas = silabaJS.getSilabas(palabra)['silabas'];
    return palabraEnSilabas;
}

function traductor(palabraEnSilabas) {
    let traduccion = '';

    palabraEnSilabas.forEach((objeto) => {
        stringSilaba = objeto['silaba'].trim();
        traduccion += stringSilaba;
        if (stringSilaba.includes('a')) {
            traduccion += 'pa ';
        } else if (stringSilaba.includes('e')) {
            traduccion += 'pe ';
        } else if (stringSilaba.includes('i')) {
            traduccion += 'pi ';
        } else if (stringSilaba.includes('o')) {
            traduccion += 'po ';
        } else if (stringSilaba.includes('u')) {
            traduccion += 'pu ';
        } else if ((stringSilaba = 'y')) {
            traduccion += 'pi ';
        }
    });
    return traduccion;
}

function giveOutput(output) {
    const $output = document.querySelector('#output');
    $output.value = output;
}

/////////////////// Verificacion del input ///////////////////////////////////////////////////////

function errores(hayErrores) {
    if (hayErrores) {
        mostrarErrores(hayErrores);
    }
    if (!hayErrores) {
        addClass();
        giveOutput(traductor(separarEnSilabas(getInput())));
    }
}

function validarInput(input) {
    if (input.trim().length === 0) {
        return 'El texto a traducir debe contener al menos un caracter.';
    }
    if (!/^[a-z \r\n]+$/i.test(input)) {
        //solo es necesario usar \n
        return 'El texto debe contener unicamente letras.';
    } else {
        return '';
    }
}

////////////////// Exposicion de errores encontrados ////////////////////////////////////////////

function mostrarErrores(errores) {
    removeClass();
    removeError();
    addError(errores);
    giveOutput('');
}

function removeClass() {
    let divError = document.querySelector('#error');
    divError.classList.remove('d-none');
}

function addClass() {
    let divError = document.querySelector('#error');
    divError.classList.add('d-none');
}

function removeError(error) {
    let divError = document.querySelector('#error');
    divError.textContent = '';
}

function addError(error) {
    let divError = document.querySelector('#error');
    divError.textContent = error;
}

/////////////////// Funcion onclick ///////////////////////////////////////////////////////////////

const $button = document.querySelector('#button');

$button.onclick = function () {
    errores(validarInput(getInput()));
};

////////////////////////////////////////////////////////////////////////////////////////////////////
