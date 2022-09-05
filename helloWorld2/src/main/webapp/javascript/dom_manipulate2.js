// dom_manipulate2.js // 학습용
// 자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합.

const members = [
    {mid: 'admin', mname: '관리자', mphone: '010-1111-1122'},
    {mid: 'hong12', mname: '홍길동', mphone: '010-6633-9872'},
    {mid: 'parkgr', mname: '박규림', mphone: '010-3355-1462'}
]

document.addEventListener('DOMContentLoaded',function() {
    // addEventListener:dom 요소에 이벤트 등록하는 메서드. (이벤트 타입, 이벤트 기능)
    // DOMContentLoaded 가 다 다운받아진 후에 function 함수 실행.

    showMember();
    // 회원등록 버튼 이벤트.
    // addBtn.onclick ='click' 속성넣기. <button>에 적용될 메서드 만들어짐.
    // querySelector: html의 클래스 이름 및 태그를 갖고 오기 위해서 사용.
    let addBtn = document.querySelector('button')
    addBtn.addEventListener('click', addMember);
    
    
    // 회원찾기 버튼 이벤트.
    let findBtn = document.getElementById('findMember')
    findBtn.addEventListener('click', findMember);
    
    // 전체 선택 or 해제 이벤트.
    let allcheck = document.getElementById('allcheck')
    allcheck.addEventListener('change', allchecked);

}) ; // dom 요소에 이벤트 등록.




function showMember() {
    // 리스트 보여주기.
    let table = document.getElementById('list');

    members.forEach(member => {
        let mValues = []; // object -> array []
        // Object.values: 파라메타로 전달된 객체의  value값만 뽑아서 배열로 반환.
        // for in 구문 결과와 동일.
        // for (let prop in member) {
        //     mValues.push(member[prop]);
        // }
        mValues = Object.values(member);
        let tr = makeTr(mValues);
        table.appendChild(tr);
    });
    

function addMember() { 
    // getElementById: 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 
    //이를 나타내는 Element 객체를 반환
    // mid 와 일치하는 id를 찾아서 그 id가 가진 속성을 반환해라.
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);
    
    // 저장값이 없으면 warning.
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요!!!');
        return; //  break 역할.함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환.
    }

    const mValues = [mid.value, mname.value, mphone.value];
    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr)
   
    // 초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();

} // end of addMember;

function makeTr(mValues = []) {
    // createElement: 지정한 tagName의 HTML 요소를 만들어 반환
    let tr = document.createElement('tr');
    tr.addEventListener('click', function () {
        // 선택된 tr의 정보를 입력화면에 보여지도록.
        document.getElementById('mid').value = this.firstElementChild.innerText;
        document.getElementById('mname').value = this.firstElementChild.nextElementSibling.innerText;
        document.getElementById('mphone').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;
}, false); // true : 캡처링  false : 버블링 (=default 값. 생략가능)

    
//td생성
mValues.forEach(val => {
    let td = document.createElement('td'); // <td>user1</td>
    let txt = document.createTextNode(val);
    td.appendChild(txt); //<td>user1</td> => td가 감싸고 있으므로 자식요소로 봄
    tr.appendChild(td); //<tr><td>user1</td></tr>
});

// 삭제버튼 추가만.
let td = document.createElement('td');
let btn = document.createElement('button');
let txt = document.createTextNode('삭제');

// 삭제버튼에 삭제 기능 추가.
btn.addEventListener('click', function (e) {
     //btn의 부모인 <td></td> => td의 부모인 <tr></tr> 안의 내용을 삭제.
     this.parentElement.parentElement.remove();
     e.stopPropagation(); // 이벤트 전파 차단.

}, false);

btn.appendChild(txt);
td.appendChild(btn);
tr.appendChild(td);

// <tr><td><button>삭제</button> </td></tr>

    
        
// 체크박스 추가.
//<tr><td><input id="allcheck" type="checkbox"></td></tr>
let chk = document.createElement('input');
chk.addEventListener('click', function (e) {
    // 자식 input 이벤트 발생시 같은 이벤트 설정되어있는 부모로의 이벤트 전파 방지.
    e.stopPropagation();

});

chk.addEventListener('change', function () {
    // mid, mname, mphone 는 속성(property).
    // checkProp: 
    // querySelector: 선택자를 사용하여 요소 찾기. 같은 id 또는 class 일 경우 스크립트의 최상단 요소만 포함.
    // querySelectorAll: 선택자를 선택하여 배열과 비슷한 객체인 nodeList를 반환. 반환객체가 nodeList이기에 for문 또는 forEach문을 사용.
    //[input, input, input => 총 3개] 배열(forEach) : every(), some()
    let checkProp = document.querySelectorAll('tbody input[type="checkbox"]');
    // let checkAry =[];
    // checkProp.forEach(item=>{
    //     checkAry.push*(item);
    // })
    // [input, input, input]배열 (forEach) : every(), some()
     // 요소를 한번에 가져올수있음.
    // every나 some:  배열내 값이 존재하는지 확인할때나 조건에 맞는(혹은 맞지 않는) 값이 있는지 배열 내부 순회하면서 검사.
    document.getElementById('allcheck').checked = [...checkProp].every(item => item.checked);
        // ... : 나머지 파라메타 (배열 처럼 만들어짐)

})

// chk.checked = true; //체크.
chk.setAttribute('type', 'checkbox');  
td = document.createElement('td');
td.appendChild(chk);
tr.appendChild(td);




return tr;

}
        
                     
function findMember() {
    // 찾을 아이디.
    let id = document.getElementById('mid').value;
    console.log(id);

    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs); // NodeList[tr,tr,tr]

    trs.forEach(tr => {
         //tr.className = ''; // 클래스 속성값을 변경.
         tr.removeAttribute('class'); // 클래스 속성을 지워줌 .
     })

     trs.forEach(tr => {
        console.log(tr.firstElementChild.textContent); //textContent 또는 innerText 써주기.
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
            //값 변경
            let childTd = tr.children
            childTd[1].textContent = document.getElementById('mname').value;
        childTd[2].textContent = document.getElementById('mphone').value;

    
        }
    });
    }

function allchecked() {
     // true/ false 값은 this의 checked 값을 할당
     let chks = document.querySelectorAll('tbody input[type="checkbox"]');
     chks.forEach(check => {
        check.checked = this.checked; //prop, this = allcheck
  })
}