import React from 'react';
import RatePerDay from './RatePerDay';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div className="my-5">
                    <label htmlFor="customRange1">Per hour amount :: </label>
                    <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                        onChange={this.handleChange}
                    />

                    <label>$ {this.state.value} per hour</label>
                </div>

                <RatePerDay value={this.state.value} />
            </div>
        );
    }
}

export default Slider;
