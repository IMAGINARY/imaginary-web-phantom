var config = {};

// Drupal test user credentials
config.testUserName = 'phan_test_user';
config.testUserEmail = 'phan_test_user@imaginary.org';
config.testUserPass = 'ENTER A PASSWORD HERE';

// Don't use production. Use the url of a dev or test server.
config.baseURL = 'http://imaginary.local/';
// Drupal root path (must be absolute)
config.localDrupalRootPath = '/var/www/imaginary_dev/httdocs'
// Drupal login route
config.loginRoute = 'member';
// Drupal logout route
config.logoutRoute = 'member/logout';

module.exports = config;