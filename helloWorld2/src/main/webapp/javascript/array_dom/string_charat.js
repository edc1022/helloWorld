// string_charat.js

// chartAt(index) => 문자 반환.

console.log('World'.charAt(3));

function checkGender(no) {
    // 남자/여자 구문을 콘솔출력.
    let gender = no.replace('-','').charAt(6);
    if(gender == '1' || gender == '3') {
        console.log('남자입니다.')
    } else if (gender == '2' || gender == '4') {
        console.log('여자입니다.')
    } else {
        console.log('잘못된 번호입니다.')
    }

}

checkGender('970301-2345678');
checkGender('950301-1367234');
checkGender('9603011367234');