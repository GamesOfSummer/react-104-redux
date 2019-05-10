import { ADDTASK } from '../reducer/key-strings';

export const addNewTask = itemToDo => {
    return {
        type: ADDTASK,
        text: itemToDo
    };
};
