import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_MULTIPLY } from '../Actions/ActionTypes';

const initialState = {
    count: 0
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                count: state.count + 1
            };
        case COUNTER_DECREMENT:
            return {
                count: state.count - 1
            };
        case COUNTER_MULTIPLY:
            return {
                count: state.count * 2
            }
        default:
            return state;
    }
}
export default CounterReducer;
