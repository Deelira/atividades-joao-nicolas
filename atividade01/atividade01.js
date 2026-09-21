// Crie uma lista contendo 10 números inteiros. Desenvolva uma função
// que receba essa lista como parâmetro e calcule e retorne a média de
// todos os valores armazenados.

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function calcularMedia(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma / lista.length;
}

let media = calcularMedia(lista);
console.log("Resposta 01");
console.log("A média dos valores da lista é: " + media);

// Crie uma função que receba uma lista de números inteiros e identifique
// o maior e o menor valor presentes na lista. A função deverá retornar os
// resultados sem utilizar funções prontas como math.max() e math.min().

function localizarMaiorMenorNumero(lista) {
  let maior = lista[0];
  let menor = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  return { maior, menor };
}

let resultado = localizarMaiorMenorNumero(lista);
console.log("Resposta 02");
console.log("O maior valor da lista é: " + resultado.maior);
console.log("O menor valor da lista é: " + resultado.menor);

// Crie uma lista contendo números inteiros e desenvolva uma função que
// percorra a lista e conte quantos valores são pares e quantos são
// ímpares. Ao final, apresente as duas quantidades.

let lista3 = [15, 25, 32, 18, 27];
let pares = [];
let impares = [];

function percorrerLista3(lista) {
  for (let i = 0; i < lista.length; i++) {
    let resultadoDivisao = lista[i] % 2;
    if (resultadoDivisao == 0) {
      pares.push(lista[i]);
    } else {
      impares.push(lista[i]);
    }
  }
}

percorrerLista3(lista3);

console.log("Resposta 03");
console.log("Os números pares são: " + pares);
console.log("Os números ímpares são: " + impares);

// Crie uma função que receba uma lista de números e um valor
// específico. A função deverá procurar esse valor na lista e informar se ele
// foi encontrado. Caso seja encontrado, informe também a posição em
// que ele aparece pela primeira vez.

lista4 = [5, 10, 15, 20, 25, 30];
console.log("Resposta 04");
function procurarValor(lista, valor) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == valor) {
      console.log("O valor " + valor + " foi encontrado na posição: " + i);
      return;
    }
  }
  console.log("O valor " + valor + " não foi encontrado na lista.");
}

procurarValor(lista4, 20);

// Crie uma lista contendo números inteiros e desenvolva uma função que
// receba essa lista e inverta a ordem dos seus elementos. Por exemplo,
// uma lista [10, 20, 30, 40] deverá resultar em [40, 30, 20, 10]. Não utilize
// o método reverse().

let lista5 = [10, 20, 30, 40, 80];

function inverterLista(lista) {
  let listaInversa = [];

  for (let i = lista.length - 1; i >= 0; i--) {
    listaInversa.push(lista[i]);
  }
  return listaInversa;
}
console.log("Resposta 05");
console.log("A lista invertida é: " + inverterLista(lista5));

// Crie uma função que receba duas listas de números inteiros e gere uma
// terceira lista contendo apenas os valores que aparecem nas duas listas.
// Não inclua valores repetidos na lista resultante.

let lista6 = [1, 2, 3, 4, 5];
let lista7 = [4, 5, 6, 7, 8];
let listaComum = [];

function gerarListaNumerosComuns(lista1, lista2) {
  for (let i = 0; i < lista1.length; i++) {
    for (let j = 0; j < lista2.length; j++) {
      if (lista1[i] == lista2[j]) {
        listaComum.push(lista1[i]);
      }
    }
  }
  return listaComum;
}
console.log("Resposta 06");
console.log(
  "A lista com os números comuns é: " + gerarListaNumerosComuns(lista6, lista7),
);

// Crie uma função que receba uma lista de números inteiros e verifique se
// existem valores repetidos. A função deverá informar quais valores
// aparecem mais de uma vez na lista.

let lista8 = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8];
let valoresRepetidos = [];

function verificarValoresRepetidos(lista) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[i] == lista[j] && !valoresRepetidos.includes(lista[i])) {
        valoresRepetidos.push(lista[i]);
      }
    }
  }
  return valoresRepetidos;
}
console.log("Resposta 07");
console.log(
  "Os números repetidos na lista são: " + verificarValoresRepetidos(lista8),
);

// Crie uma lista contendo números inteiros e desenvolva uma função que
// ordene os valores em ordem crescente. Implemente o algoritmo de
// ordenação manualmente, sem utilizar o método sort().

let lista9 = [5, 2, 8, 1, 4];

function ordenarLista(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j] > lista[j + 1]) {
        let temporaria = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temporaria;
      }
    }
  }
}

console.log("Resposta 08");
ordenarLista(lista9);
console.log("A lista ordenada em ordem crescente é: " + lista9);

// Crie uma função que receba uma lista de números inteiros e um número
// inteiro x. A função deverá deslocar os elementos da lista x posições para
// a direita. Por exemplo, considerando a lista [1, 2, 3, 4, 5] e x = 2, o
// resultado deverá ser [4, 5, 1, 2, 3]. Não utilizar métodos prontos para
// resolver.

let lista10 = [1, 2, 3, 4, 5];

function deslocarLista(lista, x) {
  let tamanho = lista.length;
  let deslocamento = x % tamanho;

  for (let i = 0; i < deslocamento; i++) {
    let ultimoElemento = lista[tamanho - 1];
    for (let j = tamanho - 1; j > 0; j--) {
      lista[j] = lista[j - 1];
    }
    lista[0] = ultimoElemento;
  }
  return lista;
}

console.log("Resposta 09");
console.log("A lista deslocada é: " + deslocarLista(lista10, 2));
