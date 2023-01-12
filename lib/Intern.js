const Employee = require(`./Employee`)

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = `Role: Intern`;
    }

    getSchool() {
        console.log(this.school);
    }
}

// const jess = new Intern(`Jess`, 121, `jess@home.com`, `School: UNB`);

// jess.getName();
// jess.getEmail();
// jess.getId();
// jess.getSchool();
// jess.getRole();

module.exports = Intern;