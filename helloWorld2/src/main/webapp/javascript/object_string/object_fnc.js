// object_fnc.js

// 생성자 함수(Constructor Function)
function Student(sno, sname) { // 생성자 함수라는걸 알기위해 대문자로 시작
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function() {
        return `학번은 ${this.sno}, 이름은 ${this.sname}입니다.`;
    }
}

let s1 = new Student('s11', '홍길동'); // new 라는 키워드로 함수 호출. 함수는 생성자가 따로 없음
console.log(`학번은 ${s1.sno}`);
console.log(s1.showInfo());