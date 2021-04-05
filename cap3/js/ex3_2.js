function PesoIdeal() {
var inName = document.getElementById('inName')
var inAltura = document.getElementById('inAltura')
var inSexoM = document.getElementById('inSexoM')
var inSexoF = document.getElementById('insexoF')
var outResposta = document.getElementById('outResposta')

var nome = inName.value;
var masculino = inSexoM.checked;
var feminino = inSexoF.checked;
var altura = Number(inAltura.value);

var calculo1 = ((masculino == inSexoM) && 22*(altura**2))
var calculo2 = ((sexo == inSexoF) && 21*(altura**2))

if(sexo == calculo1 ){
    outResposta.textContent = `${nome}: Seu peso ideal é ${calculo1.toFixed(2)}`;
}else { if(sexo == calculo2)
    outResposta.textContent = `${nome}: Seu peso ideal é ${calculo2.toFixed(2)}`;
}
}
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', PesoIdeal);