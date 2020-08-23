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
    } catch(e) {
        console.log(e)
    }
}

async function post(payload){
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
        if (result.rowCount ===1){
            const response = {feedid: timestamp, ... payload};
            console.log(response)
            console.log("Succesfully inserted one row")
            return response;
        }
    } catch (e) {
        console.log("Failed to post: ", e.detail);
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

module.export = post;