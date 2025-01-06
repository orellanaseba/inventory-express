const pg = require("pg")
require("dotenv").config()

const { Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgres://postgres:sebachiche@localhost:5432/inventory-express"
})

module.exports = pool;