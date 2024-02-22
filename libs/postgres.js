const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'adrian',
    password: '1143412278',
    database: 'store-api'
  });

  await client.connect();
}

module.exports = getConnection;

