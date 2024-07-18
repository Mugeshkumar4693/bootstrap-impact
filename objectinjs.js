// creating a Object 3 types 
// console.log("creating a object 3 types");
// first type 
// var obj1 ={
//     name: "mamitha",
//     age:20
// }
// console.log("datatype:",typeof(obj1));
// console.log("before adding place & area",obj1);
// obj1.place="madurai";
// obj1.area="thalakulam";
// console.log("after adding place & area:",obj1);
// console.log("obj1 place value:",obj1["place"]);

// second type 
// var obj = new Object();
// obj.name ="mamitha",
// obj.age =20; 
// obj.gender ="female";

// console.log("before delete",obj);
// delete obj["name"];
// console.log("after delete",obj);

// third type object creation using constructor 

// The constructor method is a special method of a class for
// creating and initializing an object instance of class.

// var obj2 = new cons1();
// function cons1() {
//     this.fname ="neymar",
//     this.age =28,
//     this.role ="Football player"
// }
// cons1();
// console.log("obj2",obj2);
// console.log(Object.values(obj2));


// const user = {
//       bike: "gt-continedal",
//       model:  650,
//       price: 4.45,
//       dispaly: function () {
//           alert("user name is" + this.name)
        
//       }
// }
// user.bike = "re"
// user.model = 350
// user = {...user,year: "1875"} 
// console.log(user);

// const obj = {}
// const obj = new Object()
// obj.firstname = "mamitha"
// obj.lastname = "bjima"
// console.log(obj.lastname + "" + obj.firstname)
// console.log(obj["fristname"] + "" + obj["lastname"] )

const user = {
    firstname: "arun",
    lastname: "kumar",
    mark: {
        sslc: 700,
        hsc: 800,
        degree: 8.5
    },
    marks: function () {
        return this.mark.sslc + " " + this.mark.hsc + " " + this.mark.degree
        
    }

}
console.log(user.firstname);
console.log(user.mark.degree);
console.log(user.marks());