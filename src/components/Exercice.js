import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import InputRadio from './InputRadio';
import parse from 'html-react-parser';

function Exercice() {
    let { id } = useParams();
    const [filename, setFilename] = useState(id + ".json");
    
    console.log(filename);

    const [state, setState] = useState({
        status: "idle",
        data: null,
        error: null
    });

    useEffect(() => {
        setState({ status: "loading", data: null, error: null });
        import("../data/" + filename)
            .then((data) => {
                setState({ status: "success", data, error: null });
            })
            .catch((error) => {
                setState({ status: "error", data: null, error });
            });
    }, [filename]);

    return (
        <div className='container mt-3'>
            {state.status === "loading" && <div>Chargement des données...</div>}
            {state.status === "error" && <div>Problème lors du chargement des données JSON !</div>}
            {state.status === "success" && <div>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/exerciceslist">Liste des exercices</Link></li>
                <h3>Exercice {id}</h3>
                <h5>{state.data.sentences.length} phrases</h5>
                <p>Trouvez le mot manquant dans chaque phrase.</p>
                {
                    state.data.sentences.map((sentence) => (
                        <div key={sentence.id} className='mb-3' id={`id_divsentence_${sentence.id}`}>
                            <h6>{parse(sentence.name.replace('_', '<u><span className="text-success" id="id_textok_' + sentence.id + '">___</span></u>'))}</h6>
                            {
                                sentence.options.map((option) => (
                                    <div key={option.id}>
                                        <InputRadio optionnameok={sentence.options[sentence.idok-1].name} sentenceid={sentence.id} id={option.id} name={option.name} idok={sentence.idok} />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            }

        </div>
    );
}

export default Exercice;
