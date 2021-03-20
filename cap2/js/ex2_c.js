function verPromocao() {
    // cria referência aos elementos da página 
        var inProduto = document.getElementById('inProduto');
        var inPreco = document.getElementById('inPreco');
        var outPromocao = document.getElementById('outPromocao');
        var outPreco = document.getElementById('outPreco');


    // obtém conteudo dos campos de entrada
        var produto = inProduto.value;
        var preco = Number(inPreco.value);


    // calcular valores
        var terceiro = preco / 2;
        var total = (preco * 2) + terceiro;


    // mostrar mensagem
        outPromocao.textContent = `${produto} - Promoção: Leve 3 por ${total.toFixed(2)}`;
        outPreco.textContent = `O 3° produto custa apenas R$: ${terceiro.toFixed(2)}`;
}

// criar referencia ao elemento btProção (botao)
    var btVer = document.getElementById('btVer');
// registrar um evento associado ao botao, para carregar a função
    btVer.addEventListener("click", verPromocao);