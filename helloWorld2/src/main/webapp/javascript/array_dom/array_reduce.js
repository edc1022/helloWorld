// array_reduce.js

const numbers = [2, 3, 8, 5, 1];
let sum = 0;
// 누적합 구하기. forEach 완성해보자.
numbers.forEach(function (num) {
    sum += num;
})
console.log(sum);

let result = numbers.reduce(function (acc, val, idx, ary) { // acc: 누적값
    // console.log(a,b,c,d)
    return acc + val;
}, 0);

result = numbers.reduce((acc, val, idx, ary) => {
    console.log(acc, val);
    acc.push(val + 2); // [4, 5, 10, 7, 3] 
    return acc; // 그 다음 순번의 초기값으로 리턴.
}, []); // []:초기값을 배열로 선언.

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc, val, idx) => {
    console.log(acc);
    if (idx == 0) {
        acc = '<ul>';
    }
    acc += '<li>' + val + '</li>';
    if (idx == numbers.length - 1)
        acc += '</ul>';

    return acc; // 다음순번의 누적초기값으로 사용.

}, ''); // '':초기값을 문자열로 선언.

document.write(result);

// 배열요소의 max 값.
let max = numbers[0];
for(let i=0; i<numbers.length;i++ ) {
    // 제일 큰값을 구하는 코드.
    if (max < numbers[i]) {

        max = numbers[i];
    } 
}
console.log('max: ',max);


result = numbers.reduce(( acc, val ) => {

    return acc > val ? acc : val ;

},Number.MIN_SAFE_INTEGER); // MIN_SAFE_INTEGER: 가져올수있는 값 중 최소값. 을 초기값으로 준다. 초기값이 0일때 음수가 있으면 0이 리턴되니까.

console.log('최종결과: ', result);
