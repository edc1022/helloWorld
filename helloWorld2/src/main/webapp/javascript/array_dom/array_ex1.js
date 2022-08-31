// array_ex1.js
const data =`[{"id":1,"first_name":"Glyn","last_name":"McIllrick","email":"gmcillrick0@ox.ac.uk","gender":"Non-binary","salary":6210},
{"id":2,"first_name":"Kattie","last_name":"Garci","email":"kgarci1@com.com","gender":"Female","salary":8659},
{"id":3,"first_name":"Nertie","last_name":"Hardman","email":"nhardman2@sourceforge.net","gender":"Female","salary":9220},
{"id":4,"first_name":"Georgie","last_name":"Falcus","email":"gfalcus3@youku.com","gender":"Female","salary":9191},
{"id":5,"first_name":"Spense","last_name":"Dobrovolny","email":"sdobrovolny4@csmonitor.com","gender":"Male","salary":1589},
{"id":6,"first_name":"Guy","last_name":"Vaune","email":"gvaune5@wordpress.com","gender":"Male","salary":6985},
{"id":7,"first_name":"Curtice","last_name":"Sappell","email":"csappell6@mtv.com","gender":"Male","salary":7242},
{"id":8,"first_name":"Maybelle","last_name":"Armin","email":"marmin7@hp.com","gender":"Female","salary":9951},
{"id":9,"first_name":"Yanaton","last_name":"Takis","email":"ytakis8@nationalgeographic.com","gender":"Male","salary":2334},
{"id":10,"first_name":"Willie","last_name":"Joyson","email":"wjoyson9@canalblog.com","gender":"Male","salary":5219},
{"id":11,"first_name":"Mortimer","last_name":"Hrus","email":"mhrusa@joomla.org","gender":"Male","salary":1484},
{"id":12,"first_name":"Rozella","last_name":"Fenby","email":"rfenbyb@dot.gov","gender":"Female","salary":1725},
{"id":13,"first_name":"Ginger","last_name":"Esch","email":"geschc@networkadvertising.org","gender":"Male","salary":9879},
{"id":14,"first_name":"Gail","last_name":"Maulin","email":"gmaulind@google.co.jp","gender":"Male","salary":3496},
{"id":15,"first_name":"Georgeanna","last_name":"Millership","email":"gmillershipe@meetup.com","gender":"Female","salary":3244}]`;

let result = JSON.parse(data); // String -> object 파싱한다.= 해석
let entries = result.map (member => {
    let ary = []
    Object.keys
    for(let prop in member) {
        ary.push(member[prop]);
    }
    return ary;
})
console.log(entries);



result.forEach(element => {
    // console.log(element.first_name);
    
});




// 성별이 Female이고 salary 5000 이상인 사람.
let str = result.reduce((acc,val,idx) => {
    if(idx == 0) {
        acc = '<ul>';
    }
    if(val.gender == 'Female' && val.salary > 5000) {

        acc += `<li>${val.id}${val.first_name}${val.last_name} ${val.salary}</li>`;
    }
    if(idx == result.length -1) {
        acc += '</ul>'
    }
    return acc;
}, '');

document.write(str); // <ul><li>15 Carolin Vanyarkin 5500</li>......</ul>