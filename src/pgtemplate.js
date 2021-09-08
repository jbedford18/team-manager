
  const Manager = require('../lib/manager');
  const Engineer = require('../lib/engineer');
  const Intern = require('../lib/intern');
  
function createEmployee(employees) {
      var htmlCard = ''
      employees.forEach(element => {
          switch (element.getRole()) {
              case 'Manager':
                  htmlCard += `
                  <div class="col-sm-6 col-md-4 col-lg-3 border bg-light">
                      <div class="card-header">
                          <h2>${element.getName()}</h2>
                          <h3>Manager</h3>
                      </div>
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${element.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${element.getOffice()}</li>
                  </ul>
                </div>
                `
                  break;
          
              case 'Engineer':
                  htmlCard +=`
                  <div class="col-sm-6 col-md-4 col-lg-3 border bg-light">
                      <div class="card-header">
                          <h2>${element.getName()}</h2>
                          <h4>Engineer </h4>
                      </div>
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${element.getId()}</li>
                              <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                              <li class="list-group-item">Github Account: <a href="https://github.com/${element.getGitHub()}" target="_blank">${element.getGitHub()}</a></li>
                      </ul>
                  </div>`
                  break;
  
              case 'Intern':
                  htmlCard +=`
                  <div class="col-sm-6 col-md-4 col-lg-3 border bg-light">
                      <div class="card-header">
                          <h2>${element.getName()}</h2>
                          <h3>Intern </h3>
                      </div>
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${element.getId()}</li>
                              <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                              <li class="list-group-item">School: ${element.getSchool()}</li>
                      </ul>
                  </div>`
                  break;
          }
      });
      return htmlCard;
  }
  

  function pgtemplate(employees) {
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Manager</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        </head>
      <body>
      <nav class="navbar navbar-dark bg-primary">
         <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="container-fluid ">Team management Generator</h1>
        </class>
     </nav>
          <div class="container-fluid">
      
              <div class="row">
              ${createEmployee(employees)}
              </div>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
          </body>
          </html>
              `
  }
  
  module.exports = pgtemplate;