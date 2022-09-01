// string_ex1.js
let items = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt aspernatur magni aut omnis quasi ea necessitatibus laborum? Vitae nulla iusto quod aspernatur inventore nihil consequuntur alias fugiat voluptate reprehenderit.'

let bdy = document.querySelector('body'); // body태그 찾아서 bdy변수에 할당할게.
let div = document.createElement('div'); // div element(:태그) 생성만 할게.
bdy.append(div); // body 자식요소로 붙임.

let words = items.split(' ');
words.forEach(word => {
   let span = document.createElement('span'); // createElement:태그를 만들어줌.
   span.innerText = word;

   div.append(span);

});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
inp.onchange = function() {
    //버튼을 클릭하면...
    let findWord = inp.value;
    let spans = document.querySelectorAll('span');
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function(span) {
        // <span>Lorem</span>  <span>ipsum</span>
        // findWord  == span.innerText => span.remove();
        if (findWord == span.innerText) {
            span.remove(); 
        }

    });
    inp.value = '';
    inp.focus();

}

document.querySelector('div').after(inp,btn); // after : 동일한 로 뒤에 넣겠다.?