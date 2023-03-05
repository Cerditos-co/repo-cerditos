let numeros = {
    num1: 0,
    num2: 0
};

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const formualario = document.querySelector('.formulario');

num1.addEventListener ('input', leerTexto);
num2.addEventListener ('input', leerTexto);
formualario.addEventListener('submit',function(e){
    e.preventDefault();

    resultado = sumar(numeros.num1, numeros.num2);
    document.getElementById('resultado').innerHTML = "La suma de estos dos valores es: " + resultado;
    console.log(resultado);
})


function leerTexto(e){
    numeros[e.target.id] = e.target.value;
}

function sumar(num1, num2){        
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    return suma = num1 + num2;
    
}
