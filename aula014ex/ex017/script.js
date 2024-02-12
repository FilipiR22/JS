function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selttab')
    if(Number(num.value.length)!=0){
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while(c<=10){
            let item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            item.value=`tab${c}`
        }
    } else{
        window.alert('Por favor, digite um número!')
    }
}