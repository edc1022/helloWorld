// for_test2.js
const arr = []; //배열선언.
// arr[arr.length] = 10;

arr.push(10); // 값을 추가.
arr.push(20);

let obj = {
    sname: 'Hong',
    age: 20,
    friends: ['Park'],
    addFriend: function(friend) {
        this.friends.push(friend); //push 는 추가
    },
    friendList: function(sname) {
        // 친구의이름을 콘솔 출력.
        console.log(obj.friends);
    }
}

obj.addFriend('kim');
obj.addFriend({name: 'Hwang', phone: '010-1111-2222'});

console.log(obj.friends[2]['phone']);