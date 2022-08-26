// conditions.js
const members = [ // let=변수 선언할때 씀  const= 상수. 한번 선언하면 값을 바꿀수없다
    {id: 'user1',name: '홍길동',score: 80 , phone: '010-123-1234',gender: 'M'},
    {id: 'user2',name: '김민식',score: 85 , phone: '010-454-2345',gender: 'W'},
    {id: 'user4',name: '황의겸',score: 70 , phone: '010-645-4545',gender: 'W'},
    {id: 'user3',name: '최우신',score: 55 , phone: '010-123-1234',gender: 'M'},

];


//테이블형식(표) => 
//성별: 남자 => 파란색 글씨, 여자 => 빨간색 글씨


//makeTr(파란색,빨간색)/ makeBlueTr(), makeRedTr()
//1번 방식
function makeTr(mem, color) {
    let tr = `<tr style='color: ${color}'>`;
    for(let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}
//2번 방식 - 함수 2개 만들기
function makeBlueTr(mem) {
    let tr = `<tr style='color: blue'>`;
    for(let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

function makeRedTr {
let tr = `<tr style='color: red'>`;
    for(let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}


 let str = '<table border=1>';
 str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>'
 for (let member of members) {
    if(member.gender == 'M') { //남자일 경우 makeBlueTr을 호출.
        str += makeBlueTr(member, 'blue');
    }else if (member.gender == 'W') { //여자일 경우 makeRedTr을 호출.
    str += makeRedTr(member,'red');
  }
 }
str += '</table>'
document.write(str);





/////////////////////////////////////////////////////////////////////////////////////
// const passMember = [];

// for(let i=0; i<members.length;i++) {
//     if(members[i].score > 60) {
//         console.log('이름: ' + members[i].name);
//         passMember[passMember.length] = members[i].name;
//     }
// }
// console.log(passMember);

// const women = []
// for(let member of members) {
//     if(member.gender == 'W') {
//         women[women.length] = member;
//     }

// }
// console.log(women);




// let welcomeFnc = function (param) {

//     console.log('Welcome' + param);
// }

// // 화살표 함수.
// let helloFnc = param => console.log('Hello' + param);


// //함수를 매개값으로 받는 함수.
// function callFunc(fnc) {
//     let name = 'Hong';
//     fnc(name);

// }
// callFunc(helloFnc);

