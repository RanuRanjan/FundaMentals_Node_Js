// import product from "./product";    wrong one
const productsingle = require('./product')
const sumsingle= require('./sum')
const {sum,product}= require('./math')



console.log(module , "module")

console.log(productsingle(4,5),"productsingle")

console.log(sumsingle(2,4),"sumsingle")

console.log(sum(4,6),"sum")

console.log(product(8,9),"product")
