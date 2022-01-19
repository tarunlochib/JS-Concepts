let names = {
    firstName: "Tarun",
    lastName: "Lochib",
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state );
}
printFullName.call(names,"Faridabad","Haryana");

let names2 = {
    firstName: "Vimal",
    lastName: "Mishra",
}

//Call method : this concept is called function borrowing that means 
//you can borrow function from other object and use with values of other object
printFullName.call(names2,"Faridabad","Haryana")

//the only difference between call and apply method is in apply method we pass the arguments in list 

printFullName.apply(names2,["Faridabad", "Haryana"])

//bind Method
let printMyName = printFullName.bind(names2, "Faridabad", "Haryana");
console.log(printMyName);
printMyName();

//the only difference between call and bind is like it gives you the copy but which can be invoke later.