var teste = [1,6,7,8,11,4,3,2]
/*for( var i = 0 ; i < teste.length ; i++ ){
    console.log(`Na posição ${i} temos: ${teste[i]}`)
}*/
teste.sort(function(a, b) {
    return a - b;
});

for (i in teste){
    console.log(`Na posição ${i} temos: ${teste[i]}`)
}
console.log(teste.length)