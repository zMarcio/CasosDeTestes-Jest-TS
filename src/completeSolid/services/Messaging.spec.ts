import { Messaging } from "./Messaging";

const createSut = () => {
    return new Messaging();
}

const msg = 'tester'

describe("Test in Messaging", ()=>{
    afterEach(() => jest.clearAllMocks())

    it("should return undefined",()=>{
        const sut = createSut()
        expect(sut.sendMessage(msg)).toBeUndefined()
    })
    it("should call console.log once",()=>{
        const sut = createSut()
        const consoleSpy = jest.spyOn(console, "log");
        sut.sendMessage(msg)
        expect(consoleSpy).toHaveBeenCalledTimes(1)
    })
    it("should console.log with 'Mensagem enviada: '",()=>{
        const sut = createSut()
        const consoleSpy = jest.spyOn(console, "log");
        sut.sendMessage(msg)
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada: ' + msg)
    })
})