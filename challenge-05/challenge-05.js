/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
  var arr = [2, 'teste', true, 15];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
 function retornoArr(args){
   return args;
 }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
  retornoArr(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 
  function twoParams(args, index){
    return args[index];
  }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// 
  var arr2 = [true, 15, 'Filipe', {teste:'ok'}, 34,[1,5,6]];
  

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
console.log(twoParams(arr2, 0));
console.log(twoParams(arr2, 1));
console.log(twoParams(arr2, 2));
console.log(twoParams(arr2, 3));
console.log(twoParams(arr2, 4));
console.log(twoParams(arr2, 5));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// 
 function book(oneBook) {
   var obj = {
     'LivroNinja': {
        quantidadePaginas: 5,
        autor: 'Filipe',
        editora: 'EZ'
     },
       'LivroDavi': {
        quantidadePaginas: 5,
        autor: 'Nona',
        editora: 'Abril'
     },
       'LivroJulia': {
        quantidadePaginas: 5,
        autor: 'Robert',
        editora: 'Globo'
     }, 
   }
    return !oneBook ? obj : obj[oneBook];
 }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 
  console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// 
  var nomeDoLivro = 'LivroDavi';
  console.log('O livro '+ nomeDoLivro + ' tem '+ book(nomeDoLivro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// 
  console.log('O autor do livro ' + nomeDoLivro + ' é ' + book(nomeDoLivro).autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// 
  console.log('O livro ' + nomeDoLivro + ' foi publicado pela editora ' + book(nomeDoLivro).editora +'.');
