import {connect} from 'react-redux';
import PostsDisplay from './posts_display';
import {fetchCity} from '../actions/city_actions';
import {fetchCategories} from '../actions/category_actions';
import {fetchPosts, resetPosts} from '../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    categories: Object.keys(state.entities.categories).map((key) => state.entities.categories[key]),
    allPosts: Object.keys(state.entities.posts).map((key) => state.entities.posts[key])
});

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: (city_id) => dispatch(fetchPosts(city_id)),
    resetPosts: () => dispatch(resetPosts())
});

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostsDisplay);

export default PostFormContainer;