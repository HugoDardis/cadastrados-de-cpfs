//passo 1: capturar o numero digitado pelo usuario 
const posicao = process.argv[2];

//passo 2: importar array de pessoa
const pessoas = require('./pessoas.json')

// passo 3: remover a pessoa da posicao
pessoa.splice(posicao, 1);

//passo 4: Salvar o array modificado (sem a pessoa) no arquivo 
const fs = require('fs');
fs.writeFileSync('./pessoas.json', JSON.stringify(pessoas,null,4))