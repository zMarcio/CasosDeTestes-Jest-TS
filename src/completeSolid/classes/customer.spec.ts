import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const createInvidualCustomer = (firstName:string, lastName:string, cpf:string): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf);
}

const createEnterPriseCustomer = (name: string, cnpj: string) : EnterpriseCustomer =>{
    return new EnterpriseCustomer(name, cnpj)
}

describe("Customer", ()=>{
    afterEach(() => jest.clearAllMocks())

    it("Should have one customer",()=>{
        const sut = createInvidualCustomer("Agostinho", "Junior", "1057779312");
    })

    it("Should have one Enterprise customer", () => {
        const sut = createEnterPriseCustomer("Testinho", "1234565789")
        expect(sut).toHaveProperty('name', 'Testinho')
        expect(sut).toHaveProperty('cpnj', 'Testinho')
    })
})

describe("Enterprise Customer", ()=>{
    afterEach(() => jest.clearAllMocks())

    it("Should have one customer",()=>{
        const sut = createInvidualCustomer("Agostinho", "Junior", "1057779312");
    })

    it("Should have one Enterprise customer", () => {
        const sut = createEnterPriseCustomer("Testinho", "1234565789")
        expect(sut).toHaveProperty('name', 'Testinho')
        expect(sut).toHaveProperty('cpnj', 'Testinho')
    })
})