//import the data from different folders and files
import {car} from "./carInterface";
//importing the enums
import {Doors} from "./carInterface";

class ford implements car{
    year=1980;
    seats=4;
    make="Ford";
    doors=Doors.five;
    displayInfo(){
        return "This is Ford";
    }
}

let ford1=new ford();
console.log(ford1.displayInfo()+"\nDoors : "+ford1.doors)