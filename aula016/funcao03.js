function fatorial(x){
    var res = 1
    for(var cont=1;cont<=x;cont++){
        res*=cont
    }
    return res
}

console.log(fatorial(5))