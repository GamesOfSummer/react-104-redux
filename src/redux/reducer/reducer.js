import { ADDTASK } from './key-strings';

const initialState = {
    todos: [
        { task: 'clean room !', finish: false },
        { task: 'wash dishes !!', finish: false },
        { task: 'do homework !!!', finish: false }
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
