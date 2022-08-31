// array_basic.js
// 배열에 요소추가/ 삭제
// push() : 마지막에 추가. pop() : 마지막 제거
// unshift() : 첫번째 추가. shift() : 첫번째 제거
// slice(firstindex, lastindex)
// splice(위치, 대체할 갯수, 대체할 값...) : 추가, 수정, 삭제 가능.

const names = [];

names[0] = '정다슬'
names[names.length] = '백진희';
names[names.length] = '황용주';
names[names.length] = '손정빈';

names.push('김아현');

names.pop();
names.pop();
names.shift();

names.unshift('손정빈');

const newNames = names.slice(0,2); // 특정 위치의 값을 가져오겠다. 원본은 그대로 유지.
// newNames.splice(2, 0, '홍길동');
// newNames.splice(1,1,'홍길동');
newNames.splice(0,2,'홍길동');



console.log(newNames); // '손정빈', '백진희'

// 추가. 수정. 삭제
names.splice(2 , 0, '홍길동'); 
const otherName =  names.concat(newNames); // 배열 합체.
console.log(otherName);

names.length = 0; //크기를 지정.

names.forEach(name => {
    console.log(name);
});