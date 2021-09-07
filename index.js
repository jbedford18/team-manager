const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

//employee's 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeArray = [];


//employee information
const createEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your employees name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the employee name!');
          return false;
        }
      }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number: "
   },
   {
    type: "input",
    name: 'email',
    message: "What is the employee's email?", 
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
                console.log ("Please enter a valid email address.");
                return false; 
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's job title",
        choices: ['Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is this intern attneding?",
        when: (input) => input.role === "Intern",
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter their GitHub Username',
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },     
     {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to enter another employee?',
        default: false
      }
 ]);
};

//Adding in Manager details

const createManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Team Manager)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter the managers ID number: "
   },
   {
        type: "input",
        name: 'email',
        message: "What is the your email?", 
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
                console.log ("Please enter a valid email address.");
                return false; 
            }
        }
    },
   { type: "input",
    name: "office",
    message: "Enter the managers office number: "
}

    ])
    .then(managerData => {
        const {name, id, email, office} = managerData;
        const manager = new Manager (name, id, email, office);

        //pushes this new manager input to the array
        employeeArray.push(manager);
    })
};