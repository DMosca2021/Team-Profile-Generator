
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
const render = require("./src/sampleIndex.js")

const teamArray = [];
const idArray = [];

function initApp() {

    function createManager() {
        console.log("Begin creating a new developement team.");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter name of new manager:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter manager's ID number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an ID number.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter manager's email address:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address:";
                }
            },
            {
                type: "input",
                name: "managerNum",
                message: "Enter manager's office number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an office number.";
                }
            },
        ]).then(data => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerNum);
            teamArray.push(manager);
            idArray.push(data.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Choose next team member to add.",
                choices: [
                    "Engineer",
                    "Intern",
                    "Cancel"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    generateHTML()    ;
            }
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter engineer's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter engineer's ID number.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an ID number.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter engineer's email address.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's GitHub username.";
                }
            },
        ]) .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamArr.push(engineer);
            idArr.push(data.engineerId);
            createTeam();
        });
    }
    
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter intern's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }  
            },
            {
                type: "input",
                name: "internId",
                message: "Enter intern's ID number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an number.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter intern's email address?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Where does the intern attend school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a school.";
                }
            },
        ]) .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamArr.push(intern);
            idArr.push(data.internId);
            createTeam();
        });
    }

    function generateHTML() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        console.log("Generating Team Profile.... ");
        fs.writeFileSync(outputPath, render(teamArr), "utf-8");
    }

    createManager();
}

initApp();