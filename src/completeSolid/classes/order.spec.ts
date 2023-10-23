import { PersistencyProtocol } from "./Interface/PersistencyProtocol";
import { cartItem } from "./Interface/card-item";
import { CustomerOrder } from "./Interface/customer-protocol";
import { MessagingProtocol } from "./Interface/messaging-protocol";
import { ShoppingCartProtocol } from "./Interface/shopping-cart-protocol";
import { Order } from "./order";

class ShoppingCartMock implements ShoppingCartProtocol{

    get items():Readonly<cartItem[]>{
        return [];
    }

    addItem(item: cartItem): void {
        
    }
    removeItem(index: number): void {
        
    }
    total(): number {
        return 1
    }
    totalWithDiscount(): number {
        return 2
    }

    isEmpty(): boolean {
        return false
    }

    clear(): void {
        
    }

}

class MessagingMock implements MessagingProtocol{
    sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol{
    saveOrder():void{}
}

class CostumerMock implements CustomerOrder{
    getName(): string {
        return ''
    }

    getIDN(): string {
        return ''
    }
}

const createSut = () => {
    const shoppingCartMock = new ShoppingCartMock()
    const messaginMock = new MessagingMock()
    const persistencyMock = new PersistencyMock()
    const costumerMock = new CostumerMock()
    const sut = new Order(shoppingCartMock,messaginMock,persistencyMock,costumerMock)
    return {
        sut,
        shoppingCartMock,
        messaginMock,
        persistencyMock,
        costumerMock
    }
}

describe('',() => {
    it('should not checkout if cart is empty', () => {
        const { sut, shoppingCartMock } = createSut()
        const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, "isEmpty").mockReturnValueOnce(true);
        sut.checkout()
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
        expect(sut.orderStatus).toBe("open")
    })

    it('should checkout if cart is not empty', () => {
        const { sut, shoppingCartMock } = createSut()
        const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false)
        sut.checkout()
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
        expect(sut.orderStatus).toBe("closed")
    })

    it('should send an email to customer', () => {
        const { sut, messaginMock } = createSut()
        const messaginMockSpy = jest.spyOn(messaginMock, 'sendMessage')
        sut.checkout()
        expect(messaginMockSpy).toHaveBeenCalledTimes(1)
    })

    it('should save order', () => {
        const { sut, persistencyMock } = createSut()
        const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder')
        sut.checkout()
        expect(persistencyMockSpy).toHaveBeenCalledTimes(1)
    })

    it('should save order', () => {
        const { sut, shoppingCartMock } = createSut()
        const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear')
        sut.checkout()
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
    })
})