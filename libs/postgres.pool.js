const { Pool } = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'adrian',
    password: '1143412278',
    database: 'store-api'
  });


module.exports = pool;
