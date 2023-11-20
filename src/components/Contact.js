import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className='container mt-3'>
            <h3>Contact</h3>
            <ul>
                <li><Link to="/">Accueil</Link></li>
            </ul>
            <h6>Philippe Berck</h6>
            <p>✍ Si vous avez des questions ou des suggestions, n'hésitez pas à m'envoyer un message via mon courriel : <b>philippe.berck70@gmail.com</b></p>
        </div>
    );
}

export default Contact;