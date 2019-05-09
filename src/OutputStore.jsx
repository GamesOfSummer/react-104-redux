import React, { Component } from 'react';

// Redux things
import { connect } from 'react-redux';
import { store } from './redux/store';

const stateReturner = state => {
    console.log('The STATE: ', state);
    return state;
};

class OutputStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskstd: []
        };
    }

    componentWillMount() {
        let fullRxStore = store.getState();
        console.log('The store in todos-p: ', fullRxStore);
        this.setState({ taskstd: fullRxStore.todos });
    }
    render() {
        return (
            <div>
                <h2>List of Todos - k</h2>
                <br />
                <br />

                {this.state.taskstd.map(x => {
                    return (
                        <div>
                            <div>Task: {x.task}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default connect(stateReturner)(OutputStore);
