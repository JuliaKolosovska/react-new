export default function User(props) {
    let{item:user}=props;

    return(<div>
        <h3>{user.id}. {user.name}</h3>
        <button>Details</button>

    </div>)

}