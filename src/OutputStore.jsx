import React, { Component } from 'react';

// Redux things
import { connect } from 'react-redux';
import { store } from './redux/store';

const stateReturner = state => {
    //console.log('The STATE: ', state);
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
        let fullStore = store.getState();
        console.log('The store in todos-p: ', fullStore);
        this.setState({ tasks: fullStore.todos });
    }

    render() {
        return (
            <div>
                <h2>List - </h2>
                <br />

                <ul>
                    {this.state.tasks.map(tasks => {
                        return <li key={tasks.index}>{tasks.task}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(stateReturner)(OutputStore);
