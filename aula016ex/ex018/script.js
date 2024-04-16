var list_num = []
var num = document.getElementById('number')
var seladicionado = document.getElementById('selresultado')
var sum = 0;
var resultado = document.getElementById('resultado')
function adicionar(){
    if (Number(num.value.length)==0 || list_num.includes(Number(num.value)) || Number(num.value)<1 || Number(num.value)>100){
        window.alert('Valor inválido ou já adicionado a sequência! Corrija o valor!')
    } else{
        seladicionado.innerHTML=''
        list_num.push(Number(num.value))
        for (i in list_num){
            let opition_js = document.createElement('option')
            opition_js.text=`Valor ${Number(list_num[i])} já adicionado`
            seladicionado.appendChild(opition_js)
        }
    }
}

function analisar(){
    var media = 0;
    if(Number(list_num.length)==0){
        seladicionado.innerHTML=''
        var vazio = document.createElement('option')
        vazio.text='Lista Vazia! Valores ainda não adicionados!'
        seladicionado.appendChild(vazio)
        resultado.innerText='Insira novos valores'
    } else{
        for(var i =0;i<list_num.length;i++){
            sum+=list_num[i];
        }
        resultado.innerHTML=''
        var comprimento_text = document.createElement('p')
        comprimento_text.innerText=`Ao todo, temos ${list_num.length} cadastrados`
        resultado.appendChild(comprimento_text)
        var maior_text = document.createElement('p')
        maior_text.innerText=`O maior valor da lista é ${Math.max.apply(null, list_num)}`
        resultado.appendChild(maior_text)
        var menor_text = document.createElement('p')
        menor_text.innerText=`O menor valor da lista é ${Math.min.apply(null, list_num)}`
        resultado.appendChild(menor_text)
        var soma_text = document.createElement('p')
        soma_text.innerText=`A soma dos valores da lista é ${sum}`
        resultado.appendChild(soma_text)
        for(var i =0;i<list_num.length;i++){
            media+=list_num[i]
        }
        var media_text = document.createElement('p')
        media_text.innerText=`A média dos valores digitados é: ${media/i}`
        resultado.appendChild(media_text)
    }
}
function redefinir(){
    list_num=[]
    seladicionado.innerHTML=''
    let digite = document.createElement('option')
    digite.text='Digite os números'
    seladicionado.appendChild(digite)
    resultado.innerHTML=''
}