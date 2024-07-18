function bike( companyname,model,price,year) {
    this.companyname = companyname
    this.model = model
    this.price = price
    this.year = year
     
    
}
bike.prototype.name = "uxxyiii"
const b1 = new bike("re","gt650",4.45,2021)
console.log(b1);
console.log(b1.name);
