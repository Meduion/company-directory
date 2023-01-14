const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

console.log(`\nHello, welcome to the Company Directory App. Please follow the prompts to add team members!\n`);

class Directory {
    constructor() {
        this.companyMembers = [];
    }

    addManager () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `Please enter the Manager's name.`,
                },
                {
                    type: 'number',
                    name: 'id',
                    message: `Please enter employee id number`,
                    // validate(value) {
                    //     if (value = !NaN) {
                    //         return value;
                    //     } else {
                    //         console.log(`\nPlease enter a valid number.`);
                    //         return false;
                    //     }
                    // }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter Manager's email address.`,
                    validate(value) {
                        if (value) {
                            return true;
                        } else {
                            console.log(`\nPlease enter a valid email address.`);
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'office',
                    message: `Please enter manager's office number.`,
                    // validate(value) {
                    //     if (value = !NaN) {
                    //         return value;
                    //     } else {
                    //         console.log(`\nPlease enter a valid number.`);
                    //         return false;
                    //     }
                    // }
                },
            ])
            .then((response) => {
                const manager = new Manager(response.name, response.id, response.email, response.office);
                this.companyMembers.push(manager);
                console.log(companyDirectory.companyMembers);
                this.addEmployees();
            });
    }

    addEngineer () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `Please enter the Engineer's name.`,
                },
                {
                    type: 'number',
                    name: 'id',
                    message: `Please enter employee id number`,
                    // validate(value) {
                    //     if (value = !NaN) {
                    //         return value;
                    //     } else {
                    //         console.log(`\nPlease enter a valid number.`);
                    //         return false;
                    //     }
                    // }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter Engineer's email address.`,
                    validate(value) {
                        if (value) {
                            return true;
                        } else {
                            console.log(`\nPlease enter a valid email address.`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: `Please enter Engineer's github user name.`,
                },
            ])
            .then((response) => {
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                this.companyMembers.push(engineer);
                console.log(companyDirectory.companyMembers);
                this.addEmployees();
            });
    }

    addIntern () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `Please enter the Intern's name.`,
                },
                {
                    type: 'number',
                    name: 'id',
                    message: `Please enter employee id number`,
                    // validate(value) {
                    //     if (value = !NaN) {
                    //         return value;
                    //     } else {
                    //         console.log(`\nPlease enter a valid number.`);
                    //         return false;
                    //     }
                    // }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter Intern's email address.`,
                    validate(value) {
                        if (value) {
                            return true;
                        } else {
                            console.log(`\nPlease enter a valid email address.`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: `Please enter the name of the Intern's school.`,
                },
            ])
            .then((response) => {
                const intern = new Intern(response.name, response.id, response.email, response.school);
                this.companyMembers.push(intern);
                console.log(companyDirectory.companyMembers);
                this.addEmployees();
            });
    }

    addEmployees () {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'addEmployees',
                    message: 'Would you like to add Engineers, Interns, or Finish?',
                    choices: ['Add Engineer', 'Add Intern', 'Finish'],
                }
            ])
            .then((response) => {
                switch(response.addEmployees) {
                    case 'Add Engineer':
                        this.addEngineer();
                        break;
                    case 'Add Intern':
                        this.addIntern();
                        break;
                }
            })
    }

    writeToFile (filename, data) {
        fs.writeFile(fileName, data, (error) =>
            error ? console.error(error) : console.log `Writing File.`
        );
    }

    finish () {
        
    }
}

const companyDirectory = new Directory;

companyDirectory.addManager();