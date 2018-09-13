import * as CategoryAPIUtil from '../util/category_api_util';



export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories: categories
})

export const fetchCategories = () => {


    return function (dispatch) {
        CategoryAPIUtil.fetchCategories().then( (all_categories) => dispatch(receiveCategories(all_categories))    )
    }

};