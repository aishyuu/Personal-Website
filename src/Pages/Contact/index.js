import emailjs from "@emailjs/browser";
import React, {useRef} from 'react'
import './index.css'

export default function Contact() {
    const form = useRef()

    function sendEmail(e) {    
        e.preventDefault();

    emailjs.sendForm('service_y0ncwek', 'template_qvjc0rn', e.target, '_5600ynFr9qkZIhrx')
        .then((result) => {
            console.log(result.text);
            alert('Sent!');
        }, (error) => {
            console.log(error.text);
            alert("error: Email not sent");
        });
        e.target.reset()
    }

    return(
        <div className="contact-container">
            <h2 className="contact-title">Contact Me!</h2>
            <p className="contact-text">Feel free to contact me for anything! I'm always looking for opportunities to connect with people and learn from them and maybe even teach them!</p>
            <p className="contact-text">Regardless, thank you so much for checking out the site. I really appreciate it!</p>
            <div>
            <form ref={form} onSubmit={sendEmail}>
                    <div className="user-inputs">
                        <div className="name-input">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email-address-input">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="subject-input">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="message-input">
                            <textarea className="form-control" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="submit-button">
                            <input type="submit" className="btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}