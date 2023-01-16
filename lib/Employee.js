class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = `Employee`;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

// Following included for testing.
// const brian = new Employee(`Brian`, 37, `me@me.com`);

// brian.getName();
// brian.getEmail();
// brian.getId();
// brian.getRole();

module.exports = Employee;