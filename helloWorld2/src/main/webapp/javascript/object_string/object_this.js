// object_this.js

// 1. 객체에서 this는 객체를 가리킴.
// 2. 함수에서 this는 전역객체(window)를 가리킴.
// 3. 이벤트에서 this는 이벤트를 받는 대상을 가리킴.

let obj = {}

obj.act = function() { // 메소드.
    this.value = 'default value'; // this:객체
    
    function innerAct() {
        this.value ='innerAct value'; // this:전역객체
        console.log('innerAct: ' + this.value);
    }
    function innerReact(caller) {
        caller.value = 'innerReact value';
        console.log('this.value: ' + this.value);
        console.log('caller.value: ' + caller.value);

    }

    innerAct();
    console.log('obj객체의 this.value: ' + this.value);

    innerReact(this);
    console.log('obj객체의 this.value: ' + this.value);

}
obj.act();

// 이벤트.
let btn = document.createElement('button'); // <button></button>
btn.innerHTML = '클릭';
btn.onclick = function() {
    console.log(this); // 이벤트에서 받는 this
}

document.querySelector('body').append(btn); // body태그의 하위요소.
console.log(btn);

