// object_tab.js
function Table(param) {
    this.members = param;
    this.addMember = function (member) {
        // members에 추가하기.
        this.members.push(member); // push:배열요소 추가
    }
    this.showList = function () {
        // table 태그를 만들어주는 부분.
        let str = '<table border=1>';
        this.members.forEach(member => {
            str += '<tr>';
            for (let prop in member) { //반복
                str += `<td>${member[prop]}</td>`;
            }
            str += '</tr>';
        })
        str += '</table>';
        return str;

    }
}



let members = [ // 데이터 초기값. 배열로
    {id: 'user1',name: '홍길동',age: 20},
    {id: 'user2',name: '박철희',age: 22},
    {id: 'user3',name: '김민규',age: 25},

]


let t1 = new Table(members);

t1.addMember({id: 'user5',name: '최규식',age: 27});
let str = t1.showList();
console.log(str);

document.write(str);