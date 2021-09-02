const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    it("If parameters are entered correctly, get engineer", () => {
        const elon = new Engineer("Elon Musk", "42", "elon@evilgenius.com", "elonmusk");
        console.log(elon);
    });
});

