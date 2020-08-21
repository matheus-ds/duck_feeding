const express = require('express');
const bodyParser = require('body-parser');
const validatePost = require('./inputValidation')
const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.text());

const feeding = [
    {id: 1, food: "bread", time:"9:00", location: "Beacon Hill Park", number_of_ducks: 12, food_amount: "0.5kg"},
    {id: 2, food: "popcorn", time:"15:00", location: "Willows Beach", number_of_ducks: 7, food_amount: "0.2kg"}
];
// get all duck feeding entries
app.get('/api/all', (req, res) => {
    // TODO: replace payload with appropriate DB query result
    res.json(feeding);
})

// post a new duck feeding entry
app.post('/api/feed', (req, res) => {
    console.log(req.body);
    const inputValidation = validatePost(req)
    if (inputValidation.valid === false){
        res.status(400)
        res.json(inputValidation)
    } else {
        // TODO: add id when connected to DB on try and catch block and throw 400 in case of server failure
        feeding.unshift(req.body)
        
        res.status(201)
        res.json(req.body)
    }
})

app.listen(PORT, () => console.log("Server running on port ", PORT));