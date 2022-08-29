// function_param.js
// 함수선언식. function
// 함수호이스팅: 함수선언부분 끝부분에 있더라도 함수 먼저 읽어들이고 실행함.
function myFunc(param) { // parameter
    console.log('Hello!! ' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + param2);
}

myFunc('World'); // argument
myFunc2('Welcome ', 'Heme!!');

// 함수표현식.
let myFunc3 = function (param) { // parameter
    document.write('<p>Hello, ' + param + '</p>');
}
myFunc3('홍길동'); // argument

let myFunc4 = myFunc3;
myFunc4('World');

// 매개값을 처리하는 arguments 객체.
function mySum(n1=0, n2=0) {
    let sum = 0;
    console.log(arguments /*갯수상관없이 매개값 받아줌*/ )
    // console.log(n1 + n2);
    for (let num of arguments)
    
    sum += num;

    console.log(sum);

}
mySum(1,2,3,4,5,6,7);

// 화살표 함수: 주로 메소드에 오는 함수들을 간략하게 표현하기위해 사용.
function mySum5(a,b) {
    console.log(a + b) ;
}

// forEach 메소드의 매개값으로 화살표함수를 사용.\ 
['Hello', 'World'].forEach((val,idx) => //{} 생략가능
    console.log(val,idx));