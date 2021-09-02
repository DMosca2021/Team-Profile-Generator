const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    it("If parameters are entered correctly, get employee", () => {
        const devin = new Employee("Devin", "2112", "devin@cooldude.com");
        console.log(devin);
    });
});