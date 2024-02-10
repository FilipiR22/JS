function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    if(hora>=0 && hora<=23){
        if(hora>=0 && hora <12){
            foto.src='foto-manha.jpg'
            document.body.style.background='rgb(216 172 114)'
        } else if(hora>=12 && hora<18){
            foto.src='foto-tarde.jpg'
            document.body.style.background='rgb(243 112 43)'
        } else{
            foto.src='foto-noite.jpg'
            document.body.style.background='rgb(10 20 31)'
        }
    }else{
        msg.innerHTML='Hora <strong>INVÁLIDA</strong>'
    }
}