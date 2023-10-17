describe("Primitive values",  () => {
    it("should test jest assertions",()=>{
        const number = 10;
        expect(number).toBe(10);
        expect(number).toEqual(10);

    });
});


describe("Objecst",  () => {
    it("should test jest assertions with objects",()=>{
        const person = {name:"cachorro", age: 30}
        const anotherPerson = {...person}
        expect(person).toEqual(anotherPerson)
        expect(person).toHaveProperty("age")
        expect(person).toHaveProperty("age", 30)
        expect(person).not.toHaveProperty("age", 31)

        expect(person.name).toBe('cachorro')
    });
});