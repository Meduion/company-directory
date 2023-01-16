const Employee = require(`./Employee`)

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = `Engineer`;
    }

    getGithub() {
        return this.github;
    }
}

// const sarah = new Engineer(`Sarah`, 98, `sarah@home.com`, `SarahGit`);

// sarah.getName();
// sarah.getEmail();
// sarah.getId();
// sarah.getGithub();
// sarah.getRole();

module.exports = Engineer;