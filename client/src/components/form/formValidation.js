function formValidation(formData) {
    const expected_params = ["food", "time", "location", "number_of_ducks", "food_amount"];

    for ( const key of expected_params) {
        if (! formData.hasOwnProperty(key) || formData[key] == "") {
            let key_friendly = key.split("_").join(" ");
            return {valid: false, message: `Missing information: ${key_friendly}`};
        }
    }
    return {valid: true};
}

export {formValidation};