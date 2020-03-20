import { FETCH_SMURFS, NEW_SMURF } from './types';
import axios from 'axios';

export const fetchSmurfs = () => dispatch => {
    axios
            .get('http://localhost:3333/smurfs/data')
            .then(res => console.log(res))
            .then(smurfs => 
                dispatch({
                    type: FETCH_SMURFS,
                    payload: smurfs
                }));
};

export const createSmurf = (smurfData) => dispatch => {
    axios
            .post('http://localhost:3333/smurfs/data', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(smurfData)
            })
            .then(res => res.json())
            .then(smurf => dispatch({
                type: NEW_SMURF,
                payload: smurf
            }));
};