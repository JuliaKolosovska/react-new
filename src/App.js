
import './App.css';
import {simpsons} from "./data";
import Simpsons from "./Simpsons";

function App() {
    let title='Simpsons'
    return (
        <div className="App">
            <h2>{title}</h2>
            {
                simpsons.map(simpson=> (<Simpsons item={simpson}/>)
                )
            }
        </div>
    );
}

export default App;