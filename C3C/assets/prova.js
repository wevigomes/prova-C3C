//Questão 1


let ladoA = document.querySelector("#entrada1");
let ladoB = document.querySelector("#entrada2");
let ladoC = document.querySelector("#entrada3"); 
let calc = document.querySelector("#resp")
let btn = document.querySelector("#calcular");



btn.onclick = () =>{
    if(ladoA.value == ""){
        ladoA.focus();
    } else if(ladoB.value == ""){
        ladoB.focus();
    } else if(ladoC.value == ""){
        ladoC.focus();
    } else {
        calc.value = triangulo(ladoA.value, ladoB.value, ladoC.value)

    }
}

let triangulo = (valor1, valor2, valor3) =>{
    valor1 = Number.parseInt(valor1);
    valor2 = Number.parseInt(valor2);
    valor3 = Number.parseInt(valor3);

    if(valor1 < (valor2+valor3) && valor2 < (valor1+valor3) && valor3 < (valor1+valor2)){
        if((valor1 == valor2) || (valor1 == valor3) || (valor3 == valor2)){
            return 'Esse triângulo é isósceles.';
        } else if(valor1 == valor2 && valor2 == valor3){
            return 'Esse triângulo é equilátero.';
        } else {
            return 'Esse triângulo é escaleno.';
        }
    } else{ return "Não forma triângulo"}
}

// Questão 2

 let valorA = document.querySelector("#valordeA");
 let valorB = document.querySelector("#valordeB");
 let valorC = document.querySelector("#valordeC");
 let resul = document.querySelector("#resultBhask");

 let button = document.getElementById('calculo');
 let buttonLimpar = document.getElementById('limpar')

button.addEventListener('click', calculo);
buttonLimpar.addEventListener('click', limpar);
function calculo(z){
    z.preventDefault();
    let num1 = parseFloat(document.getElementById('valordeA').value);
    let num2 = parseFloat(document.getElementById('valordeB').value);
    let num3 = parseFloat(document.getElementById('valordeC').value);

    let delta = Math.pow(num2,2) -4*num1*num3;


    if(delta > 0){
        let x1 = ( (-num2 + Math.sqrt(delta) )/ (2*num1) );
        let x2 = ( (-num2 - Math.sqrt(delta) )/ (2*num1) );
        document.getElementById('resultBhask').innerHTML = `O X1 é =  ${x1} e o X2 é = ${+x2}`;
    } else if(delta === 0){
        let raizUnica = ( (-num2 + Math.sqrt(delta) )/ (2*num1) );
        document.getElementById('resultBhask').innerHTML = `
        Raíz Única = ` + raizUnica;
    } else if (delta < 0){
        document.getElementById('resultBhask').innerHTML = `
        Delta é negativo`;
    }

}
function limpar(z){
    document.getElementById('valordeA').value = '';
    document.getElementById('valordeB').value = '';
    document.getElementById('valordeC').value = '';
    document.getElementById('resultBhask').innerHTML = null;
}



//Questão 3 ver se funciona sem o paramento y

function calcularNota(){
    let notadoAluno = parseInt(document.getElementById('notaAluno').value)

    if(notadoAluno >= 38){
        function round(notadoAluno) {
            if (notadoAluno % 5 == 0) {
                return int(Math.floor(notadoAluno / 5)) * 5;
            } else {
                return (int(Math.floor(notadoAluno / 5)) * 5) + 5;
            }
        }
        document.getElementById('aprovacao').innerHTML = ' Resultado: Aluno aprovado. Sua nota é: ' +notadoAluno;
    }  else{
        document.getElementById('aprovacao').innerHTML = ' Resultado: Aluno reprovado!!!'
    }
    round();
}


// Questão 4 DESCONSIDERAR
var contar = parseInt(document.querySelector('#count').value);
let buttn= document.querySelector('#contar').value;
let mostrar = document.querySelector('#resultadoCount');


buttn.onclick = () =>{
    if(contar.value == ""){
        contar.focus();
    } else{
        mostrar.value = resultados;

    }
}
var Result = [];
let LuidyMoura = () => {
    
   
 
    for( let i = 0; i <= contar; i++){
 
         if(i % 5 == 0){
            Result.push("Luidy")
         }
         if(i % 9 == 0){
            Result.push("Moura")
         }
         if (i % 5 == 0 && i % 9 == 0){
 
            Result.push("LuidyMoura")
         }
 
         if (i % 5 != 0 || i % 9 != 0) {
            Result.push(i)
         }  }
 
    return (Result)
}




 