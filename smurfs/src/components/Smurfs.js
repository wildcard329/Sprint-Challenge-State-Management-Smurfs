import React, { Component } from 'react';
import axios from 'axios';

class Smurfs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: []
        }
    }

    componentDidMount() {
        axios.get('/smurfs')
            .then(res => console.log(res))
            .then(data => this.setState({ smurfs: data }));
    }
    
    render() {
        const smurfVillage = this .state.smurfs.map(smurf => (
                                                            <div key={smurf.id}>
                                                                <p>{smurf.name}</p>
                                                                <p>{smurf.age}</p>
                                                                <p>{smurf.height}</p>
                                                            </div>
        ))
        return (
            <div>
                <h3>Smurfs</h3>
            </div>
        )
    }
}

export default Smurfs;