const numeros = [];
const num = document.getElementById('txtnum');
const sel = document.getElementById('selnum');
const res = document.querySelector('div#res');

function adicionar(){
    if (!isNumero(Number(num.value)) || numeros.indexOf(Number(num.value)) != -1 ){
        alert('Digite um número válido (sem repetições)!');
    } else{
        const n = Number(num.value);
        let item = document.createElement('option');
        item.setAttribute('value',n);
        item.text = `Valor ${n} adicionado.`;
        sel.appendChild(item);
        //
        numeros.push(n);
        res.innerHTML = '';
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if (qtdNum()==0){
        alert("Adicione números antes de finalizar");
    } else{
        res.innerHTML = `<p>Ao todo, temos ${qtdNum()} números</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maiorNum()}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menorNum()}</p>`;
        res.innerHTML += `<p>Somando todos os números, temos ${soma()}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media()}</p>`;
    }
}

function isNumero(n){
    return (n>=1 && n<=100)
}

function qtdNum(){
    return numeros.length
}

function maiorNum(){
    let maior = numeros[0];
    numeros.forEach( n => {
        if (n>maior){
            maior = n;
        }
    });

    return maior;
}

function menorNum(){
    let menor = numeros[0];
    numeros.forEach( n => {
        if (n<menor){
            menor = n;
        }
    });

    return menor;
}

function soma(){
    let total = 0;
    numeros.forEach( n => {
        total += n;
    });

    return total
}

function media(){
    const sum = soma();
    const qtd = qtdNum();
    return sum/qtd
}