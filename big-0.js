// Comparação de algortimos para big-O

function adicionarAte(n){
    let total =0
    for(let i=0; i<=n; i++){
        total= total+i
    }
    return  console.log(total)
}

function adicionarAte1(n){

    return  console.log( n * (n+1) /2)
}

var t1 = performance.now()
adicionarAte(100000000)
var