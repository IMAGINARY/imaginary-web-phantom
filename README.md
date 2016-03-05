Visual regression test suite for the Imaginary website

Configure the server you're testing in tests/testsuite.js by editing the
line

  var baseURL = 'http://imaginary.local/';
  
Preferably use a dev or staging server and not the production server.

To run the tests execute

  ./runtests
  
The first run will generate baseline screenshots in the **screenshots**
directory. Subsequent executions will compare these screenshots with 
the new ones and inform of any differences. Failed comparisons are
stored in the **failures** directory.