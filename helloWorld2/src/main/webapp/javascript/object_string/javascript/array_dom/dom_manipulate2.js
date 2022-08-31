// dom_manipulate2.js
let addBtn = document.querySelector('button');
addBtn.onclick = function () {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);

    const mValues = [mid.value, mname.value, mphone.value]

    let tr = document.createElement('tr');

    // 저장값이 없으면 warning.
    if(!mid.value || !mname.value || !mphone.value) {
        alert ('필수값을 입력하세요!!!');
        return; // 함수종료.
    }

    mValues.forEach(val => {

        let td = document.createElement('td'); // id위치. <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); //<td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });
    document.getElementById('list').appendChild(tr);

    // 초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();


}