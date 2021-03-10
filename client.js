const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    //setInterval(() => { conn.write("Move: up")}, 3000 );
    //move(conn, "down", 5);
  });
  
  
  // conn.on('connect', () => {
  //   conn.write("Name: SAM");
  //   conn.write("Move: down")
  //   conn.write("Move: down");
  //   //move(conn, "up", 5);
  // });

  // conn.on('data', (data) => {
  //   console.log('Server says: ', data);
  // });
  
  return conn;
}

const move = (connection, direction, times) => {
  connection.on('connect', () => {
    for (let t = 0; t < times; t++){
      setTimeout(() => { 
        connection.write(`Move: ${direction}`), times * 1000});
    };
  });
};



module.exports = { connect };

// console.log('Connecting ...');
// connect();