const fs = require('fs')
// const [a, b] = fs.readFileSync('/dev/stdin').toString().split('\n')
const [a, b] = fs.readFileSync('case').toString().split('\n')

b.split(('')).reverse().forEach((el) => {
  console.log(el * a)
})

console.log(a * b)
