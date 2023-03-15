# 백준 풀이

## 규칙
1. 문제 번호로 폴더 만들기
1. 문제 번호 폴더에 index.js에 풀기
1. 문제 번호 폴더에 case 파일에 입력값 붙여넣기

## default
> 아래 코드 넣고 시작
```js
/**
 * No: <문제 번호>
 * Title: <문제 제목>
 * Memory: <채점 결과 메모리>
 * Time: <채점 결과 시간>
 */
```

```js
/* 입력이 한줄일때 */
const fs = require('fs')
// const stdin = fs.readFileSync('/dev/stdin').toString().split(' ')
const stdin = fs.readFileSync('case').toString().split(' ')
```

```js
/* 입력이 여러줄일때 */
const fs = require('fs')
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n')
const stdin = fs.readFileSync('case').toString().split('\n')
```

## 실행
```bash
$ cd <문제 번호>
$ node --stack-size=65536 .
```

## 커밋
```
#<문제 번호>: <문제 제목>
```
