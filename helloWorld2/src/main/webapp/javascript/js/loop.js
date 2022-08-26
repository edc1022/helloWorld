// loop.js

let numbers = [23, 33, 14 , 52, 77, 55, 16];
// 1)
// 짝수합/홀수번째 위치 => result.
let result = 0;
for(let i=0; i<numbers.length; i++) {
if(val % 2 == 0) {
    result += val;
 } 
}
console.log('짝수합: ' + result);


// 2)
result = 0;
numbers.forEach((val) => {
    if(val % 2 == 0) {
    result += val;
}
});
console.log('짝수합:' + result);


for(let i=0; i<numbers.length; i++) {
if(i % 2 == 0) {
    result += i;
 } 
}
console.log('홀수합: ' + result);


// 2)
result = 0;
numbers.forEach((val) => {
    if(val % 2 == 0) {
    result += i;
}
});
console.log('홀수합:' + result);