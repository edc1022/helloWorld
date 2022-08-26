// multi.js : 구구단 출력.

//3 * 1 = 3
//3 * 2 = 6
//3 * 3 = 9

function gugudan(numb) {
    let num = numb;
    let str = ''; //문자열 선언
    for (let i = 1; i <= 9; i++) {
        // str += '<p>' + num + '*' + i + '=' + (num * i) +'</p>'
        str += `<p>${num} * ${i} = ${num*i} </p>`;
    }
    return str;
}
let result = gugudan(8)
document.write(result);

let numb = 30;
console.log(`numb의 값은 ${numb} 입니다.`)