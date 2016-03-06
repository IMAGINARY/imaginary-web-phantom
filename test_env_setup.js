var config = require('./tests/config');
var exec = require('child_process').exec;
var console = require('console');

var userCreateCommand = "drush --root=\"" + config.localDrupalRootPath + "\" " +
    "user-create \"" + config.testUserName + "\" " +
    "--mail=\"" + config.testUserEmail + "\" " +
    "--password=\"" + config.testUserPass + "\" ";

var addRoleCommand = "drush --root=\"" + config.localDrupalRootPath + "\" " +
    "user-add-role editor \"" + config.testUserName + "\" ";

console.log("Creating user account " + config.testUserEmail);
var child = exec(userCreateCommand, function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }

  console.log("Adding editor role");
  child = exec(addRoleCommand, function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

});
