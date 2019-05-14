import React from 'react';

import './App.css';
import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer/reducer';

export const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AddTodo />
            </div>
        </Provider>
    );
}

export default App;
