const Employee = require(`../lib/Employee`);
const Engineer = require(`../lib/Engineer`);

describe(`Engineer`, () => {
    it(`Should be an object`, () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe(`object`);
    })
    describe(`Engineer github`, () => {
        it(`Should be the engineer's github user name`, () => {
            const githubUserName = `Tim`;
            const engineer = new Engineer(`Tim`, 1, `tim@tim.com`, githubUserName);
            expect(engineer.github).toBe(githubUserName);
        });
    });
    describe(`getRole()`, () => {
        it(`Should return the engineer objects role property`, () => {
            const role = `Engineer`;
            const engineer = new Engineer();
            expect(engineer.getRole()).toBe(role);
        });
    });
    describe(`getGithub()`, () => {
        it(`Should return the engineer objects github property`, () => {
            const github = `Tim`;
            const engineer = new Engineer(`Tim`, 1, `tim@tim.com`, github);
            expect(engineer.getGithub()).toBe(github);
        });
    });
});