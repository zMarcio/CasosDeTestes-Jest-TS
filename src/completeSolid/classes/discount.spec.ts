import { Discount, FiftyDiscount, NoDiscount, TenDiscount } from "./discount";

const createSut = (className : new () => Discount): Discount => {
    return new className();
}

describe("Discount", ()=>{
    afterEach(() => jest.clearAllMocks())

    it("Should have no discount",()=>{
        const sut = createSut(NoDiscount)
        expect(sut.calculate(10.99)).toBeCloseTo(10.99)
    })

    it("Should apply 10% discount on price",()=>{
        const sut = createSut(TenDiscount)
        expect(sut.calculate(10)).toBeCloseTo(9)
    })

    it("Should apply 50% discount on price",()=>{
        const sut = createSut(FiftyDiscount)
        expect(sut.calculate(10)).toBeCloseTo(5)
    })
})