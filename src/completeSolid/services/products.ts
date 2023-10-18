import { cartItem } from "../classes/Interface/card-item";

export class Product implements cartItem{
    constructor(public name:string, public price:number){}
}