function sequen(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')
    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0 || Number(passo.value)==0 || Number(fim.value)==0 || Number(inicio.value)==0){
        window.alert('Instruções inválidas! Corrija os Erros!')
    }else{
        let res = 0
        let seq = []
        if(Number(inicio.value)<Number(fim.value)){
            for(res=Number(inicio.value);res<=Number(fim.value);res+=Number(passo.value)){
                seq.push(res)
                seq.push('👉')
            }
        }else{
            for(res=Number(inicio.value);res>=Number(fim.value);res-=Number(passo.value)){
                seq.push(res)
                seq.push('👉')
            }
        }
        seq.push('🚩')
        let str = seq.join(' ')
        resultado.innerText=str
    }
}