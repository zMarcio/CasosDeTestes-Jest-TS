import { cartItem } from "./Interface/card-item";
import { Discount } from "./discount";
import { ShoppingCart } from "./shopping-cart";

const createSut = () => {
    const mockDiscount = createDiscount()
    const sut = new ShoppingCart(mockDiscount)
    return {sut, mockDiscount}
}


const createDiscount = () => {
    class discountMock extends Discount{}
    return new discountMock();
}

const createCartItem = (name:string, price:number) => {
    class CartItemMock implements cartItem{
        constructor(public name:string, public price:number){}
    }
    return new CartItemMock(name , price)
}

const createSutWithProduct = () => {
    const { sut, mockDiscount } = createSut();
    const cartItem1 = createCartItem('camiseta', 40);
    const cartItem2 = createCartItem('Caneta', 1)
    sut.addItem(cartItem1)
    sut.addItem(cartItem2)
    return { sut , mockDiscount }
}


describe("Customer", ()=>{
    afterEach(() => jest.clearAllMocks())
    
    it("Should be an empty cart when no product is added",()=>{
        const {sut} = createSut();
        expect(sut.isEmpty()).toBe(true)
    })

    it("should have two cart items",()=>{
        const { sut } = createSutWithProduct()
        expect(sut.items.length).toBe(2)
    })

    it("should teste total and totalWithDiscount",()=>{
        const {sut} = createSutWithProduct();
        expect(sut.total()).toBe(41)
        expect(sut.totalWithDiscount()).toBe(41)
    })

    it("should add products and clear cart ",()=>{
       const {sut} = createSutWithProduct()
       expect(sut.items.length).toBe(2)
       sut.clear();
       expect(sut.items.length).toBe(0)
       expect(sut.isEmpty()).toBe(true)
    })
    
    it("should remove products",()=>{
        const {sut} = createSutWithProduct()
        expect(sut.items.length).toBe(2)
        sut.removeItem(1)
        expect(sut.items.length).toBe(1)
        sut.removeItem(0)
        expect(sut.isEmpty()).toBe(true)
    })

    it("should call discount.calculate(price) once when totalWithDiscount is called",()=>{
        const {sut, mockDiscount} = createSutWithProduct()
        const discountMockSpy = jest.spyOn(mockDiscount, "calculate")
        sut.totalWithDiscount()
        expect(discountMockSpy).toHaveReturnedTimes(1)
    })

    it("should call discount.calculate(price) with totalPrice when totalWithDiscount is called",()=>{
        const {sut, mockDiscount} = createSutWithProduct()
        const discountMockSpy = jest.spyOn(mockDiscount, "calculate")
        sut.totalWithDiscount()
        expect(discountMockSpy).toHaveBeenCalledWith(sut.total())
    })

})