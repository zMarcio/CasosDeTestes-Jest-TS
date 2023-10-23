import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const createInvidualCustomer = (firstName:string, lastName:string, cpf:string): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf);
}

const createEnterPriseCustomer = (name: string, cnpj: string) : EnterpriseCustomer =>{
    return new EnterpriseCustomer(name, cnpj)
}

describe("Customer", ()=>{

    it("Should have firstName,lastName and cpf for Invidual customer",()=>{
        const sut = createInvidualCustomer("Agostinho", "Junior", "1057779312");
        expect(sut).toHaveProperty("firstName", "Agostinho")
        expect(sut).toHaveProperty("lastName", "Junior")
        expect(sut).toHaveProperty("cpf", "1057779312")
    })

    it("Should have methos to get name and idn for Invidual customer",()=>{
        const sut = createInvidualCustomer("Agostinho", "Junior", "1057779312");
        expect(sut.getName()).toBe('Agostinho Junior')
        expect(sut.getIDN()).toBe('1057779312')
    })
})

describe("Enterprise Customer", ()=>{
    afterEach(() => jest.clearAllMocks())

    it("Should have one name and cpnj for enterprise customer", () => {
        const sut = createEnterPriseCustomer("Testinho", "1234565789")
        expect(sut).toHaveProperty("name", "Testinho")
        expect(sut).toHaveProperty("cnpj", "1234565789")
    })

    it("Should have methos to get name and idn for enterprise customer",()=>{
        const sut = createEnterPriseCustomer("Testinho", "1234565789");
        expect(sut.getName()).toBe('Testinho')
        expect(sut.getIDN()).toBe('1234565789')
    })
})