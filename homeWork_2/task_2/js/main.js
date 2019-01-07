var array = [
    {'name': 'John', 'age': 21},
    {'name': 'Alphred', 'age': 20},
    {'name': 'Luisa', 'age': 42},
    {'name': 'Anna', 'age': 73},
    {'name': 'Esmeralda', 'age': 121},
]

function pluck(array, property) {
    var tempArr = [];
    for(obj of array) {
        tempArr.push(obj[property]);
    }
    return tempArr;
}

console.log(pluck(array, 'name'));