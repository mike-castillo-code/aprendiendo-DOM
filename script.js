var h1 = document.querySelector('h1');
var input1 = document.querySelector('#calculo1');
var input2 = document.querySelector('#calculo2');
var btn = document.querySelector('#btnCalcular');
var pResult = document.querySelector('#result');

function btnOnClick(){
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}