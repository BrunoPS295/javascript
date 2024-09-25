//Array
let num = [4,6,2]
//Suas casas são chamadas pelos numeros de 0 a infinito

//Objeto
let Eu = {
    nome:'Bruno',
    sexo:'M',
    peso:70,
    //Dentro de um objeto voçe pode colocar funções
    engordou(calorias=0){
        this.peso += calorias
    }
}
//Dentro de um objeto voçe pode chamar por quelquer nome que o atribuir.
Eu.engordou(2)
console.log(`Eu me chamo ${Eu.nome} sou do sexo ${Eu.sexo} e peso ${Eu.peso}`)