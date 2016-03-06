var config = require('./tests/config');
var exec = require('child_process').exec;
var console = require('console');

var command = "drush --root=\"" + config.localDrupalRootPath + "\" " +
    "user-create \"" + config.testUserName + "\" " +
    "--mail=\"" + config.testUserEmail + "\" " +
    "--password=\"" + config.testUserPass + "\" ";

var child = exec(command, function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
