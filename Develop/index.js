const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        label: "title",
        message: "What is the title for your application?"
    },
    {
        label: "description",
        message: "Give a descirption for your application."
    },
    {
        label: "tableOfContents",
        message: "List items for your Table of Contents." 
    },
    {
        label: "installation",
        message: "What instructions are needed for installaiton?"
    },
    {
        label: "usage",
        message: "Notate any usage information needed."
    },
    {
        label: "license",
        message: "What licenses would you like to include?"
    },
    {
        label: "contributing",
        message: "What are the contribution guidelines?"
    } ,
    {
        label: "tests",
        message: "What are the testing instructions?"
    },
    {
        label: "username",
        message: "What is your GitHub username?"
    },
    {
        label: "email",
        message: "What is your email address?"
    },
    {
        label: "questions",
        message: "Provide instructions on how you can be reached for additional questions."
    }

];

// function to write README file
function writeToFile(fileName, data) {
    util.promisify(fs.writeFile)
}

// function to initialize program
function init() {
    questions.forEach(question => {
        inquirer.prompt([
            {
                type: "input",
                name: question.label,
                message: question.message,
            }
        ])
    })
}

// function call to initialize program
init()
    .then((writeToFile("TestREADME.md", generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to TestREADME.md"))
    .catch((err) => console.log(err));
