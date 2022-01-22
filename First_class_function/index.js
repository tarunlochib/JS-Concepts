let sum = function (a) {
    return function (b) {
        if(b) {
            return sum(a + b);
        }
        return a;
    }
}

console.log(sum(2)(4)(5)(7)(9)());
