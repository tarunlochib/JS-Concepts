//What is polyfill : polyfill is sort of a browser fallback, i.e. what if your browser don't have a bind func

let names = {
    firstName: "Tarun",
    LastName: "Lochib"
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.LastName + " from " + city + "," + state)
}

let printMyName = printName.bind(names, "Faridabad");
printMyName("Haryana");

Function.prototype.mybind = function (...args) {
    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(names, "Faridabad");
printMyName2("Haryana");
