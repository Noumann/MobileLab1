class Person{
    name : String;
    age : number;
    address : String;

    constructor(name:String,age:number,address:String){
        this.address=address;
        this.age=age;
        this.name=name;
    }
}

let p1=new Person("Nouman",23,"Galway");
console.log("\nName ",p1.name+"\nAge ",p1.age+"\nAddress ",p1.address)