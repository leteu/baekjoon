const fs = require('fs')
// const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v)
const [a, b] = fs.readFileSync('case').toString().split(' ').map(v => +v)

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(Math.floor(a / b))
console.log(a % b)
