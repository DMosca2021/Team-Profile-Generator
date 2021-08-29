class Manager {
    constructor (officeNum) {
        this.officeNum = officeNum
    }

    getRole() //-- overridden to return 'Manager'
}

module.exports = Manager