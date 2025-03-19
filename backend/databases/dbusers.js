const bdPostgresql = require('../bd.js');

class DbService {
  async saveUser(user) {
    // First, check if email already exists
    const checkQuery = 'SELECT email FROM users WHERE email = $1';
    const checkResult = await bdPostgresql.query(checkQuery, [user.email]);

    if (checkResult.rows.length > 0) {
      throw new Error('Email already registered');
    }

    // If email doesn't exist, proceed with insert
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const result = await bdPostgresql.query(insertQuery, [user.name, user.email, user.password]);
    return result.rows[0];
  }
  async findUser(email, password){
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const result = await bdPostgresql.query([query, [email, password]]);
    return result.rows[0];
  }
}

module.exports = DbService;