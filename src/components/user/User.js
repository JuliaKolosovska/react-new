import {getPosts} from "../../services/api";

export default function User(props) {
    let {item: user, lift} = props;

    return (<div>
        <h3>{user.id}. {user.name}</h3>
        <button onClick={() => {
            lift(getPosts(user.id));
        }}>Show posts
        </button>

    </div>)

}