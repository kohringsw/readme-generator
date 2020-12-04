const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// array of questions for user
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Give a brief description of your project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmInstallInstructions",
      message: "Are there any installation instructions?",
      default: true,
    },
    {
      type: "input",
      name: "installInstructions",
      message: "What are the installation instructions? (Required)",
      when: ({ confirmInstallInstructions }) => {
        if (confirmInstallInstructions) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project being used for? (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter what this project is used for!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributions",
      message: "Who is contributing to this project? (Required)",
      validate: (contributionsInput) => {
        if (contributionsInput) {
          return true;
        } else {
          console.log("Please enter contributors!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTests",
      message: "Are there any tests for this project?",
      default: true,
    },
    {
      type: "input",
      name: "tests",
      message: "What kind of testing can be done for your project? (Required)",
      when: ({ confirmTests }) => {
        if (confirmTests) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What license is being used for this project? (Required)",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username? (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "problems",
      message:
        "What can be done if someone has issues with your project? (Required)",
    },
  ]);
};

promptQuestions();

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
