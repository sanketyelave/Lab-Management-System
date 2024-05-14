const pg = require("pg");

const db = new pg.Client({
    connectionString:"postgresql://week-10_owner:O5aPjGvRTi0X@ep-fancy-cell-a529ozuv.us-east-2.aws.neon.tech/LMS?sslmode=require"
})

db.connect();

module.exports = {db};
