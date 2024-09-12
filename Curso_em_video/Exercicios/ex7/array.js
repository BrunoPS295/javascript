//Isto é um array, um conjunto de numeros ou strings
let num = [6,8,2,3]

//Isto serve para atribuir diretamente o numero ou string a casa seleciona
//Não esquece que array começa no 0 não no 1
num[0] = 5

//Isto coloca um valor numa casa nova logo apos a ultima
num.push = 9

//diz quantas casas terão no array
num.length

//coloca os valores em ordem crescente
num.sort()

//procura o valor dentro do array
//caso ele não ache o valor ele retorna -1
num.indexOf(2)

//para carregar varioos arrays automaticamente
for(let i = 0;i < num.length;i++){
    console.log(num[i])
}

//forma mais simplificada
for(let u in num){
    console.log(num[u])
}
//le como se fosse 'para cada u na variavel num fassa'

//obs:o valor estara em ordem crescente pq antes eu coloquei o num.sorts()

