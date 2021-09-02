const Employee = require("../lib/Employee");
// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");

describe("Employee Class", () => {
    it("If parameters are entered correctly, get employee", () => {
        const devin = new Employee("Devin", "2112", "devin@cooldude.com");
        console.log(devin);
    });
});