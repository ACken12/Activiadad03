require('dotenv').config()
const { Client } = require('pg')
const client = new Client({
  user: process.env.user,
  host: process.env.host,
  database: 'actividad03',
  password: process.env.password,
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});