const Employee = require(`../lib/Employee`);
const Manager = require(`../lib/Manager`);

describe(`Manager`, () => {
    it(`Should be an object`, () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe(`object`);
    })
    describe(`Manager officeNumber`, () => {
        it(`Should be a number`, () => {
            const officeNumber = 1;
            const manager = new Manager(`Tim`, 1, `tim@tim.com`, officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });
    describe(`getRole()`, () => {
        it(`Should return the manager objects role property`, () => {
            const role = `Manager`;
            const manager = new Manager();
            expect(manager.getRole()).toBe(role);
        });
    });
    describe(`getOfficeNumber()`, () => {
        it(`Should return the manager objects officeNumber property`, () => {
            const officeNumber = 1;
            const manager = new Manager(`Tim`, 1, `tim@tim.com`, officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });
});