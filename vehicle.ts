class Vehicle{
    //no need to use let inside the class
    engine : String;
    year : number;
    seats : number;

    //constructor
    constructor(year : number,engine : String ,seats : number){
        this.engine=engine;
        this.year=year;
        this.seats=seats;
    }
}

//instance of the class
let myCar=new Vehicle(2010,"small",5);
console.log("Seats : "+myCar.seats);


//second class
class Car extends Vehicle{
    model : String;

    constructor(year : number,engine : String ,seats : number,model:String){
        super(year,engine,seats);
        this.model=model;
    }
}

let c1=new Car(2010,"small",5,"VW");
console.log("Model : "+c1.model); 