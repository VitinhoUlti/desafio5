let num = document.getElementById("inum")
let sele = document.getElementById("isele")
let final = document.getElementById("final")


function ini(){
    let numv = Number(num.value)
    if(num.value.length==0){
        window.alert('[Erro] numero invalido')
    }
    else{
        sele.innerHTML += `<option> Valor ${numv} adicionado </option>`
    }
}