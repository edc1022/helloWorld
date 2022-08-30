// string_slice.js

let str = 'Good, Morning!';
console.log(str.length);
console.log(str.slice(2,7)); // index 기준으로 : 2(include) ~ index:7(exclude)  od, M
console.log(str.slice(2)); // index:2 ~ 끝까지.  od, Morning!
console.log(str.slice(2, -2)); // index:2 ~ index:12(14-2)   od, Mornin
console.log(str.slice(-2)); // index: (14-2)  g!

console.log(str.substring(0,7));
// substr(3, 5); index:3 부터 5개문자를 가져오겠다.

// 문자열을 찾아서 해당 인덱스를 반환.
console.log(str.indexOf('Mor'));  // 6
console.log('Good Moring, Good Afternoon, Good Evening'.lastIndexOf('Goods'));

str = 'Good Morning, Good Afternoon, Good Evening'
let position = str.indexOf('Good', str.indexOf('Good') +1); // => 0
console.log(position); // 두번째 Good 문자 있는 위치 인덱스.

// 문자열에서 반복되는 구문의 횟수.
let cnt = 0;
let pos = str.indexOf('Good');

while(pos != -1) {
    cnt++;
    pos = str.indexOf('Good', pos + 1);
}
console.log(cnt + ' 회');

const members =[
   {name:"황병걸", age:25},
   {name:"김효인", age:22},
   {name:"이상욱", age:18},
   {name:"최근석", age:29},

]
let searchKey = prompt('찾을 이름을 입력:'); 
// members 배열에서 searchKey 을 찾아서 나이 콘솔에 출력.
members.forEach(member => { // 배열에 들어있는 갯수만큼 돌겠다.
    
    if(member.name.indexOf(searchKey) != -1) { // -1의 의미:값이 없다.
        // if(member.name.includes(searchKey)) {
        // includes()=> true/false 체크.
        console.log(member.name + '은 '+ member.age + '살입니다.');

    }
});


