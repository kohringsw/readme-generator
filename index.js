const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

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
      type: "input",
      name: "installation",
      message:
        "What are the installation instructions? If there aren't any enter 'None'. (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log(
            "Please enter the installation instructions? If there aren't any enter 'None'."
          );
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
      name: "contributors",
      message: "Who is contributing to this project? (Required)",
      validate: (contributorsInput) => {
        if (contributorsInput) {
          return true;
        } else {
          console.log("Please enter contributors!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message:
        "What kind of testing can be done for your project? If there aren't any enter 'None'. (Required)",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("Please enter contributors!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What license is being used for this project? (Required)",
      choices: ["Apache", "GNU", "ISC", "MIT", "Open"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username if someone needs more information about your project? (Required)",
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
      message: "What is your email address if someone needs to contact you with questions? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
  ]);
};

// function to initialize program
async function init() {
  try {
    // Ask user questions and generate responses
    const data = await promptQuestions();
    const generateData = generateMarkdown(data);
    // function to write README file
    await writeFileAsync("./dist/README.md", generateData);
    console.log("README.md file successuflly written!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
