import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSmurf } from '../actions/smurfActions';

class SmurfsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.createSmurf(smurf);
    }

    render() {
        return (
            <div>
                <h3>Add a Smurf!</h3>
                <form onSubmit={this.onSubmit}></form>
                    <div>
                        <label>Name: </label><br />
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label>Age: </label><br />
                        <input type="text" name="age" onChange={this.onChange} value={this.state.age} />
                    </div>
                    <div>
                        <label>Height: </label><br />
                        <input type="text" name="height" onChange={this.onChange} value={this.state.height} />
                    </div>
                    <br />
                    <button type="submit">Submit Smurf!</button>
            </div>
        )
    }
};

SmurfsForm.propTypes = {
    createSmurf: PropTypes.func.isRequired
};

export default connect(null, { createSmurf })(SmurfsForm);