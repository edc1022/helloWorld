// dom_manipulate2.js
const members = [
    {mid: 'admin', mname: '관리자', mphone: '010-1111-2222'},
    {mid: 'hong12', mname: '홍길동', mphone: '010-2345-8765'},
    {mid: 'parkgr', mname: '박규림', mphone: '010-9873-2312'}


]


document.addEventListener('DOMContentLoaded', function () {
    showMember();
 
    // 등록버튼 이벤트.
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addMember);
    // 회원찾기 이벤트.
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember);
    // 전체선택/해제 이벤트.
    let allCheck = document.getElementById('allCheck');
    allCheck.addEventListener('change', allChecked);
    
}); // dom요소에 이벤트 등록.
function allChecked() {
    // true/ false 값은 this의 checked 값을 할당.
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    chks.forEach(check => {
        check.checked = this.checked; // prop
    })
}

function findMember() {
    // 찾을 아이디.
    let id =  document.getElementById('mid').value; // getElementById('mid'):input 태그  .value:admin
    console.log(id);
    
    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr'); // tbody>tr : 모두 출력     :nth-chile(1) 순서도 가능
    console.log(trs); // NodeList [tr, tr, tr]
    trs.forEach(tr => {
        // tr.className = ''; // 클래스 속성값을 변경. 클래스 속성이 남아있음
        tr.removeAttribute('class'); // 위의 기능과 같음.
    })
    trs.forEach(tr => {
        console.log(tr.firstElementChild.textContent);
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
            // 값 변경.
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value;
            childTd[2].textContent = document.getElementById('mphone').value;
        }

    });
}

function showMember() {
    // 리스트 보여주기.
    let table = document.getElementById('list');     // getElementById
    members.forEach(member => {
        let mValues = [];
        // // object -> array.
        // for (let prop in member) {
        //     mValues.push(member[prop]);
        // }
        // let tr = makeTr(mValues);
        mValues = Object.values(member); // Object.keys(member) : [속성,속성]
        let tr = makeTr(mValues);
        // let tr = document.createElement('tr'); // <tr></tr> 여기부터
        // for(let prop in member) {
        //     let td = document.createElement('td'); // <td></td>
        //     let txt = document.createTextNode(member[prop]); // admin 관리자 연락처
        //     td.appendChild(txt);
        //     tr.appendChild(td);
        // }
        // // 삭제버튼 추가.
        // let td = document.createElement('td');
        // let btn = document.createElement('button'); // <button>삭제</button>
        // let txt = document.createTextNode('삭제') ;
        
        // btn.appendChild(txt);
        // tr.appendChild(btn);
        // tr.appendChild(td); // 여기까지 tr 만들어주는 코드
        table.appendChild(tr); // append appendChild 둘다 사용 가능.


    });
    
}

function addMember() {    
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);



    // 저장값이 없으면 warning.
    if(!mid.value || !mname.value || !mphone.value) {
        alert ('필수값을 입력하세요!!!');
        return; // 함수종료.
    }

    const mValues = [mid.value, mname.value, mphone.value]
    let tr = makeTr(mValues);
    

    // let tr = document.createElement('tr');

    // mValues.forEach(val => {
    //     let td = document.createElement('td'); // id위치 <td>user1</td>
    //     let txt = document.createTextNode(val);
    //     td.appendChild(txt); // <td>user1</td>
    //     tr.appendChild(td); // <tr><td>user1</td></tr>
    // });
    // // 회원삭제버튼 추가. 
    // let td = document.createElement('td');
    //     let btn = document.createElement('button'); // <button>삭제</button>
    //     let txt = document.createTextNode('삭제') ;
        
    //     btn.appendChild(txt);
    //     tr.appendChild(btn);
    //     tr.appendChild(td);
    document.getElementById('list').appendChild(tr);

    // 초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
} // end of addMember().

function makeTr(mValues=[]) { //버튼 만드는 부분

    let tr = document.createElement('tr');
    tr.addEventListener('click', function() {
        console.log(this.firstElementChild.innerText); //<td><button>user1</button></td>
        // 선택된 tr의 정보를 입력화면에 보여지도록.
        document.getElementById('mid').value = this.firstElementChild.innerText; // id
        document.getElementById('mname').value = this.firstElementChild.innerText; // name
        document.getElementById('mphone').value = this.firstElementChild.innerText; // mphone
        
    }, true); // 상위부터 이벤트 찾아서 전파?

    // 체크박스 추가.
    // <tr><td><input type='checkbox'></td></tr>
    let chk = document.createElement('input');
    chk.addEventListener('click', function(e) {
        // tr의 이벤트가 발생하지 않도록 하기 위해서.
        e.stopPropagation();
    })
    chk.addEventListener('change', function(){
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
    
        //[input, input, input] 배열(forEach) : every(), some()
        document.getElementById('allCheck').checked = 
                                     [...checkProp].every(item => {return item.checked == true});

    })
    // chk.checked = true; // 체크.    
    chk.setAttribute('type','checkbox');
    td = document.createElement('td');
    td.appendChild(chk);
    td.appendChild(td);

    mValues.forEach(val => {
        let td = document.createElement('td'); // id위치 <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });
    // 회원삭제버튼 추가. 
    let td = document.createElement('td');
        let btn = document.createElement('button'); // <button>삭제</button>
        let txt = document.createTextNode('삭제') ;
        btn.addEventListener('click', function(e) { // 이벤트 달아보자.
            this.parentElement.parentElement.remove();  // tr 삭제.
            e.stopPropagation(); // 하나 실행하고 이벤트 전파 차단. 상위에 존재하는 이벤트 실행 안되게함.
        }, false); // 기본값 false.
       
        btn.appendChild(txt);
        td.appendChild(btn);
        tr.appendChild(td);

    return tr;

}