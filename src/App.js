import './App.css';
import {useReducer} from "react";
import {useForm} from "react-hook-form";

const {register, handleSubmit} = useForm();
const init = (initialValue) => {
    return {cats: initialValue, dogs: initialValue}
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'AddCat':
            return {...state, cats: state.cats}
        case  'AddDog':
            return {...state, dogs: state.dogs}
    }
    return {...state}
}
const onsubmit = (data) => {
    console.log(data)
};


const  App =()=> {
    const [state, dispatch] = useReducer(reducer,[], init);

    return (
        <div className="App">
            <form onSubmit={() => handleSubmit(onsubmit)}>
                <input {...register('Cat name')} type="text" placeholder={'Cat name'}/>
                <button onClick={() => dispatch()}>Save</button>
                <input type="text" placeholder={'Dog name'}/>
                <button>Save</button>
                <hr/>

            </form>

        </div>
    );
}

export default App;
