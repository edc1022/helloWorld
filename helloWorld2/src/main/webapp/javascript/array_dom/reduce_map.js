// reduce_map.js

// Array.prototype.map(); => 매핑(A -> A') 건수 똑같음.
// Array.prototype.filter(); => 필터링 (A -> a) 건수 줄어듦.

const names = ['이현성', '이주훈','황용주','최승현'];
let mapfnc = (name, idx) => {
    let obj = {} // 새로운 오브젝트 선언.
    obj.name = name; // 속성 추가.
    obj.sno = idx + 1; // {name:'이현성', sno: 1}
    return obj; // 반환하면 매핑되면서 새로운 배열 만들어줌.
}

let filfnc =(member) => {
    // return 값이 true 이면 새로운 값 반환. false 이면 반환안함.
   return member.name.startsWith('이'); //  '이' 라고 시작하는 문자가 있으면 리턴. 포함은 아님.
}

// reduce로 map을 구현하는 fnc
let reduceMapFnc = (acc, val, idx) => {
    let obj = {}
    obj.name = val;
    obj.sno = idx + 1;
    acc.push(obj); // [{name:'이현성',sno:1},{name:'이주훈',sno:2},]
    return acc;
}

// reduce로 filter을 구현하는 fnc
let reduceFilFnc = (acc, val) => {
    if (val.name.startsWith('이')) {
        acc.push(val);
    }
    return acc;
}


// 방법1.
// map메소드.
let members = names.map(mapfnc);
console.log(members);

// filter메소드.
let less = members.filter(filfnc);
console.log(less);

// map.filter 메소드체인.
let result = names.map(mapfnc).filter(filfnc)
console.log(result);

// 방범2.
// reduce로 map과 같은 기능 구현.
members = names.reduce(reduceMapFnc, []);
console.log(members);

// reduce로 filter와 같은 기능 구현.
lees = members.reduce(reduceFilFnc, []);
console.log(lees);

// 메소드 체인.
result = names.reduce(reduceMapFnc, [])
              .reduce(reduceFilFnc, []) // , []: 초기값 
console.log(result);


