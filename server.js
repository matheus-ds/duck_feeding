const express = require('express');
const bodyParser = require('body-parser');
const {postDB, getAllDB} = require("./db");
const validateDuckFeeding = require('./inputValidation');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.text());

/// get all duck feeding entries
app.get('/api/feed/all', async (req, res) => {
    const result = await getAllDB();
    res.json(result);
})

/// post a new duck feeding entry
app.post('/api/feed', async (req, res) => {
    console.log(req.body);
    const payload = JSON.parse(req.body);
    console.log(payload.time);
    const inputValidation = validateDuckFeeding(payload)
    if (inputValidation.valid === false){
        console.log(inputValidation.message)
        res.status(400)
        res.json(inputValidation)
    } else {
        const dbResponse = await postDB(payload)
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