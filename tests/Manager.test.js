const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    it("If parameters are entered correctly, get manager", () => {
        const warren = new Manager("Warren Buffet", "104B", "warren@moneybags.com");
        console.log(warren);
    });
});