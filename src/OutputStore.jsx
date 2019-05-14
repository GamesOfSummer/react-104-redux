import React, { Component } from 'react';

// Redux things
import { connect } from 'react-redux';
import { store } from './redux/store';

class OutputStore extends Component {
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
                        return <li key={tasks.index}>{tasks.text}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default OutputStore;
