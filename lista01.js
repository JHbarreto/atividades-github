// Variáveis e tipos
// Crie duas variáveis, uma let e uma const, atribuindo valores de tipos diferentes (string e number). Exiba no console o tipo de cada uma usando typeof.
let numero = 7;
const nome = "julio";
console.log(typeof numero);
console.log(typeof nome);

// Entrada e decisão simples
// Crie uma função que receba um número e use if para verificar se ele é positivo, negativo ou zero. Retorne uma string com o resultado.
let num = 6;
function verificarNumero(num) {
    if (num > 0) { console.log("Positivo") }
    else if (num < 0) { console.log("Negativo") }
    else { console.log("Zero") }
}
verificarNumero(num);

// Par ou ímpar
// Escreva uma função que receba um número e retorne "Par" se for par ou "Ímpar" se for ímpar, usando o operador % e if/else.
let number = 3;
function parOuImpar(number) {
    if (number % 2 === 0) { console.log("par") }
    else { console.log("ímpar") }
}
parOuImpar(number);

// Laço for básico
// Use um for para imprimir no console todos os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Soma com for
// Crie uma função que receba um número n e retorne a soma de todos os números de 1 até n usando um laço for.
function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    console.log(soma);
}
somaAteN(7);

// Laço while
// Usando while, imprima no console os números de 10 até 1 em ordem decrescente.
let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

// Tabuada
// Crie uma função que receba um número e exiba no console a tabuada desse número de 1 a 10 usando for.

function tabuada(mult) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${mult} x ${i} = ${mult * i}`);
    }
}
tabuada(5);

// Decisão com switch
// Escreva uma função que receba o nome de um dia da semana (em minúsculas) e use switch para retornar se é dia útil ou fim de semana.
function diaSemana(dia) {
    switch (dia) {
        case "segunda":
        case "terça":
        case "quarta":
        case "quinta":
        case "sexta":
            console.log("Dia útil");
            break;
        case "sábado":
        case "domingo":
            console.log("Fim de semana");
            break;
        default:
            console.log("Dia inválido");
            break;
    }
}
diaSemana("segunda");

// Função com múltiplos parâmetros
// Crie uma função que receba nome, idade e cidade, e retorne uma frase formatada: "Meu nome é X, tenho Y anos e moro em Z.".
function apresentacao(nome, idade, cidade) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}
apresentacao("Julio", 7, "Recife");

// Combinação de estruturas
// Crie uma função que receba um array de números e retorne apenas os números pares, usando for e if.
let pares = [];
let impares = [];
function filtrarPares(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }
        else {
            impares.push(arr[i]);
        }
    }
}
filtrarPares(arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(pares);
console.log(impares);