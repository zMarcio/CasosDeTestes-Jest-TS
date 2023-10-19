import { cartItem } from "./Interface/card-item";

export class Product implements cartItem{
    constructor(public name:string, public price:number){}
}