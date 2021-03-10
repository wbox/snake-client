const { connect } = require('./client');
//const move = require('./client');

console.log('Connecting...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if(key === `\u0003`) {
    process.exit(); 
  }
};
