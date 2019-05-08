import React from 'react';

class RatePerDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }

    render() {
        return (
            <div>
                <label>Per Day @ 8 hours: $ {this.props.value * 8}</label>
                <br />
                <label>Per Week at 40 hours: $ {this.props.value * 40}</label>
                <br />
                <label>
                    Per Month at 160 hours: $ {this.props.value * 160}
                </label>
                <br />
                <label>
                    Per Month at 160 hours - ~30%: ${' '}
                    {this.props.value * 160 * 0.7}
                </label>
            </div>
        );
    }
}

export default RatePerDay;
