let num = document.getElementById("inum")
let sele = document.getElementById("isele")
let final = document.getElementById("final")
let ar = []
let soma = 0
let numv = Number(num.value)
 function ini(){
    
    let numv = Number(num.value)
    
    if(num.value.length==0 || numv>=101 || numv<=0){
        window.alert('[Erro] numero invalido')
    }
    else if(ar==numv){
        window.alert("[ERRO] numero já colocado!")
    }
    else if(ar!=numv){
        sele.innerHTML += `<option> Valor ${numv} adicionado </option>`
        ar.push(numv)
        ar.sort()
        final.innerHTML = `${ar}`
    }
    num.value=``
    num.focus()
 }
 function fin(){
    let soma = 0
    if(ar.length==0){
        window.alert('[Erro] numero invalido')
    }
    else{
    final.innerHTML += `<p>Ao todo, temos ${ar.length} numeros</p>`
        final.innerHTML += `<p>O menor numero é ${ar[0]}</p>`
        final.innerHTML += `<p>O maior numero é ${Math.max.apply(null,ar)}</p>`
    
        for(let i = 0; i<ar.length; i++) {
        soma += ar[i];
        }
        final.innerHTML += `<p>a soma dos numeros é ${soma}</p>`
    }
 }
