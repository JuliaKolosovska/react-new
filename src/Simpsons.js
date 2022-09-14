export default function Simpson(props) {

       let {item:simpson} =props

    return (<div>
        <h3>{simpson.name} {simpson.surname}</h3>
        <p>Age: {simpson.age}</p>
        <p>{simpson.info}</p>
        <img src={simpson.photo}/>
    </div>)
}