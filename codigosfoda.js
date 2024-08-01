
//desafio ultimato//

//Fazer uma calculadora que verifica quantos pontos um estudante
//precisa para passar de ano no ultimo trimestre 

//Dicas: O estudante  prcisa informar as notas do primeiro e segundo trimeste
//com essa dados, a calculadora precisa informar quantos pontos ele precisa para pasa 
//de ano no terceiiro trimestre. Se o estudante  já estiver aprovado no segundo trimestre 
//mandar uma mensagem de parabéns!

// ultilizar como média o valor 6.0


//variaveis
let tri1;
let tri2;
let tri3;
let Nome;
let resultadofinal;

//usuario 
Nome = prompt("digite o seu nome");
tri1 = parseInt(prompt("digite a nota do primeiro trimestre"));
tri2 = parseInt(prompt("digite a nota do segundo trimestre"));
tri3 = parseInt(prompt("digite a nota do terceiro trimestre"));

resultadofinal = tri1 + tri2 + tri3 - 180;

if(resultadofinal >= 180 ){
    alert(Nome + "sua nota é " + resultadofinal);
}  
