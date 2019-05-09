import React from 'react';

import './App.css';

import AddTodo from './AddTodo';

import { Provider } from 'react-redux';

import OutputStore from './OutputStore';

import { createStore } from 'redux';
import { reducer } from './redux/reducer/reducer';

export const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AddTodo />
                <OutputStore />
            </div>
        </Provider>
    );
}

export default App;
