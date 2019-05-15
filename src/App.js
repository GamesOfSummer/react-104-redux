import React from 'react';

import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer/reducer';

export const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <div>
                <AddTodo />
            </div>
        </Provider>
    );
}

export default App;
