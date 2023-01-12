const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = `Role: Manager`;
    }
}

// const tim = new Manager(`Tim`, 56, `tim@home.com`, 3762);

// tim.getName();
// tim.getEmail();
// tim.getId();
// tim.getRole();

module.exports = Manager;
