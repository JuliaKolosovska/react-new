import Launch from "./Launch";
import {useEffect, useState} from "react";


export default function Launches() {
    let [launches, setLaunches] = useState([]);


    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setLaunches(value);
            })

    });

    return (<div>
            {launches.filter(({launch_year}) => launch_year !== '2020').map((launch, index) => (<Launch
                item={launch}
                key={index}
            />))}
        </div>
    );
}


