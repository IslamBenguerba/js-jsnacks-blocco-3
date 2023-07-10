const input = 5
let i = 0
const array = []
while( i< input){
    const arra = []
    for (i=0; i < 10;i++){
        let numero = Math.floor(Math.random()*10)
        arra.push(numero)
    }
    array.push(arra)
    console.log(arra)
    i++
}
console.log(array )