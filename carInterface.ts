//exporting the data
export interface car{
    year:number;
    seats:number;
    make:string;
    doors?:Doors;//opitional //enum class
    displayInfo():void;
}

export enum Doors{
    four=4,
    five=5
}