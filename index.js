const Manager = require ('./lib/Manager.js');
const Engineer = require( "./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require ("fs");
const path  = require ("path");
const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "index.html");
const createTeam= require ("./src/createteam.js");

let teamArray = []
const makeTeam = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "addEmployeeType",
            message: "What is the employees Role?",
            choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore employees"]
        }
    ]).then (answers => {
        switch (answers.addEmployeeType) {
            case "Manager": {
                choiceManager();
                break;
            }
            case "Engineer": {
                choiceEngineer();
                break;
            }
            case "Intern": {
                choiceIntern();
                break;
            }
            default:
        }  
    })

}
const choiceManager = () => {
     return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the Manager?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the ID of the Manager?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the email of the Manager?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the office number of the Manager?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        makeTeam();
    })
}

const choiceEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the ID number of the Engineer?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the email address of the Engineer?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's Github account name?"
        }
    ]) .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        teamArray.push(engineer);
        makeTeam();
    })
}

const choiceIntern = () => {
     return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the Intern?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is the ID number of the Intern?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the email address of the Intern?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What University does the Intern attend?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        makeTeam();
    })
}

makeTeam();