function gerarTabuada(){
    const num = document.getElementById('txtnum').value;
    const seltab = document.querySelector('div #seltab');


    seltab.innerHTML = '';
    if (num.length == 0){
        alert("Digite um número");
        seltab.innerHTML = '<option>Digite um número acima</option>';
    } else
    {
        const n = Number(num);

        for (let i=1; i<=10 ; i++){
            seltab.innerHTML += `<option>${n} x ${i} = ${n*i}</option>`;
        }
    }
    
}