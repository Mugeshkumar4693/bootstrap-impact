let str = "Hello World";
console.log(str.length)
console.log(str.charAt(6))// same process
//console.log(str.At(6))
//console.log(str[6])
for (let i=0;i<str.length;i++) {
    console.log(str.charAt(i))
    
}
console.log(str.substring(0, 5))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
str = "   Hello World    "
console.log(str)
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.replace("World", "Earth"))
str = "This award goes to Arun, And Vicky is good candidate"
console.log(str.replaceAll("Arun", "Vicky"))
console.log(str.charCodeAt(0))// ASCII=> Amarican Strandard Code for //Information Interchange