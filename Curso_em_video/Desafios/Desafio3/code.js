let conj = [];
let iconj = document.getElementById('iconj')
let n1 = document.getElementById('in1');
let res = document.getElementById('ires')
let i = 0


function adicionar(){
    var nr1 = Number(n1.value)
    conj[i] = nr1;
    i++
    let item = document.createElement('option');
    item.text = `O numero ${nr1} foi adicionado`
    iconj.add(item);
    n1.value = ''
    n1.focus();
};
function calcular(){

    let soma=0
    for(i=0;i<conj.length;i++){
    soma += conj[i]
    }

    conj.sort()
    let textos = [
        `O conjunto tem os seguintes numeros ${conj} em ordem crescente`,
        `O conjunto tem ${i} numeros `,
        `O maior numero é ${conj[i-1]}`,
        `O menor numero é ${conj[0]}`,
        `A soma dos valores é ${soma}`,
        `A media dos valores é ${soma/i}`
    ]
    
    for(t=0;t<textos.length;t++){
        let par = document.createElement('p')
        par.innerText = textos[t];
        res.appendChild(par)
    }
};

