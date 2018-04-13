import * as test from './action-type'

let defaultState = {
    value0: '',
    value1: '',
};

export const testReducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case test.TEST:
            return {value0: action.value0, value1: action.value1};
        default:
            return state;
    }
};
