/*
function ação(parãmetro){
return res
// A linha a cima  é a ação e o res é o retorno 
}
ação(5) ->chamada
*/

function par_impar(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res1 = par_impar(6)
console.log(res1)

//Dois parãmetros
function soma(n1=0,n2=0){
    return n1 + n2
}
let res2 = soma(8,9)
console.log(res2)
//OBS:A igualdade ao lado dos parametros serve para dar um valor a ele caso o resto do codigo n de ou seja se eu não colocar os dois valores no soma ele vai considerar a igualdade

//Colocando a função numa variavel
var res3 = function(x){
    return x*2
}
console.log(res3(2))
//OBS:Nesse caso n precisa de uma ação

//Rescursividade ou seja chamar a function dentro dela mesma
function fat(x){
    if (x==1){
        return 1
    }else{
        return x * fat(x-1)
    }
}
console.log(fat(5))