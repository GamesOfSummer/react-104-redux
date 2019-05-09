import React, { Component } from 'react';

// Redux things
import { connect } from 'react-redux';
import { store } from './redux/store';
import { addNewTask } from './redux/actions/actions';

const stateReturner = state => {
    console.log('The STATE: ', state);
    return state;
};

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            numberoftasks: 0
        };
    }

    componentDidMount() {
        let numberOfTask = store.getState();
        this.setState({ numberoftasks: numberOfTask.todos.length });
    }

    addTask = () => {
        console.log('Task to add: ', this.state.task);
        store.dispatch(addNewTask(this.state.task));
        this.setState({ task: '' });
        this.componentDidMount();
    };

    render() {
        return (
            <div>
                <h1>Page Home</h1>
                <p>Here you add the tasks to the list... a</p>
                <br />

                <h4>
                    You curriently have: {this.state.numberoftasks} task to do.
                </h4>

                <div>
                    <input
                        type="text"
                        value={this.state.task}
                        onChange={e => {
                            this.setState({ task: e.target.value });
                        }}
                    />
                    <br />
                    <br />
                    <button onClick={this.addTask}>Add Todo</button>
                </div>
            </div>
        );
    }
}

export default connect(stateReturner)(AddTodo);
