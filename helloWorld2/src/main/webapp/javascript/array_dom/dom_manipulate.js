// dom_manipulate.js
// element생성: createElement()
// textNode생성: createTextNode()
// 부모-자식 형성: appendChild()

let frm = document.createElement('form');
frm.setAttribute('action','addMember.jsp');
frm.setAttribute('method', 'post');

// 첫번째 자식요소 (label) - 사용자아이디
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자아이디';
frm.appendChild(labelId); 

// 자식요소(input)
let inputId = document.createElement('input');
inputId.setAttribute('type','text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id')
frm.appendChild(inputId);

// 자식요소(label) - 사용자비번
let labelPW = document.createElement('label');
labelPW.setAttribute('for', 'user_pass');
labelPW.innerText = '사용자비번';
frm.appendChild(labelPW); 

// 자식요소(input)
let inputId2 = document.createElement('input');
inputId2.setAttribute('type','text');
inputId2.setAttribute('name', 'user_pass');
inputId2.setAttribute('id', 'user_pass')
frm.appendChild(inputId2);

// 버튼
let button = document.createElement('button');
button.innerText='로그인'
frm.appendChild(button);




// div#show 의 자식요소로 지정.
document.getElementById('show').appendChild(frm);
console.log(frm);