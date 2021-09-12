v =[5,1,4,2,0,8,3,6]
aux = 0
for (let i=7; i >= 4; i --){
    aux = v [i]
    v[i] = v [7 - i]
    v[7 - i] = aux

console.log('aux = ' + aux)
console.log('v = ' + v)
}





