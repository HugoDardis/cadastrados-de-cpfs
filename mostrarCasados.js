const pessoas = require('./pessoas.json');
let ehCasado = p =>{
    return p.casado;
}
let casados = pessoas.filter(ehCasado);
console.table(casados);
