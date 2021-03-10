/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", key => handleUserInput(key));
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === `\u0003`) {
    process.exit(); 
  }

  if (key === `\u0077` || key === '\u0057') {
    connection.write("Move: up");
  }

  if (key === `\u0073` || key === `\u0053`) {
    connection.write("Move: down");
  }

  if (key === `\u0061` || key === `\u0041`) {
    connection.write("Move: left");
  }

  if (key === `\u0064` || key === `\u0044`) {
    connection.write("Move: right");
  }

};

module.exports = { setupInput };
