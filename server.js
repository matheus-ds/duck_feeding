const express = require('express');
const bodyParser = require('body-parser');
const postDB = require("./db");
const validateDuckFeeding = require('./inputValidation');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.text());

// get all duck feeding entries
app.get('/api/all', (req, res) => {
    // TODO: replace payload with appropriate DB query result
    res.json(feeding);
})

// post a new duck feeding entry
app.post('/api/feed', async (req, res) => {
    console.log(req.body);
    const inputValidation = validateDuckFeeding(req)
    if (inputValidation.valid === false){
        res.status(400)
        res.json(inputValidation)
    } else {
        const dbResponse = await postDB(req.body)
        if (dbResponse.hasOwnProperty("message")){
            res.status(500)
        } else {
            res.status(201)
        }
        console.log(dbResponse);
        res.json(dbResponse)
    }
})

app.listen(process.env.PORT, () => console.log("Server running on port ", process.env.PORT));