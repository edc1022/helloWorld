// foreach.js

const members = [{ // 상수 변수 const, 새 값 할당 불가능 => 값을 바꿀 수 없다.
    id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234', gender: 'M'}, 
    { id: 'user2', name: '김민식', score: 85, phone: '010-1234-1111', gender: 'W'}, 
    { id: 'user3', name: '최우신', score: 55, phone: '010-1234-2222', gender: 'M'}, 
    { id: 'user4', name: '황의겸', score: 70, phone: '010-1234-4321', gender: 'W'}];


//for반복문.배열메소드(forEach) -배열을 이미 기능이 구현되어있는  내장 object  함수=기능

 let str = '<table border=1>';
 str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
 
 members.forEach((val,inx,ary) => {
 if (val.gender == 'W') {
 
     str += makeTr(val,'red');    
 } else if (val.gender == 'M') {
   
     str += makeTr(val,'blue');  
 }
 });
 
 function makeTr(mem,color) {
     let tr = `<tr style = 'color: ${color}'>`;
     for (let prop in mem) {
         tr += `<td>${mem[prop]}</td>`;    
     }
     tr += '</tr>';
     return tr;
 }
 
 document.write(str);
 
  //1번째 방식
  members.forEach(function(val,inx,ary) {
   //val:value / inx:index / ary:array
  console.log(val);
  console.log(val.phone);
  });
 
 
  //2번째 방식
  members.forEach(callBackFnc);
  function callBackFnc(val,ind,ary) {
     console.log(val);
  }