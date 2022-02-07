const CPF = require('cpf');
const fs = require("fs")

// imprime uma mensagem de boas vindas 
console.log("Seja bem vindo ao cadastrador de CPFs");

// 1 - capturar o CPF digitado pelo usuario
const cpf = (process.argv[2]);

// 2 - validar o CPF
let cpfValido = CPF.isValid(cpf);

// 3 - caso a informação digitada seja um cpf valido salvar em um arquivo dados.txt
if(cpfValido){
  console.log("CPF valido! Salvando");
  fs.writeFileSync("dados.txt", cpf + "\n", {flag:"a"});
} else {
  console.log("CPF invalido. verifique se digitou corretamente")
};

// 4 - caso contrario, exibir mensagem de erro:

console.log("FIM");