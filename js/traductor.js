const $button = document.querySelector('#button');

function getInput() {
    const $input = document.querySelector('#input').value;
    separarEnSilabas($input);
}

function separarEnSilabas(palabra) {
    let palabraEnSilabas = silabaJS.getSilabas(palabra)['silabas'];
    traductor(palabraEnSilabas);
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
    giveOutput(traduccion);
}

function giveOutput(output) {
    const $output = document.querySelector('#output');
    $output.value = output;
}

$button.onclick = function () {
    getInput();
};
