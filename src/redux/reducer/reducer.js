import { ADDTASK } from './key-strings';

const initialState = {
    todos: [
        { index: 1, task: 'clean room !', finish: false },
        { index: 2, task: 'wash dishes !!', finish: false },
        { index: 3, task: 'do homework !!!', finish: false }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            state.todos.push({ task: action.text, finish: false });
            return { todos: state.todos };
        default:
            return state;
    }
};
