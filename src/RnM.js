import {useState} from "react";

export default function RnM() {
    let [rnm, setRnm] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setRnm(value);
        });

    return (
        <div>
            {rnm.map((rn, id) => (<RnM item={rn} key={id}/>))}
        </div>
    );
}