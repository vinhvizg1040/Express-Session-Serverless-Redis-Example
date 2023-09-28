const Redis = require('ioredis');
require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DB = process.env.DB;

const redis = new Redis({
    port: PORT, // Redis port
    host: HOST, // Redis host
    username: USERNAME, // needs Redis >= 6
    password: PASSWORD,
    db: DB, // Defaults to 0
  });

module.exports = redis;