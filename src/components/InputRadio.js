import React from 'react';

function InputRadio({ optionnameok, sentenceid, id, name, idok }) {
    const handleChangeOption = (event) => {
        console.log(sentenceid, id, name, idok);
        const el_textok = document.querySelector("#id_textok_" + sentenceid);
        const el_divsentence = document.querySelector("#id_divsentence_" + sentenceid);
        //const el_option = document.querySelector("#id_option_" + sentenceid + "_" + id);
        const el_labeloption = document.querySelector("#id_labeloption_" + sentenceid + "_" + id);

        el_textok.textContent = optionnameok;

        if (id === idok) {
            el_labeloption.classList.add("bg-success");
            el_labeloption.textContent = el_labeloption.textContent + " 🙂";
        } else {
            el_labeloption.classList.add("bg-danger");
            el_labeloption.textContent = el_labeloption.textContent + " 😡";
        }

        const el_inputs = el_divsentence.getElementsByTagName("input");
        for (const el_input of el_inputs) {
            el_input.disabled = true;
        }

        console.log("good option : ", optionnameok);
    };

    return (
        <div className="form-check" key={id}>
            <input onChange={handleChangeOption} className="form-check-input" type="radio" id={`id_option_${sentenceid}_${id}`} name={`id_optionsgroup_${sentenceid}`} />
            <label id={`id_labeloption_${sentenceid}_${id}`} className="form-check-label" htmlFor={`id_option_${sentenceid}_${id}`}>{name}</label>
        </div>
    );
}

export default InputRadio;