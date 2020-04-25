import CONSTANTS from './constants';

export const submitValue = value => {
    return {
        type: CONSTANTS.CALCULATE,
        value
    }
}

export const reportError = (value, message) => {
    return {
        type: CONSTANTS.ERROR,
        error: message,
        value
    }
}
