export default function Launch(props) {
    let {item: launch, lift} = props;

    return (<div>
        <h3>{launch.mission_name}. {launch.launch_year}</h3>
        <img src={launch.links.mission_patch_small}/>
        {/*<button onClick={() => {*/}
        {/*    lift(launch.email);*/}
        {/*}}>Show e-mail*/}
        {/*</button>*/}

    </div>)

}