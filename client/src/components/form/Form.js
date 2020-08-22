import React from 'react';
import './Form.css';
import {formValidation} from './formValidation';

function Form({saveForm, data}){
    const message = React.createRef();
    const [formData, setFormData] = React.useState(data || {});
    const handleChange = (e) =>{
        var prop = e.target.name;
        var value = e.target.value;
        setFormData((formData) => {return {... formData, [prop]:value}})
    }
    const handleSubmit = (e) => {
        const validForm = formValidation(formData);
        

        fetch("/api/feed", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        .then((a) => {
            if (message){
                message.current.style.display = "block";
                message.current.style.color = "green";
                message.current.innerHTML = "The form has been correctly submitted";
            }
        })
        .then(() => {
            setFormData({});
        })
        .catch((e) => {
            console.log(`Failed to post: ${e}`);
        })
    }
    React.useEffect( () => {
        console.log(formData)
        saveForm(formData);
    }, [formData])

    return (
        <div id="form">
            <h1>Form</h1>
            <form method="POST" action="/api/feed" onSubmit="return false">
                <div>
                    <label for="food" style={{width:"200px"}}>Type of Food: <span>*</span></label> <br />
                    <input type="text" id="food" name="food" placeholder={"bread, popcorn, ..."} onChange={handleChange} value={formData.food} required/>
                </div>
                <div>
                    <label for="time">Time of the day: <span>*</span></label> <br />
                    <input type="text" id="time" name="time" placeholder={"15:00"} onChange={handleChange} value={formData.time} required/>
                </div>
                <div>
                    <label for="location">Location: <span>*</span></label> <br />
                    <input type="text" id="location" name="location" placeholder={"Beacon Hill Park"} onChange={handleChange} value={formData.location} required/>
                </div>
                <div>
                    <label for="number_of_ducks">Number of ducks fed: <span>*</span></label> <br />
                    <input type="number" id="number_of_ducks" name="number_of_ducks" placeholder={"0"} onChange={handleChange} value={formData.number_of_ducks} required/>
                </div>
                <div>
                    <label for="food_amount">Food amount: <span>*</span></label> <br />
                    <input type="text" id="food_amount" name="food_amount" placeholder={"0.2 kg"} onChange={handleChange} value={formData.food_amount} required/>
                </div>

                {/* This will only display on successful submit of the form */}
                <p ref={message} style={{display:"none"}}></p> 
                
                <button onClick={handleSubmit} type="button">Submit</button>
            </form>
        </div>

        )
}

export default Form;
