//declare type
type Point = {
    a:number,
    b:number
}

//intersection - extends type Point and added new field
type D3Point = Point & {
    z: number
}

//declare interface
interface IPoint{
    x:number,
    y:number
}

//extends interface
interface I3DPoint extends IPoint{
    z:number
}

// case when useful - type, in another cases better - interface
type stringOrNumber = string | number;

function print(coord: Point){

}

//there is possibility to add new field to interface
interface Test{
    a:number
}

interface Test{
    b:number
}
//that's possible only for interface, in type - error