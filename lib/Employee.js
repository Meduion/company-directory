class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = `Employee`;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`ID: ${this.id}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

    getRole() {
        console.log(this.role);
    }
}

// Following included for testing.
// const brian = new Employee(`Brian`, 37, `me@me.com`);

// brian.getName();
// brian.getEmail();
// brian.getId();
// brian.getRole();

module.exports = Employee;