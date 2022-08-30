// object_ex1.js

//클래스 Estimate. 속성: 재료, 단가: 재료와 부피 => 총금액.
class Estimate {
    constructor() { // 생성자는 여러번 X. 한번만
        this.unit = param;

    }
    getEstimate(uniType, width, height) { // wood 20 20 => 100 * 20 *20
       let priceInfo = this.unit.find(function(val) {
            return val.type == uniType;
        })
        return priceInfo.price * width *height;
            
        }
    addUnit(unit) {
            this.unit.push(unit);
        }
    }


let unitInfo = [
    {type: 'wood',price: 100},
    {type: 'iron',price: 300},
    {type: 'plastic', price: 200},
]




let estmate = new Estimate(unitInfo);
let result = estmate.getEstimate('wood', 30, 50);

estmate.addUnit({type: 'ceramic', price: 400});
result = estmate.getEstimate('ceramic',10,20);

console.log(`계산값은 ${result}`);