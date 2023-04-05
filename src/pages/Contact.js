import React, { useState } from "react";
import '../styles/contact.css';

function Contact() {

    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // submit form
    };

    const isValidEmail = (email) => {
        // email validation logic here
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (

        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div class="right">
                    <form onSubmit={handleSubmit} id="contact" action="" method="post">
                        <h2>Contact Us</h2>
                        <input type="text" className="field" placeholder="Your Name" tabindex="1" required autofocus />
                        <input onChange={handleEmailChange} type="text" className="field" placeholder="Your Email" />
                        <input type="text" className="field" placeholder="Phone" />
                        <textarea placeholder="Message" className="field" tabindex="2" required></textarea>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" className="btn">Send</button>
                    </form>
                </div>
            </div>
        </div>




    )
};

export default Contact;
{/* <div className="contact__container">
<div >
    <img className="contact__img" src="./images/stem.jpg" alt="perfume bottle" />
    <div class="container">
        <form onSubmit={handleSubmit} id="contact" action="" method="post">
            <h3>Contact Us</h3>
            <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus />
            </fieldset>
            <fieldset>
                <input onChange={handleEmailChange} placeholder="Your Email Address" type="email" tabindex="2" required />
            </fieldset>
            <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
            </fieldset>

            <fieldset>
                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
            <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
        </form>
    </div>
</div>
</div> */}