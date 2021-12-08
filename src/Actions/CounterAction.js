import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_MULTIPLY } from './ActionTypes';

export const incrementCounter = (payload) => {
    return {
        type: COUNTER_INCREMENT
    };
};

export const decrementCounter = (payload) => {
    return {
        type: COUNTER_DECREMENT
    };
};

export const multiplyCounter = (payload) => {
    return {
        type: COUNTER_MULTIPLY
    };
};

