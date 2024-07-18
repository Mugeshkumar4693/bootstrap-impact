const name1 = "arun" //noraml string
const name2 = 'kumar'
const name3 = new String("arun")//string object
const name4 = new String("arun")
const name5 = name3
console.log(name1 == name2);
console.log(name1 == name3);
console.log(name1 === name3);
console.log(name3 === name4);
console.log(name3 == name5);
console.log(name5 === name3);