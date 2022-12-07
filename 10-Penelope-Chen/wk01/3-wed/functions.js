const calculate = function (num1, num2, operation) {
    if (operation === "add") {
        return (num1 + num2)
    } else if (operation === "sub") { 
        return (num1 - num2)
    }
}
console.log(calculate(4, 2, "add"))
console.log(calculate(4, 2, "sub"))
// console.log(calculate(4, 2, "mult"))
// console.log(calculate(4, 2, "div"))
// console.log(calculate(4, 2, "exp"))