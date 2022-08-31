// array_indexof.jf

// String.prototype.indexOf()
// Array.prototype.indexOf()

const members = ['진정욱','노은경','백나현'];
const newMems = ['김민지','노은경','정다슬'];

let pos = members.indexOf('노언경'); // indexOf: 값이 들어옴.


// members 배열에 newMems 추가.
// 배열이니까 당연히 반복문 사용.
newMems.forEach(member => {
    // member 의 값이 members의 배열에 존재하는 지 여부 확인 후 추가.
    if (members.indexOf(member) == -1) { // -1: 없다라는 뜻
        members.push(member);
    }
})
console.log(members); //['진정욱','노은경','백나현''김민지','정다슬']
members.push('김민');

let result = members.some(member => { // member => member == '노은경'  으로도 가능.
    return member == '노은경1'; // return 하는 조건에 만족하는 값이 있는지 체크.
})
result = members.every(member => member.length == 3); // every: 이 조건을 모두 만족합니까.
result = members.find(member => member.startsWith('김')); // 만족하는 첫번째 값 리턴.
console.log(result);