// for_test.js

// 1 ~ 100 사이의 임의의 수를 생성 => 배열에 저장[5].
// 배열값중 최대값을 구하는 반복문을 작성. 큰값은 콘솔출력.
// 배열요소는 document.write() => 5개 요소를 화면에 출력.

const tempArr = [];
for (let i=0; i<5; i++) {
    let temp = Math.ceil(Math.random()*100);
    tempArr[i] = temp;
}
tempArr.forEach(val => document.write(`<p>${val}</p>`));

let max = tempArr[0];
tempArr.forEach(val => {
    if (val > max) {
        max = val;
    }
});
console.log('Max :' + max);







// const randomNum = [];
// for(let i=0; i<5; i++) {
//     randomNum[i] = Math.ceil(Math.random()*100) +1;
// }
// randomNum.forEach(max); // 최대값

// function max(val) {
//     if(val >= randomNum[i]) {
//         console.log(val);
//     }
// }

// 함수의 스코프 체인.
var a = 1;
var b = 5;

function outerFunc() {
 // var b;    호이스팅.
    function innerFunc() {
        a = b;
    }
    console.log(a); // a = 1
    a = 2;
    b = 4;
    innerFunc(); // a = b; 호출
    console.log(a); // a = 4
    var b =2; // b = 2; 호이스팅.
    console.log(b); // b = 2
}
outerFunc();
console.log(b); // b = 5