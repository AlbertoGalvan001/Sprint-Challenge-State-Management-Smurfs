import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
} from '../actions';

const initialState = [{
    date: [{ 'name': 'Brainey', 'age': 200, 'height': '5cm', 'id': 0 }],
    isFetching: false,
    error: ''
}];

const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            const startState = {
                ...state,
                isFetching: true,
                error: ''
            };
            console.log('smurf startState', startState);
            return startState;

        case FETCH_SMURFS_SUCCESS:
            const successState = {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            };
            console.log('smurf successState', successState);
            return successState;

        case FETCH_SMURFS_FAILURE:
            const failState = {
                ...state,
                data: '',
                isFetching: false,
                error: action.payload
            };
            console.log('smurf failState', failState);
            return failState;

        default:
            return state;
    }
}

export default smurfReducer;