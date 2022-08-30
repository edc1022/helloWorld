// object.js

// 객체 : {name:"홍길동", age:20, showAge: function() {....}}

class student {
    // 속성 정의불가. 변수선언X
    constructor(sno, name) { // 생성자
        this.sno = sno;
        this.name = name;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    showInfo() {
        return `이름은 ${this.name}이고 학번은 ${this.sno}입니다.`;
    }
}

let s1 = new student('s11', '홍길동'); //
console.log(s1.sno);
s1.setGrade(3);
console.log(s1.grade);

let s2 = new student('s12', '김민식');
s2.setGrade(2);

const students = [s1, s2, new student('s13','최홍식')];
students[2].setGrade(1);

// s1.phone = '010-111-2222'

delete s1.phone; //속성삭제.

students.forEach(student => console.log(`이름: ${student.name}, 연락처: ${student.phone}`));

forEach(student => console.log(student.showInfo()));

