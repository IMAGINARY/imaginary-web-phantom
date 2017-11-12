# Visual regression test suite for the IMAGINARY website

## Config

Copy the `tests/config.sample.js` file to `tests/config.js` and edit

You **must** configure the following variables:

- **baseURL** : URL of the server you're testing. Use a dev or staging 
server, not the production server.

- **localDrupalRootPath** : Absolute path to the Drupal installatio
(used with Drush for dev env setup and teardown only)

- **testUserPass** : Secret password for the test user. 

## Running the tests

To run the tests execute

    ./npm test
  
The first run will generate baseline screenshots in the `screenshots`
directory. Subsequent executions will compare these screenshots with 
the new ones and inform of any differences. Failed comparisons are
stored in the `failures` directory.

## Run only some tests

You can run just one test case by specifying it through the CLI:   

    ./npm test -- --case=home
