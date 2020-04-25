import CONSTANTS from '../actions/constants';

export const formReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case CONSTANTS.CALCULATE:
            return {
                ...state,
                id: action.id,
                input: action.value,
                error: '',
                status: CONSTANTS.VALID_STATUS
            };
        case CONSTANTS.ERROR:
            return {
                ...state,
                id: action.id,
                input: action.value,
                error: action.error,
                status: CONSTANTS.INVALID_STATUS
            };
        default:
            return state
    }
};
