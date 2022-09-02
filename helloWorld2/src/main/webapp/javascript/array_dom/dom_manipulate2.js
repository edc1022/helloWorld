//dom_mainpulate2.js  

const members = [
    {mid : 'admin', mname : '관리자', mphone : '010-1111-1122'},
    {mid : 'hong12', mname : '홍길동', mphone : '010-6633-9872'},
    {mid : 'parkgr', mname : '박규림', mphone : '010-3355-1462'}
]


document.addEventListener('DOMContentLoaded', function(){
//dom 요소에 이벤트 등록하는 메서드 : DOM컨텐츠가 다 다운받아진 후에 함수 실행

showMember();
//회원등록 버튼 이벤트
// addBtn.onclick = 'click' > 속성 넣기, <buttond>에 적용될 메서드 만들어짐
let addBtn = document.querySelector('button');
addBtn.addEventListener('click', addMember);


findMember();
//회원찾기 버튼 이벤트
let findBtn = document.getElementById('findMember'); 
findBtn.addEventListener('click', findMember)

allchecked();
//전체선택/해제 이벤트
let allcheck = document.getElementById('allChecked');
allcheck.addEventListener('change', allchecked)


});  // dom 요소에 이벤트 등록. 


function allchecked(){
    // true/ false 값은 this의 checked 값을 할당
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    chks.forEach(check => {
      check.checked = this.checked; //prop, this = allcheck
    })
}

function findMember(){
    // 찾을 아이디. 
    let id = document.getElementById('mid').value;
    console.log(id);
    
    let trs = document.getElementsByTagName('tbody')[0].children; // TagName은 인덱스값 같이 써줘야함
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs); // NodeList [tr, tr, tr]
    
    trs.forEach(tr=>{
        //tr.className = '';
        tr.removeAttribute('class'); // 클래스 속성을 지워줌 
    })


    trs.forEach(tr => {
        console.log(tr.firstElementChild.textContent); //textContent 또는 innerText 써주기
        if(tr.firstElementChild.textContent == id){
            tr.setAttribute('class', 'focus'); 
            // 값변경
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value;
            childTd[2].textContent = document.getElementById('mphone').value;
            
        }
    })
  
        }




function showMember(){
        //리스트 보여주기. 
        let table = document.getElementById('list');

        members.forEach(member => {
            let mValues = [];
            // //object -> array.
            // for(let prop in member){
            //     mValues.push(member[prop]);
            // }
            mValues = Object.values(member); // Object.keys(member) : [속성,속성]
            let tr = makeTr(mValues);
            table.appendChild(tr);
        });
}

function addMember(){
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);

    // 저장값이 없으면 warning.
    if(!mid.value || !mname.value|| !mphone.value){
        alert('필수값을 입력하세요!!!');;
        return; //return이 있으면 break; 역할함(강제종료)
    }

    const mValues = [mid.value, mname.value, mphone.value];
    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr);

        // 초기화.
        mid.value = '';
        mname.value = '';
        mphone.value = '';
        mid.focus();

} // end of addMember;




// 신규 데이터 추가시 삭제 버튼 같이 추가하기 
function makeTr(mValues =[]){ //[mid, mname, mphone] 들어감
    let tr = document.createElement('tr');
    tr.addEventListener('click', function(){
        // alter(this.firstElementChild.innerText) 팝업창으로 td 부분에 입력된 텍스트가 담김 알림 뜸
        console.log(this.firstElementChild.innerText);// <td><button>user1</button></td>
    
        // 선택된 tr의 정보를 입력화면에 보여지도록. 
        document.getElementById('mid').value = this.firstElementChild.nextElementSibling.innerText; //id
        document.getElementById('mname').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;
        document.getElementById('mphone').value = this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    }, false) // true : 캡처링, false : 버블링(=default)

    // 체크박스 추가 
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.addEventListener('click', function(e){
        //tr의 이벤트가 발생하지 않도록 하기 위해서 
        e.stopPropagation()
    });

    checkbox.addEventListener('change', function(){
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
        //[input, input, input => 총 3개] 배열(forEach) : every(), some()
        document.getElementById('allChecked').checked = 
                                                    [...checkProp].every(item => item.checked);

        // ... : 나머지 파라메타 (배열 처럼 만들어짐)
    })
    checkbox.checked = true // default = checked 상태
    checkbox.setAttribute('type','checkbox');        // 속성 지정
    td.appendChild(checkbox);
    tr.appendChild(td);



    mValues.forEach(val => {
        let td = document.createElement('td'); //id 위치. <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); //<td>user1</td> => td가 감싸고 있으므로 자식요소로 봄
        tr.appendChild(td); //<tr><td>user1</td></tr>
    });

    // 삭제버튼 추가.
    td = document.createElement('td');
    let btn = document.createElement('button');
    let txt = document.createTextNode('삭제');
    
    // 버튼에 삭제 기능을 추가
    btn.addEventListener('click', function(e){
        //btn의 부모인 <td></td> => td의 부모인 <tr></tr> 안의 내용을 삭제
        this.parentElement.parentElement.remove(); //tr 삭제
        e.stopPropagation(); // 이벤트 전파 차단 : 버블링, 캡쳐링 확인 
    }, false);

    btn.appendChild(txt);
    td.appendChild(btn);
    tr.appendChild(td); // <tr><td><button>삭제</button> </td></tr>

    return tr;
}



