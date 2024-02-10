function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) >ano){
        window.alert("Verifique se seus dados estão corretos!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.width='250px'
        img.style.height='250px'
        img.style.borderRadius='50%'
        img.style.marginTop= '15px'
        if (fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src','crianca-homem.jpg')
            } else if(idade<24){
                //jovem
                img.setAttribute('src','jovem-homem.jpg')
            } else if (idade<65){
                //adulto
                img.setAttribute('src','adulto-homem.jpg')
            } else{
                //idoso
                img.setAttribute('src','velho-homem.jpg')
            }
        } else{
            genero='Mulher'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src','crianca-mulher.jpg')
            } else if(idade<24){
                //jovem
                img.setAttribute('src','jovem-mulher.jpg')
            } else if (idade<65){
                //adulto
                img.setAttribute('src', 'adulta-mulher.jpg')
            } else{
                //idoso
                img.setAttribute('src','velha-mulher.jpg')
            }
        }
        res.innerText=`Detectamos ${genero} com ${idade} anos`
        res.style.textAlign='center'
        res.appendChild(img)
    }
}