import React from 'react';
import { connect } from 'react-redux';
import { store } from './redux/store';
import { addNewTask } from './redux/actions/actions';
import OutputStore from './OutputStore';

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
                <h4>
                    You currently have: {this.state.numberoftasks} task to do.
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

                <OutputStore tasks={this.state.task} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { todos } = state;
    console.log('mapStateToProps - ' + state);
    return { todoList: todos.allIds };
}

export default connect(mapStateToProps)(AddTodo);
