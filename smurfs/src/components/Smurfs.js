import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/smurfActions';

class Smurfs extends Component {
    componentWillMount() {
        this.props.fetchSmurfs();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newSmurf) {
            this.props.smurfs.unshift(nextProps.newSmurf);
        }
    }
    
    render() {
        // const smurfVillage = this.props.smurfs.map(smurf => (
        //                                                     <div key={smurf.id}>
        //                                                         <p>{smurf.name}</p>
        //                                                         <p>{smurf.age}</p>
        //                                                         <p>{smurf.height}</p>
        //                                                     </div>
        // ))
        return (
            <div>
                <h3>Smurfs</h3>
                {/* {smurfVillage} */}
            </div>
        )
    }
}

Smurfs.propTypes = {
    fetchSmurfs: PropTypes.func.isRequired,
    smurfs: PropTypes.array.isRequired,
    newSmurf: PropTypes.object
};

const mapStateToProps = state => ({
    smurfs: state.smurfs.items,
    newSmurf: state.smurfs.item
});

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);