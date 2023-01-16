const Employee = require(`../lib/Employee`);
const Intern = require(`../lib/Intern`);

describe(`Intern`, () => {
    it(`Should be an object`, () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe(`object`);
    })
    describe(`Intern school`, () => {
        it(`Should be the name of the intern's school`, () => {
            const school = `UNB`;
            const intern = new Intern(`Tim`, 1, `tim@tim.com`, school);
            expect(intern.school).toBe(school);
        });
    });
    describe(`getRole()`, () => {
        it(`Should return the intern objects role property`, () => {
            const role = `Intern`;
            const intern = new Intern();
            expect(intern.getRole()).toBe(role);
        });
    });
    describe(`getSchool()`, () => {
        it(`Should return the intern objects school property`, () => {
            const school = `UNB`;
            const intern = new Intern(`Tim`, 1, `tim@tim.com`, school);
            expect(intern.getSchool()).toBe(school);
        });
    });
});