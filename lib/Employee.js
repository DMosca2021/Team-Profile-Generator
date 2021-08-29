// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee

const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
        
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() // <== returns 'Employee'
}

module.exports = Employee