import React from 'react';
import Slider from './Slider';
import './App.css';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducers/app';

const store = createStore(combineReducers);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Slider />
            </div>
        </Provider>
    );
}

export default App;
