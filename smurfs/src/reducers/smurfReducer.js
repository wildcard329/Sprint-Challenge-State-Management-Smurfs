import { FETCH_SMURFS, NEW_SMURF } from '../actions/types';

const initialState = {

    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURFS:
            console.log('reducer',state)
            return {
                ...state,
                items: action.payload
            };
        case NEW_SMURF:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
};