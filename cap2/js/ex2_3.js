function revendaDeVeiculos() {
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    var entrada = preco / 2;
    var parcela = entrada / 12;

    outPromocao.textContent = veiculo;
    outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
    outParcela.textContent = `+12x de R$: ${parcela.toFixed(2)}`;
}

var btPromocao = document.getElementById('btPromocao');
btPromocao.addEventListene('click', revendaDeVeiculos );

    
