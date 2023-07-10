const btn = document.getElementById('btn')
const inputNum = document.getElementById('input')
const boxRed = document.getElementById('red')
const boxGreen = document.getElementById('green')
const array =[1,2,3,4,5,6,7]
let arrayDispari = []
let arrayPari = []


for ( i = 0; i< array.length; i++){
    if(array[i] % 2 == 1){
        arrayDispari.push(array[i])
    } else if( array[i] % 2 == 0){
        arrayPari.push(array[i])
    }
}
console.log(arrayDispari)
console.log(arrayPari)
boxRed.innerHTML += arrayDispari
boxGreen.innerHTML += arrayPari