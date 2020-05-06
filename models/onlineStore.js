const { Pool } = require('pg');

const PG_URI = 'postgres://opjpqkgn:ZmTvXb4FisH-IOBmo7G9bmKjLlEjpgB_@rajje.db.elephantsql.com:5432/opjpqkgn';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
