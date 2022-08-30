// object_ex2.js

function Estimate(param) {
    this.unit = param;
    this.getEstimate = function(unitType, width,height) {
        let priceInfo = this.unit.find(val => val.type == unitType);
        return priceInfo.price * width * height;
    }
    this.addUnit = function(unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood',price: 100},
    {type: 'iron',price: 300},
    {type: 'plastic', price: 200},

]

let estmate = new Estimate(unitInfo);
let result = estmate.getEstimate('iron',20,30);

estmate.addUnit({type: 'carbon', price: 500});
result = estmate.getEstimate('carbon',20,30)

console/log(`계산결과: %{result}`);



