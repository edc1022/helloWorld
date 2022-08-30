// object_clone.js

let originObj = {
    sname: 'Park',
    age: 10,
    changeAge: function() {
        this.age++;
    }
}

let cloneObj = originObj; // originObj 참조값 같은 곳을 바라봄= cloneObj.
cloneObj.sname = 'Choi';
console.log(originObj.sname);
originObj.changeAge();
console.log(cloneObj.age);

// 복사.
let obj2 = new Object();
let copyObj = Object.assign({}, originObj);

copyObj.sname = 'Hong';
console.log(originObj.sname);

let newObj = {
    sname:'kim',
    phone: '010-1234',
    age: 10
}
let dupObj = Object.assign(newObj, originObj);
console.log(dupObj);


// 객체의 속성을 지정.
let s1 = {
    sname: 'Hong'
}

// 속성추가. 삭제:delete s1 age;
s1.age = 10; 
s1['phone'] = '010-1111';
s1.friends = [{name:'김영식', pnone: '010-1234', age: 20}
            , {name:'홍명식', phone: '010-2345', hobbies: ['독서','수영']}
            ];

console.log(s1.friends[0].name); // 첫번째 친구 불러오기.
console.log(s1.friends[1].hobbies[0]);

class Student {
    constructor(sname, age) {
        this.sname = sname;
        this.age = age;
    }
}
let s2 = new Student('홍길동', 20);
Object.defineProperty(s2, 'score', {
    set: function(score) {
        if(score > 100) {
            throw '잘못된 값을 입력했습니다.(100보다 적은 값)'
        } else if (score < 0) {
            throw '잘못된 값을 입력했습니다.(0보다 큰 값)'
        } else {
            
            this._score = score;
        }
    },
    get: function() {
        return this._score; //score 속성 자기자신을 자꾸 호출.초과오류발생. _score 로 쓰자.
    }
});
s2.score = 80;
console.log('점수는 ' + s2.score);

let s3 = new Student('김민규', 22);


Student.prototype.showInfo = function() { // 원형에 정의.
    return `이름은 ${this.sname}이고 나이는 ${this.age}입니다.`
}

console.log(s2.showInfo());
console.log(s3.showInfo());




















