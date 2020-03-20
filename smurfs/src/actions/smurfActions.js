import { FETCH_SMURFS, NEW_SMURF } from './types';

export const fetchSmurfs = () => dispatch => {
    fetch('/smurfs')
            .then(smurfs => 
                dispatch({
                    type: FETCH_SMURFS,
                    payload: smurfs
                }));
};

export const createSmurf = (smurfData) => dispatch => {
    fetch('/smurfs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(smurfData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_SMURF,
        payload: smurf
    }));
};