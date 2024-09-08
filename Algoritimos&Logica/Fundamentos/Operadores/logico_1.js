let temDinheiro = false
let estaEnsolarado = true
let carroEstaNaGaragem = true

let resultadoE = " Vai para o Shoping ? "
resultadoE += temDinheiro && estaEnsolarado //( AND )E os dois operações tem que ser verdadeiras

console.log(resultadoE)

let resultadoOU = " Vai para o Shopping ?"
resultadoOU += estaEnsolarado || carroEstaNaGaragem // ( or ) uma das condições tem que ser verdadeirtas

console.log(resultadoOU)