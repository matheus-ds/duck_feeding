const {Client} = require('pg');
require("dotenv/config");

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

async function connect(){
    try{
        await client.connect()
        console.log("Connected successfully")
    } catch(e) {
        console.log(e)
    }
}

async function postDB(payload){
    try{
        const timestamp = Date.now();
        if (! client._connected){
            await connect();
        }
        const sqlQuery = `
        insert into feed (
            feedid
            , food
            , time
            , location
            , number_of_ducks
            , food_amount
        )
        values(
            ${timestamp}
            , '${payload.food}'
            , '${payload.time}'
            , '${payload.location}'
            , '${payload.number_of_ducks}'
            , '${payload.food_amount}'
        )
        `
        const result = await client.query(sqlQuery);
        await client.query("COMMIT");
        if (result.rowCount ===1){
            const response = {feedid: timestamp, ... payload};
            console.log("Succesfully inserted one row")
            return response;
        }
    } catch (e) {
        console.log("Failed to post: ", e);
        return {message: "Failed to insert entry in database. Please try again later."}
    } finally{
        await client.end();
    }
}

// const payload = {
//     food: "bread"
//     , time: "9"
//     , location: "Beacon Hill"
//     , number_of_ducks: 2
//     , food_amount: "2kg"
// }
// post(payload);

module.exports = postDB;