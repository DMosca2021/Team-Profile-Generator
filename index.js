
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'index.html');


const teamArray = [];
const idArray = [];

function initApp() {

    function createManager() {
        console.log("Begin creating a new developement team.");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter name of new manager.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }
            }
        ])
    }
}