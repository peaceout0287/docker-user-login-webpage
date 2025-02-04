const mysql = require('mysql2/promise');

async function checkDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  await connection.ping();
  await connection.end();
}

checkDatabase()
  .then(() => {
    console.log('Healthcheck passed');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Healthcheck failed:', err);
    process.exit(1);
  });
