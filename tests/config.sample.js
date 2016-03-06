var config = {};

// Drupal test user credentials
config.testUserName = 'test';
config.testUserPass = 'test';

// Don't use production. Use the url of a dev or test server.
config.baseURL = 'http://imaginary.local/';
// Drupal login route
config.loginRoute = 'member';
// Drupal logout route
config.logoutRoute = 'member/logout';

module.exports = config;