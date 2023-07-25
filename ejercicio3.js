let array = [5, 10, 12 -1, 3, 24]
let nmayor = array[0]

for (let i = 0; i <= array.length; i++) {
    
        if(array[i] > nmayor){
            nmayor = array[i]
        }
}

console.log(`El número mayor es ${nmayor}`)