// import {wizard} from './wizard'
// import {barbarian} from './barbarian'

import getClasses from './getClasses' 

console.log("it works from index.js")
//console.log(wizard,barbarian)
getClasses()

//checking babel support
const obj = {a:'apple', b:'brave'}
const newObj= {...obj,c:'charlie'}
console.log(newObj)
