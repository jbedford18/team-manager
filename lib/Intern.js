const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
    }
    getSchool() {
        // putting school in all uppercase
        return this.school;
    }
}

module.exports = Intern;