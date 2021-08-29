const Employee = require("./Employee");

class Engineer {
    constructor (userName) {
        this.userName = userName
    }

    getGithub()

    getRole() //-- overridden to return 'Engineer'
}

module.exports = Engineer