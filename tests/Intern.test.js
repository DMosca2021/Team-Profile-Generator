const Intern = require("../lib/Intern");

describe("Intern Class", () => {
    it("If parameters are entered correctly, get intern", () => {
        const robert = new Intern("Robert De Niro", "81743", "vito@corleonefamily.com", "high school");
        console.log(robert);
    });
});