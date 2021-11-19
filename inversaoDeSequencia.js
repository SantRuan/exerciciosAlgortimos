let nome = "Gabriel"
let nomeArray = nome.split("")
let n = nome.length
console.log(n)

for(let i =0 ; i< n/2 ; i++){
    temp = nomeArray[i]
    nomeArray[i]= nomeArray[n-i-1]
    nomeArray[n-i-1]= temp

}
nome = nomeArray.join("")
console.log(nome)