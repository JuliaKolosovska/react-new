export default function User(props) {
    let {item: user, lift} = props;

    return (<div>
        <h3>{user.id}. {user.name}</h3>
        <button onClick={() => {
            lift(user.email);
        }}>Details
        </button>

    </div>)

}