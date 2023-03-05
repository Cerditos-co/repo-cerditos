//resta
const restar = document.querySelector('.btn-restar');

//evento resta
restar.addEventListener('click', function(e){
    e.preventDefault();

    resultado = resta(numeros.num1, numeros.num2);
    document.getElementById('resultado').innerHTML = "La resta de estos dos valores es: " + resultado;
})

function resta(num1, num2){        
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    return resta = num1 - num2;
}