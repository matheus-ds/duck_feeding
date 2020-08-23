
/// Validates user input for duck feeding
/// params:
/// -- req: (json) request that was made to the server
const validateDuckFeeding = (payload) => {
    // TODO: implement input validation
    if (payload.food === undefined || payload.food === "" ) {
        return {valid:false, message: "Missing food information"}
    }
    if (payload.time === undefined || payload.time === "" ) {  // ^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$
        return {valid:false, message: "Missing time information"}
    }
    if (payload.location === undefined || payload.location === "" ) {
        return {valid:false, message: "Missing location information"}
    }
    if (isNaN(parseInt(payload.number_of_ducks)) || parseInt(payload.number_of_ducks) <= 0 ) {
        return {valid:false, message: "Missing number of ducks information"}
    }
    if (payload.food_amount === undefined || payload.food_amount === "" ) {
        return {valid:false, message: "Missing food amount information"}
    }
    return {valid: true}
}

module.exports = validateDuckFeeding;