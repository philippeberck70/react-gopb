import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container mt-3'>
            <h3>Accueil</h3>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/exerciceslist">Liste des exercices</Link></li>
            </ul>
        </div >
    );
}

export default Home;