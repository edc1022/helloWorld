// array_dimen.js

const members = [ // 배열안에 배열이 들어있음.
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23],

]
members.push(['도소람', 5]); 
members[0][1] = 22; // 인덱스 기준으로 값을 입력.

const objMembers =[
    // {name:'홍길동', age:20},
    // {name:'김익수', age:25},
    // {name:'손봉호', age:23},


];
members.forEach(member => { // members 배열을 objMembers 오브젝트로.
    console.log(`이름: ${member[0]}, 나이: ${member[1]}`);
    let obj = {name: member[0], age: member[1]}
    objMembers.push(obj);
})
console.log(objMembers);

const aryMembers = [];

objMembers.forEach(member => { // 오브젝트를 배열로.

    let ary = [member.name, member.age];
    aryMembers.push(ary);

})
console.log(aryMembers);


// console.table(members); // 테이블로 출력.