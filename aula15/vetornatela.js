let valores = [9,5,8,3]  

for (let pos=0; pos<valores.length; pos++){
    console.log(valores[pos]);
}

for (let pos in valores){
    console.log(valores[pos]);
}

valores.forEach(pos => console.log(pos));

valores.indexOf(9); //pos 0
valores.indexOf(0); //pos -1 (n existe) 