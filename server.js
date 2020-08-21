const express = require('express');

const PORT = 5000;
const app = express();

app.use(express.urlencoded({extended: false}))

app.get('/api/all', (req, res) => {
    // TODO: replace payload with appropriate DB query result
    const feeding = [
        {id: 1, food: "bread", time:"9:00", location: "Beacon Hill Park", number_of_ducks: 12, food_amount: "0.5kg"},
        {id: 2, food: "popcorn", time:"15:00", location: "Willows Beach", number_of_ducks: 7, food_amount: "0.2kg"}
    ];
    res.json(feeding);
})

app.listen(PORT, () => console.log("Server running on port ", PORT));