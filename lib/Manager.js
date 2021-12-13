const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '', email = '', id = '', phone = '') {
        super(name, email, id);

        this.phone = phone;
    }

    getPhone() {
        return `${phone}`;
    }

    getRole() {
        return `Manager`
    }
}

module.exports = Manager