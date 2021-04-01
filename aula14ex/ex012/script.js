function contar (){
    var ini = Number(document.getElementById('fini').value);
    var fim = Number(document.getElementById('ffim').value);
    var pula = Number(document.getElementById('fpas').value);
    var res = document.getElementById('res');

    if (ini == 0 || fim == 0 || pula == 0){
        alert('Preencha todos os campos!');
        return;
    }


    res.innerHTML = `<p>Contando:</p><p>`;
    if (ini<fim){
        for (ini; ini<=fim ; ini += pula){
            res.innerHTML += `${ini} \u{1F449} `;
        }
    } else{
        for (ini; ini>=fim ; ini -= pula){
            res.innerHTML += `${ini} \u{1F449} `;
        }
    }
    
    res.innerHTML += `\u{1F3C1}</p>`;

    
}