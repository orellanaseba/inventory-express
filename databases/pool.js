const pg = require("pg")
require("dotenv").config()

const { Pool } = pg

const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD
})

module.exports = pool;