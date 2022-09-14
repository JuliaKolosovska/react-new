
import './App.css';

import RnM from "./components/RnM";

function App() {
    let title='Rick and Morty'
    return (
        <div className="App">
            <h2>{title}</h2>
            <RnM/>
        </div>
    );
}

export default App;