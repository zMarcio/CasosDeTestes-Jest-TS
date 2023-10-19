import { Product } from "./products";

const createSut = (name:string, price: number) => {
    return new Product(name, price);
}


describe("Test in Product", ()=>{
    afterEach(() => jest.clearAllMocks())

    it("should have properties name and price",()=>{
        const sut = createSut("Pincel", 49.99)
        expect(sut).toHaveProperty("name", "Pincel")
        expect(sut.price).toBeCloseTo(49.99)
    })
})
