//What is polyfill : polyfill is sort of a browser fallback, i.e. what if your browser don't have a bind func

let names = {
    firstName: "Tarun",
    LastName: "Lochib"
}

let printName = function () {
    console.log(this.firstName + " " + this.LastName)
}

let printMyName = printName.bind(names);
printMyName();

Function.prototype.mybind = function (...args) {
    let obj = this
    return function () {
        obj.call(args[0])
    }
}

let printMyName2 = printName.mybind(names);
printMyName2();
