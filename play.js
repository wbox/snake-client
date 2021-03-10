const { connect } = require('./client');
const { setupInput } = require('./input');
//const move = require('./client');

console.log('Connecting...');
connect();

setupInput();