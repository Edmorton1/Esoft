console.log('deepCopy')
function deepCopy(obj) {
    const prototype = Object.getPrototypeOf(obj)
    const result = Object.create(prototype)
    
    for (let key of Object.keys(obj)) {
        const value = obj[key];
        if (typeof value == 'symbol') {
            result[key] = Symbol(value.description)
        } else if (!(value instanceof Object)) {
            result[key] = value
        } else if (value instanceof Set) {
            result[key] = new Set(value)
        } else if (value instanceof Array) {
            result[key] = new Array(...value)
        } else if (value instanceof Function) {
            result[key] = value.bind(result)
        } else if (value instanceof Date) {
            result[key] = new Date(value)
        } else if (value instanceof Map) {
            result[key] = new Map(value)
        } else if (obj[key] == obj[key]) {
            result[key] = 'Цикл'
        } else if (value instanceof Object) {
            result[key] = new Object(value)
        }
    }
    return result
}

const test_obj_proto = {
    num: 10,

    getNum() {
        console.log(this.num)
    },
    str: 'test',
}

const test_obj =  Object.create(test_obj_proto)
test_obj.arr = [1, 2, 3, 4, 5],
test_obj.date = new Date(),
test_obj.man = 120
test_obj.set = new Set([1, 1, 4, 5, 6, 6, 7]),
test_obj.func = function() {
    console.log(this.man)
}
test_obj.self = test_obj
test_obj.map = new Map([[1, 2, 3, 4]])
test_obj.sym = Symbol('sym')

console.log(deepCopy(test_obj).num == test_obj.num) // true
console.log(deepCopy(test_obj).getNum == test_obj.getNum) // true
console.log(deepCopy(test_obj).str == test_obj.str) // true
console.log(deepCopy(test_obj).set == test_obj.set) // false
console.log(deepCopy(test_obj).map == test_obj.map) // false
console.log(deepCopy(test_obj).arr == test_obj.arr) // false
console.log(deepCopy(test_obj).date == test_obj.date) // false
console.log(deepCopy(test_obj).func == test_obj.func) // false
console.log(deepCopy(test_obj).self == test_obj.self) // false
console.log(deepCopy(test_obj).sym == test_obj.sym) // false
console.log(deepCopy(test_obj))
console.log(test_obj)