// table_func.js

function makeTr(mem = {}) {
    let tr = '<tr>';
    //`<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '<td><button>확인</botton></td>';
    tr += '</tr>';
    return tr;
}
function makeHd() {
    let titles = ['아이디','이름','점수'];
    let tr = '<tr>';
    for(let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

const members = [ // let=변수 선언할때 씀  const= 상수. 한번 선언하면 값을 바꿀수없다
    {id: 'user1',name: '홍길동',score: 80 , phone: '010-123-1234'},
    {id: 'user2',name: '김민식',score: 85 , phone: '010-454-2345'},
    {id: 'user3',name: '황의겸',score: 70 , phone: '010-645-4545'},

];

let str = '<table border=1>';
str += makeHd();  //'<tr><th>아이디</th><th>이름</th><th>점수</th></tr>';
for (let member of members) { //배열에서 읽어올때는 of 쓴다. let of
    str += makeTr(member);
    // str += '<tr>';
    // str += `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
    // str += '</tr>';

}

str += '</table>';
document.write(str);
