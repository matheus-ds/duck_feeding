import React from 'react';
import './Form.css'


function Form(){
    return (
        <div>
            <h1>Form</h1>
            <form>
                <div>
                    <label for="food">Type of Food:</label>
                    <input type="text" id="food" name="food"/>
                </div>
                <div>
                    <label for="time">Time of the day:</label>
                    <input type="text" id="time" name="time"/>
                </div>
                <div>
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location"/>
                </div>
                <div>
                    <label for="number_of_ducks">Number of ducks fed:</label>
                    <input type="number" id="number_of_ducks" name="number_of_ducks"/>
                </div>
                <div>
                    <label for="food_amount">Food amount:</label>
                    <input type="text" id="food_amount" name="food_amount"/>
                </div>
            </form>
        </div>

    )
}

export default Form;
