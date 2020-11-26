const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const Choice = require("inquirer/lib/objects/choice");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a descirption for your application."
    },
    {
        type: "input",
        name: "installation",
        message: "What instructions are needed for installaiton?"
    },
    {
        type: "input",
        name: "usage",
        message: "Notate any usage information needed."
    },
    {
        type: "list",
        name: "license",
        message: "What licenses would you like to include?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "ISC License"]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?"
    } ,
    {
        type: "input",
        name: "tests",
        message: "What are the testing instructions?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "questions",
        message: "Provide instructions on how you can be reached for additional questions."
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            writeToFile("README.md", generateMarkdown({...inquirerResponses}))
        })
}

// function call to initialize program
init()
    
