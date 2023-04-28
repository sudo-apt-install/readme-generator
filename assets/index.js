const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown')

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?: ",
        name: "title",
      },
      {
        type: "input",
        message: "What is your project description?: ",
        name: "description",
      },
      {
        type: "input",
        message: "How is this project installed?: ",
        name: "installation",
      },
      {
        type: "input",
        message: "Contribution specifics?: ",
        name: "contributions",
      },
      {
        type: "rawlist",
        message: "What Liscense will you be using?: ",
        choices: [
          "MIT",
          "GNULGPLv3",
          "GNUAGPLv3",
          "Mozilla",
          "GNUGPLv3",
          "Apache",
          "IBM",
          "Boost",
          "None",
        ],
        name: "license",
      },
    ])
    .then((data) => {
      const markdownContent = generateMarkdown(data);
      generateMarkdown(data);

      fs.writeFile('README.md', markdownContent, (err) =>
      err ? console.error(err) : console.log('Successfully created README.md!')
      );
    });
    
};

// Function call to initialize app
init();
