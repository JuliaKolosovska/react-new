import {useState} from "react";

import {commentService} from "./services";
import Comments from "./components/comments/Comments";
import {Users} from "./components";



function App() {
    const [comments, setComments] = useState([]);

    const getUserId = (userId) => {
        commentService.getComments(userId).then(({data}) => setComments(data))

        return (
            <div>
                <Users getUserId={getUserId}/>
                <Comments comments={comments}/>
            </div>
        );
    };
}

export default App;