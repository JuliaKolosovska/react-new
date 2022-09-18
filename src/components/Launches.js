import {useEffect, useState} from "react";
import Launch from "./Launch"

export default function Launches() {
    let [launches, setLaunches] = useState([]);
    let [launch, setLaunch] = useState(null);
    // const lift = (obj) => {
    //     setLaunch(obj);
    // }

useEffect(() => {

    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => {
            setLaunches(value);
        })

}, []);

return (<div>
    {/*{launch && <div> {JSON.stringify(launch)}</div>}*/}


        {launches.map((launch, index) => (<Launch
                item={launch}
                key={index}
           />))}
</div>
);
}


