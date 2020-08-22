function formValidation(formData) {
    const expected_params = {
        food: "banana",
        time: "9 am",
        location: "beacon",
        number_of_ducks: "2",
        food_amount: "2"
    }
    for( const key in expected_params){
        if (! formData.hasOwnProperty(key) || formData[key] == ""){
            console.log(key);
        }
        
    }
    console.log(expected_params);

}

export {formValidation};