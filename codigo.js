//variaveis
let ano1;
let ano2;
let resultado;
let Nome;
var idadeCachorro;
var qualCalculo

//usuario 
Nome = prompt("digite o seu nome");
ano1 = parseInt(prompt("digite o ano atual"));
ano2 = parseInt(prompt("Digite o ano que vc nasceu: "));

resultado = ano1 - ano2;

//resultado do calculo
alert(Nome + " a sua idade é " + resultado);

//idade de cachorro
idadeCachorro = resultado * 7;
alert("A idade do seu cachorro é " + idadeCachorro) 

//qual calculo vc quer?
qualCalculo = parseInt(prompt("Digite 1 para idade humana ou 2 para idade canina"));

if(qualCalculo == 1 ){
    alert(Nome + ", a sua idade é: " + resultado);
}  


if(qualCalculo == 2 ){
    idadeCachorro = resultado * 7;
    alert("A idade do seu cachorro é " + idadeCachorro)
}else{
    alert(nome + ", por favor digite um numero válido")    
}  