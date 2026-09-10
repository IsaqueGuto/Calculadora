function soma() {
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 + n2;

    const resultado = document.querySelector('div#resultado');
    resultado.innerHTML = `O resultado da soma entre ${n1} e ${n2} é igual a:  <strong>${soma}</strong>`;
}

function subtracao() {
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const subtracao = n1 - n2;

    const resultado = document.querySelector('div#resultado');
    resultado.innerHTML = `O resultado da subtração entre ${n1} e ${n2} é igual a:  <strong>${subtracao}</strong>`;
}

function multiplicar() {
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const multiplicacao = n1 * n2;

    const resultado = document.querySelector('div#resultado');
    resultado.innerHTML = `O resultado da multiplicação entre ${n1} e ${n2} é igual a:  <strong>${multiplicacao}</strong>`;
}

function dividir() {
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const divisao = n1 / n2;

    const resultado = document.querySelector('div#resultado');
    resultado.innerHTML = `O resultado da divisão entre ${n1} e ${n2} é igual a:  <strong>${divisao}</strong>`;
}

function limpar(){
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');
    const resultado = document.querySelector('div#resultado');

    inputN1.value = '';
    inputN2.value = '';
    resultado.innerHTML = '';
}