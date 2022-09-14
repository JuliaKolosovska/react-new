import logo from './logo.svg';
import './App.css';
import {simpsons} from "./data";

function App() {
  let title='Simpsons'
  return (
    <div className="App">
     <h2>{title}</h2>
        {
            simpsons.map(simpson=> (<div>
                    <h3>{simpson.name} {simpson.surname}</h3>
                <p>Age: {simpson.age}</p>
                <p>{simpson.info}</p>
                <img src={simpson.photo}/>
            </div>)
            )
        }
    </div>
  );
}

export default App;
