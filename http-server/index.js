const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));

//declaring
let homeContent = "";
let projectContent = "";
let registrationFormContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

//read project.html file 
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

//read registration.html file
fs.readFile("registration.html", (err, registrationForm) => {
  if (err) {
    throw err;
  }
  registrationFormContent = registrationForm;
});

http
  .createServer(function (request, response) {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationFormContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);