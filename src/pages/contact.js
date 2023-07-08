import React from "react";
import './pageStyles/contact.css';

const ContactUs = () => {
    return(
        <>
            <div className="contactpage">
                <h1>Contact Us</h1>
                <p>Street:  1956 Still Street<br/> 
                    City:  Norwalk<br/>
                    State/province/area: Ohio<br/>
                    Phone number:  419-664-3187<br/>
                    Zip code:  44857<br/>
                    Country calling code:  +1<br/>
                    Country:  United States</p>
                <br/>
                <p>Customer service: <a href="www.google.com">superpetcare@fitwl.com</a></p>
            </div>
        </>
    );
}

export default ContactUs;