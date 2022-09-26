import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom";

import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import {PostsOfComment} from "./components/postsOfComment/PostsOfComment";

function App() {
    return (
        <div>


            <h3><Link to={'/todos'}>Todos</Link></h3>
            <h3><Link to={'/albums'}>Albums</Link></h3>
            <h3><Link to={'/comments'}>Comments</Link></h3>


            <Routes>
                <Route path={'todos'} element={<Todos/>}/>;
                <Route path={'albums'} element={<Albums/>}/>;
                <Route path={'comments'} element={<Comments/>}/>;
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={'posts/:id'} element={<PostsOfComment/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
