const Employee = require(`./Employee`)

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = `https://github.com/${github}`;
        this.role = `Engineer`;
    }

    getGithub() {
        console.log(this.github);
    }
}

// const sarah = new Engineer(`Sarah`, 98, `sarah@home.com`, `SarahGit`);

// sarah.getName();
// sarah.getEmail();
// sarah.getId();
// sarah.getGithub();
// sarah.getRole();

module.exports = Engineer;