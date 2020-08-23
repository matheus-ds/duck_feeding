const {Client} = require('pg');
require("dotenv/config");

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: "postgres"
})

async function connect(){
    try{
        await client.connect()
        console.log("Connected successfully")
        const result = await client.query(`select * from feed;`);
        console.table(result.rows);
    } catch(e) {
        console.log(e)
    } finally{
        await client.end();
    }
}

connect();