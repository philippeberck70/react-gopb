import React from 'react';
import { Link } from 'react-router-dom';

function ExercicesList() {
    return (
        <div className='container mt-3'>            
            <h3>Menu</h3>
            <ul>
                <li><Link to="/">Accueil</Link></li>
            </ul>
            <h5>Exercices</h5>
            <ul>
                <li><Link to="/exercice/1">Exercice 1</Link></li>
                <li><Link to="/exercice/2">Exercice 2</Link></li>
            </ul>
        </div>
    );
}

export default ExercicesList;