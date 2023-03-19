/**
 * No: 10816
 * Title: 숫자 카드 2
 * Memory: 128588 KB
 * Time: 688 ms
 */

const fs = require('fs')
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n')
const stdin = fs.readFileSync('case').toString().split('\n')

const n = stdin[1]
  .split(' ')
  .map((e) => +e)
  .reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map())

const m = stdin[3].split(' ').map((e) => n.get(+e) || 0)

console.log(m.join(' ')) // 3 0 0 1 2 0 0 2
