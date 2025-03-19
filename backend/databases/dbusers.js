const bdPostgresql = require('../bd.js');
const bcrypt = require('bcrypt');

class DbService {
  async saveUser(user) {
    // First, check if email already exists
    const checkQuery = 'SELECT email FROM users WHERE email = $1';
    const checkResult = await bdPostgresql.query(checkQuery, [user.email]);

    if (checkResult.rows.length > 0) {
      throw new Error('Email already registered');
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    // If email doesn't exist, proceed with insert using the hashed password
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const result = await bdPostgresql.query(insertQuery, [user.name, user.email, hashedPassword]);
    return result.rows[0];
  }

  async findUser(email, password) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await bdPostgresql.query(query, [email]);
    const user = result.rows[0];

    if (!user) return null;

    // Compare the provided password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
  }
}

module.exports = DbService;