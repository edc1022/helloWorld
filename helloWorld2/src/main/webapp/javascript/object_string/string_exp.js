// string_exp.js

let now = new Date(); // 
console.log(now.toDateString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);

console.log(`${now.getSeconds()<10 ? '0'+ now.getSeconds() :now.getSeconds()}`);
console.log(`0${now.getSeconds()}`.slice(-2));

console.log('abc'.toUpperCase()); //대문자로 변환.
console.log('ABC'.toLowerCase()); //소문자로 변환.

Date.prototype.hhmiss = function() {
    // 09:08:07, 12:34:07
}
console.log(now.hhmiss());

