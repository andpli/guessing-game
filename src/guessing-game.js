let dMax = 0;
let dMin = 0;
let dRes = 0;
class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
    dMax = max;
    dMin = min;
    }

    guess() {
    dRes = Math.ceil((dMax + dMin)/ 2);
    return dRes;
    }

    lower() {
       dMax = dRes;
    }

    greater() {
        dMin = dRes;
    }
}

module.exports = GuessingGame;
