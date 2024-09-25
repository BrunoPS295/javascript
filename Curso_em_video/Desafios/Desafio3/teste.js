
        let conj = [];
        let iconj = document.getElementById('iconj');
        let res = document.getElementById('ires');
        let i = 0;

        function adicionar() {
            let n1 = parseInt(document.getElementById('in1').value);
            conj[i] = n1;
            i++;

            let item = document.createElement('option');
            item.text = `O número ${n1} foi adicionado`;
            iconj.add(item);
        }

        function calcular() {
            let soma = 0;
            for (i = 0; i < conj.length; i++) {
                soma += conj[i];
            }

            conj.sort((a, b) => a - b); // Ordena o conjunto em ordem crescente

            let media = soma / conj.length;

            let textos = [
                `O conjunto tem os seguintes números: ${conj}`,
                `O conjunto tem ${conj.length} números`,
                `O maior número é ${conj[conj.length - 1]}`, // Último elemento após a ordenação
                `O menor número é ${conj[0]}`, // Primeiro elemento após a ordenação
                `A soma dos valores é ${soma}`,
                `A média dos valores é ${media}`
            ];

            // Limpa os resultados anteriores
            res.innerHTML = '';

            // Adiciona os textos à div
            for (let t = 0; t < textos.length; t++) {
                let p = document.createElement('p');
                p.innerText = textos[t]; // Usando innerText para adicionar o texto
                res.appendChild(p);
            }
        }


