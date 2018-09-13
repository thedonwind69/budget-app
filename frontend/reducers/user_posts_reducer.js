import merge from 'lodash/merge';
import {RECEIVE_USER_POSTS} from '../actions/post_actions';

const userPostsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER_POSTS:
            return action.posts;
        default:
            return state;
    }
};

export default userPostsReducer;