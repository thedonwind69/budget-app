import * as BudgetAPIUtil from '../util/budget_api_util';
export const RECEIVE_BUDGETS = 'RECEIVE_BUDGETS';
export const RECEIVE_BUDGET = 'RECEIVE_BUDGET';
export const RECEIVE_BUDGET_ERRORS = 'RECEIVE_BUDGET_ERRORS';
export const RESET_BUDGETS= 'RESET_BUDGETS';
export const RESET_BUDGET_ERRORS = 'RESET_BUDGET_ERRORS';
// export const UPDATE_WITH_DELETED_POST = 'DELETE_POST';
// export const RECEIVE_UPDATED_POST = 'RECEIVE_UPDATED_POST';

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts: posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post: post
});

export const updateWithDeletedPost = (post) => ({
    type: UPDATE_WITH_DELETED_POST,
    post: post
})

export const receiveUpdatedPost = (post) => ({
    type: RECEIVE_UPDATED_POST,
    post: post
})

export const resetPosts = () => ({
    type: RESET_POSTS,
})

export const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors: errors
})

export const resetPostErrors = () => ({
    type: RESET_POST_ERRORS
})

export const fetchPosts = (city_id) => {
    return function (dispatch) {
        PostAPIUtil.fetchPosts(city_id).then((all_posts) =>  dispatch(receivePosts(all_posts)))
    }
};

export const createPost = (post) => {
    return function (dispatch) {
        PostAPIUtil.createPost(post).then( (created_post) => (
            dispatch(receivePost(created_post))
        ), err => (
            dispatch(receivePostErrors(err.responseJSON))
        ))
    }
};

export const updatePost = (post, user_id, post_id) => {
    return function (dispatch) {
        PostAPIUtil.updatePost(post, user_id, post_id).then( (updated_post) => (
            dispatch(receiveUpdatedPost(updated_post))
        ), err => (
            dispatch(receivePostErrors(err.responseJSON))
        ))
    }
};

export const deletePost = (user_id, post_id) => {
    return function (dispatch) {
        PostAPIUtil.deletePost(user_id, post_id).then((deletedPost) => dispatch(updateWithDeletedPost(deletedPost)))
    }
};