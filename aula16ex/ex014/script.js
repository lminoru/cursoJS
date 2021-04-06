const numeros = [];
function adicionar(){
    //adc numero no select
    const num = document.getElementById('txtnum').value;
    const sel = document.getElementById('selnum');
    document.getElementById('txtnum').value = '';

    if (num.length == 0 || numeros.indexOf(Number(num)) != -1 ){
        alert('Digite um número válido (sem repetições)!');
    } else{
        const n = Number(num);
        let numoflist = document.createElement('option');
        numoflist.setAttribute('value',n);
        numoflist.innerText = `Valor ${n} adicionado.`;
        sel.appendChild(numoflist);
        //
        numeros.push(n);
        document.querySelector('div#res').innerHTML = '';
    }
}

function finalizar(){
    if (qtdNum()==0){
        alert("Adicione números antes de finalizar");
    } else{
        const sel = document.getElementById('selnum');
        const res = document.querySelector('div#res');


        res.innerHTML = `<p>Ao todo, temos ${qtdNum()} números</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maiorNum()}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menorNum()}</p>`;
        res.innerHTML += `<p>Somando todos os números, temos ${soma()}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media()}</p>`;
    }
}

function qtdNum(){
    return numeros.length
}

function maiorNum(){
    let maior = numeros[0];
    numeros.forEach( num => {
        if (num>maior){
            maior = num;
        }
    });

    return maior;
}

function menorNum(){
    let menor = numeros[0];
    numeros.forEach( num => {
        if (num<menor){
            menor = num;
        }
    });

    return menor;
}

function soma(){
    let total = 0;
    numeros.forEach( num => {
        total += num;
    });

    return total
}

function media(){
    const sum = soma();
    const qtd = qtdNum();
    return sum/qtd
}
