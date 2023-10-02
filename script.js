const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*btn.addEventListener('click', btnOnClick);   Si probamos con un boton fuera de un formulario*/
/*form.addEventListener('submit', sumarInputValues)     /*Si probamos con un boton dentro de un formulario: solución 1.

/*function sumarInputValues(event) {   Si probamos con un boton dentro de un formulario: solución 1.
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "resultado: " + sumaInputs;
}*/

btn.addEventListener('click', sumarInputValues);   //Si probamos con un boton dentro de un formulario: solucion 2.

function sumarInputValues(event) {   //Si probamos con un boton dentro de un formulario: solución 2.
    //console.log({event});
    //event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "resultado: " + sumaInputs;
}