function gen(start, step) {
    var arrGen = [start, start + step];
    return arrGen;
}

function take(func, time) {
    var arrTake = [];
    var temp = func();
    var step = temp[1];
    for(var i = 0; i < time - 1; i++) {
        if (i == 0) {
            arrTake.push(temp[0], temp[1]);
        } else {
            temp = gen.call(this, temp[1], step);
            arrTake.push(temp[1]);
        }
    }
    return arrTake;
}

var gen2 = gen.bind(this, 0, 2);
console.log(take(gen2, 5));
