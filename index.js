const display1 = () => { return`Who are you to interfere?`}
console.log(display1())
const display2 = x => `This is ${x}`
console.log(display2(7))
const display3 = (x,y) => `x = ${x}  y = ${y}`
console.log(display3(4,5))
const display4 = (x,y) => {return `result = ${x+y}`}
console.log(display4(4,6))
const display5 = (x,y,z) => `result ${x*y*z}`
console.log(display5(3,4,5))