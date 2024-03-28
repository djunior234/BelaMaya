function calcularSaldoRankeadas(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    return saldo;
}

// Exemplo de uso da função
var quantidadeVitorias = 110;
var quantidadeDerrotas = 2;
var saldoRankeadas = calcularSaldoRankeadas(quantidadeVitorias, quantidadeDerrotas);
console.log("Saldo de Rankeadas:", saldoRankeadas);

if (saldoRankeadas <= 10) {
	console.log("Nivel Ferro")
}else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
	console.log("Nivel Bronze")
}else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
	console.log("Nivel Prata")
}else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
	console.log("Nivel Ouro")
}else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
	console.log("Nivel Diamante")
}else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
	console.log("Nivel Lendario")
}else if (saldoRankeadas >= 101) {
	console.log("Imortal")
}
