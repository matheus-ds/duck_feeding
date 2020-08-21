import React from 'react';
import './Home.css'
import Button from '@material-ui/core/Button'

function Home({goToForm}){
    return (
        <div id="home">
            <h1>Welcome to the Duck Research Centre</h1>
            
            <p>
                In this website, you will be able to submit information about the how you feed ducks.
                This information is being collected for research by a very important scientist.
                By using this website, you agree to our <a href="#">Terms and conditions</a>.
            </p>
                <Button onClick={goToForm} variant="contained" color="primary" style={{display: "block", margin: "50px auto"}}>
                    Go to Form
                </Button>
        </div>
    )
}

export default Home;
