import { ADDTASK } from '../reducer/key-strings';

export const addNewTask = itemToDo => {
    return {
        index: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
        type: ADDTASK,
        text: itemToDo
    };
};
