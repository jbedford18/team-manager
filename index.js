const fs = require('fs');
const inquirer = require('inquirer');
const pgtemplate = require('./src/pgtemplate');


//employees
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const employeeArray = [];

const newManager = () => {
      return inquirer.prompt([
       {
        type: "input",
         name: 'name',
         message: 'What is the Managers name?', 
           validate: nameInput => {
                   if (nameInput) {
                     return true;
                   } else {
                       console.log ("Please enter managers name!");
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
         message: "What is the your manager email address?", 
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
    .then(managerInput => {
        const {name, id, email, office} = managerInput;
        const manager = new Manager (name, id, email, office);
        employeeArray.push(manager);
    })
};


const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's job title",
            choices: ['Engineer', 'Intern',]
        },
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
                        console.log ("Please enter your current email address:");
                        return false; 
                    }
                }
            },
//School for intern/github for engineer
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
    
//any more employees
        {
            type: "confirm",
            name: 'moreEmployee',
            message: "Do you have more employees?",
            default: false
        }
            

    ])

    .then(employeeData => {

        let {name, id, email, role, github, school, moreEmployee} = employeeData
        let employee;

        if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

            console.log(employee)

        } else if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github)

            console.log(employee)
        }

        employeeArray.push(employee);
        if (moreEmployee) {
            return newEmployee(employeeArray);
        } else {
            return employeeArray;
        }


    })
};

//function to write html file

const writeFile = allData => {
    fs.writeFile('./dist/index.html', allData, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("sucess")
        }
    })
};


newManager()
.then(newEmployee)
.then(employeeArray => {
    return pgtemplate(employeeArray);
})
.then(siteHtml => {
    return writeFile(siteHtml);
})
.catch(err => {
    console.log(err)
});