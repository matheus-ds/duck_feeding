
/// Validates user input for duck feeding
/// params:
/// -- req: (json) request that was made to the server
const validateDuckFeeding = (req) => {
    // TODO: implement input validation
    if (req.body.food === undefined || req.body.food === "" ) {
        return {valid:false, message: "Missing food information"}
    }
    if (req.body.time === undefined || req.body.time === "" ) {  // ^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$
        return {valid:false, message: "Missing time information"}
    }
    if (req.body.location === undefined || req.body.location === "" ) {
        return {valid:false, message: "Missing location information"}
    }
    if (typeof(req.body.number_of_ducks) !== 'number' ) {
        return {valid:false, message: "Missing number of ducks information"}
    }
    if (req.body.food_amount === undefined || req.body.food_amount === "" ) {
        return {valid:false, message: "Missing food amount information"}
    }
    return {valid: true}
}

module.exports = validateDuckFeeding;