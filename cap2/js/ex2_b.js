function MostrarValor() {
    var inValor = document.getElementById('inValor');
    var inPagar = document.getElementById('inPagar');
    var outPagar = document.getElementById('outPagar')

    var valor = Number(inValor.value);
    var tempo = Number(inPagar.value);

    var pagar = Math.ceil(tempo/15) * valor;

    outPagar.textContent =`Valor a Pagar R$: ${pagar.toFixed(2)}`;
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', MostrarValor);