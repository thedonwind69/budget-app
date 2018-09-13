import {RECEIVE_POST_ERRORS, RESET_POST_ERRORS} from '../actions/post_actions';
import merge from 'lodash/merge';

const postErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POST_ERRORS:
            const errors = action.errors
            return errors
        case RESET_POST_ERRORS:
            return {};
        default:
            return state;
    }
}

export default postErrorsReducer;