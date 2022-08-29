// variable_ref.js

// 원시형 vs. 참조형
let str1 = 'Hello'; // string
let str2 = new String('Hello'); // object


console.log(str1 == str2); // 값을 비교.
console.log(str1 == str2); // 값과 타입 비교.

let num1 = 20; // number
let num2 = new Number(20); // object
console.log(num1 == num2);

let obj ; // undefined.
obj = null; // null. 널 값도 하나의 타입이다.

let sym1 = Symbol('symbol'); // unique 키 값을 생성.
let sym2 = Symbol('symbol'); // 
console.log(sym1 == sym2);

// 객체(object) : 속성과 속성값을 가지는것. {}로 표시
obj = {
    sname: 'Hong', // 속성: 속성값
    age: 20,
    showAge: function() {
        console.log('나이는 ' + this.age + ' 입니다.');
    } // 메소드

}
console.log(obj.sname);
console.log(obj['age']); // 잘 기억하자.
obj.showAge();

obj.sname = 'Hwang'; // 값 할당.

// 배열
const numbers = []; // new Array();
numbers[numbers.length] = 10; //추가.
numbers[numbers.length] = 20; //추가.
numbers[numbers.length] = 30; //추가.

numbers.forEach(function (val) {
    console.log(val);

}); // 메소드(콜백함수(값, 인덱스, 배열)) : 대체로 매개값이 정해져있음

const randomVals = [];
for (let i=0; i<5; i++) {
    let val = Math.ceil(Math.random()*10); // 0~1 임의값을 생성. ceil:올림
    randomVals[i] = val;
 }

 console.clear(); // 콘솔메시지 초기화.
 randomVals.forEach(function (val) { // forEach : 기능을 매개값으로 넣겠습니다. - 기억하자
    if(val > 5) {
        console.log(val);
    }
 });

 // [3, 1, 6, 9,4]
 randomVals.splice(0, randomVals.length); // 범위의 값을 ,''로 바꾸겠습니다. 바꿀값'' 안쓰면 지우게됨.
 // Math.random() : 0 ~ 1 임의값 생성.
 // 21 ~ 50 까지의 임의 값을 생성. : Math.ceil(Math.random()*30)+20
//  console.log(randomVals);
// console.log(Math.ceil(.8)); // 0 ~ 1
for(let i=0; i<5; i++) {
    randomVals[i] = Math.ceil(Math.random() * 30) + 20;
}
console.clear();
// console.log(randomVals);
randomVals.forEach(showEven); // 짝수만 출력.

// 콜백함수(callback function).
function showEven(val) {
    if(val%2 == 0) {
        console.log(val);
    }

}

console.log(-'3' + 4); //  + :'34'  * :'12' : 숫자형 변환.

console.log((3).toString());

console.log(Math.abs(-20));
console.log(Math.sign(-30));

console.clear();
const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function(val) {
    return Math.sign(val);
}); // 배열의 갯수만큼 콜백함수 실행하겠다. => forEach와 차이점은 새로운 배열을 반환.
console.log(arr3);

// NaN, Infinity
console.log(3/ 'five'); // NaN : 연산으로 처리할수 없음
console.log(1/0); // Infinity : 무한대의 값을 가지고 있음