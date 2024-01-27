// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input", 
        name: "email",
        message: "what is your email address?"
    },
    {
        type: "input", 
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input", 
        name: "description",
        message: "please provide a description of your project"
    },
    {
        type: "list", 
        name: "license",
        message: "what kind of license does your project have?",
        choices: ["MIT", "GPL 3.0", "BSD 3", "APACHE 2.0"
        ]
    },
    {
        type: "input", 
        name: "installation",
        message: "how do I install the dependencies?"
    },
    {
        type: "input", 
        name: "test",
        message: "what command should I type to run tests?"
    },
    {
        type: "input", 
        name: "usage",
        message: "what are some things the user should know when using your repo?"
    },
    {
        type: "input", 
        name: "contributing",
        message: "how would the user contribute to your project?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
