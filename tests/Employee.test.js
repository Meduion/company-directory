const Employee = require(`../lib/Employee`);

describe(`Employee`, () => {
    it(`Should be an object`, () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe(`object`);
    })
    describe(`Employee name`, () => {
        it(`Should be a string`, () => {
            const name = `Tim`;
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        })
    })
    describe(`Employee id`, () => {
        it(`Should be a number`, () => {
            const id = 1;
            const employee = new Employee(`name`, id);
            expect(employee.id).toBe(id);
        });
    });
    describe(`Employee email`, () => {
        it(`Should be a valid email address`, () => {
            const email = `tim@tim.com`;
            const employee = new Employee(`name`, 1, email);
            expect(employee.email).toBe(email);
        });
    });
    describe(`getName()`, () => {
        it(`Should return the employee objects name property`, () => {
            const name = `Tim`;
            const employee = new Employee(name);
            expect(employee.getName()).toBe(name);
        });
    });
    describe(`getId()`, () => {
        it(`Should return the employee objects id property`, () => {
            const id = 1;
            const employee = new Employee(`Tim`, id);
            expect(employee.getId()).toBe(id);
        });
    });
    describe(`getEmail()`, () => {
        it(`Should return the employee objects email property`, () => {
            const email = `tim@tim.com`;
            const employee = new Employee(`Tim`, 1, email);
            expect(employee.getEmail()).toBe(email);
        });
    });
    describe(`getRole()`, () => {
        it(`Should return the employee objects role property`, () => {
            const role = `Employee`;
            const employee = new Employee();
            expect(employee.getRole()).toBe(role);
        });
    });
});